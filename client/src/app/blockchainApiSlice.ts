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
  tagTypes: ['NFT_ASSETS_LIST', "AVAILABLE_LIQUIDITY", "AVAILABLE_BALANCE"],
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
      transformResponse: (response: bigint) => Number(formatEther(response)).toFixed(3), 
    }),
    getUserAccountBalance: builder.query<string, void>({
      query: () => ({
      contract: ContractTypes.BORROW,
      method: 'READ',
      functionName: 'accountBalance',
      args: [],
      }),
      providesTags: [{ type: 'AVAILABLE_BALANCE'}],
      transformResponse: (response: bigint) => Number(formatEther(response)).toFixed(3), 
    }),
    borrowEthForNFT: builder.mutation<void, bigint>({
      query: (tokenId: bigint) => ({
      contract: ContractTypes.BORROW,
      method: 'WRITE',
      functionName: 'borrowEthForNFT',
      args: [tokenId],
      }),
      invalidatesTags: [{ type: 'AVAILABLE_BALANCE'}, { type: 'AVAILABLE_LIQUIDITY'}, { type: 'NFT_ASSETS_LIST'}], 
    })
   // check available liquidity
   // query owner nfts
   // borrow eth against collateral
   // balance 
  })
});

export const { 
  useGetAccountAssetsQuery,
  useGetLiquidityQuery,
  useGetUserAccountBalanceQuery,
  useBorrowEthForNFTMutation,
 } = blockchainApiSlice;
