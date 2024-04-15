// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { createApi  } from '@reduxjs/toolkit/query/react';
import { customBlockchainBaseQuery, BlockchainAPIBase, ContractTypes } from '../libs/blockchain';
import { Address, formatEther } from 'viem';
import { PledgeNFTModel } from '../models/pledge';
import { IPledge } from '../types';

const baseUrl = 'sfegblockchainApiSlice'
const baseQuery = customBlockchainBaseQuery({ baseUrl }, BlockchainAPIBase);
export const blockchainApiSlice = createApi({
  baseQuery,
  reducerPath: baseUrl,
  tagTypes: ['NFT_ASSETS_LIST', "AVAILABLE_LIQUIDITY", "AVAILABLE_BALANCE", "IS_BORROW_APPROVED"],
  endpoints: (builder) => ({
    getAccountAssets: builder.query<PledgeNFTModel[], Address>({
      query: (address) => ({
        contract: ContractTypes.PLEDGE,
        method: 'READ',
        functionName: 'getNFTsOf',
        args: [address],
    }),
    providesTags: [{ type: 'NFT_ASSETS_LIST'}],
    transformResponse: (response: IPledge.PledgeNFTStructOutput[]) => {
      return response.map((nft) => ({
        diameter: Number(nft.diameter),
        tokenId: Number(nft.tokenId),
        gradientOne: nft.gradientOne,
        gradientTwo: nft.gradientTwo,
      })) as PledgeNFTModel[];
    },
    }),
    getLiquidity: builder.query<string, void>({
      query: () => ({
      contract: ContractTypes.BORROW,
      method: 'READ',
      functionName: 'getLiquidity',
      args: [],
      }),
      providesTags: [{ type: 'AVAILABLE_LIQUIDITY'}],
      transformResponse: (response: bigint) => Number(formatEther(response)).toFixed(4), 
    }),
    getUserAccountBalance: builder.query<string, Address>({
      query: (account) => ({
      contract: ContractTypes.BORROW,
      method: 'READ',
      functionName: 'accountBalance',
      args: [account],
      }),
      providesTags: [{ type: 'AVAILABLE_BALANCE'}],
      transformResponse: (response: bigint) => Number(formatEther(response)).toFixed(5), 
    }),
    borrowEthForNFT: builder.mutation<void, bigint>({
      query: (tokenId: bigint) => ({
      contract: ContractTypes.BORROW,
      method: 'WRITE',
      functionName: 'borrowEthForNFT',
      args: [tokenId],
      }),
      invalidatesTags: [{ type: 'AVAILABLE_BALANCE'}, { type: 'AVAILABLE_LIQUIDITY'}, { type: 'NFT_ASSETS_LIST'}], 
    }),
    approveForBorrow: builder.mutation<void, {borrowAddress: Address, tokenId: bigint}>({
      query: ({ borrowAddress, tokenId }) => ({
      contract: ContractTypes.PLEDGE,
      method: 'WRITE',
      functionName: 'approve',
      args: [
        borrowAddress,
        tokenId
      ],
      }),
      invalidatesTags: (_A,_B,arg) => [{ type: 'IS_BORROW_APPROVED', id: Number(arg.tokenId) }], 
    }),
    isAssetApproved: builder.query<boolean, {borrowAddress: Address, tokenId: bigint}>({
      query: ({ borrowAddress: _, tokenId}) => ({
      contract: ContractTypes.PLEDGE,
      method: 'READ',
      functionName: 'getApproved',
      args: [
        tokenId
      ],
      }),
      providesTags: (_A,_B,args) => [{ type: 'IS_BORROW_APPROVED', id: Number(args.tokenId) }],
      transformResponse: (response: Address, _A, arg) => response.toLowerCase() === arg.borrowAddress.toLowerCase(), 
    }),
    withdraw: builder.mutation<void, void>({
      query: () => ({
      contract: ContractTypes.BORROW,
      method: 'WRITE',
      functionName: 'withdraw',
      args: [],
      }),
      invalidatesTags: [{ type: 'AVAILABLE_BALANCE'}], 
    })
  })
});

export const { 
  useGetAccountAssetsQuery,
  useGetLiquidityQuery,
  useGetUserAccountBalanceQuery,
  useBorrowEthForNFTMutation,
  useApproveForBorrowMutation,
  useIsAssetApprovedQuery,
  useWithdrawMutation
 } = blockchainApiSlice;
