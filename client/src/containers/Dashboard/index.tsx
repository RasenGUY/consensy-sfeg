import { useAccount, useDisconnect } from "wagmi";
import { useGetAccountAssetsQuery, useGetLiquidityQuery, useGetUserAccountBalanceQuery } from '../../app/blockchainApiSlice';
import { Address } from "viem";
import { NFTCard } from "../../components/NFTCard";


export const DashBoard = () => {
  const loadingMessage = "...loading"
 const { address } = useAccount();
 const { disconnect } = useDisconnect();
 const accountAssets = useGetAccountAssetsQuery(address as Address ?? '');
 const liquidity = useGetLiquidityQuery();  
 const accBalance = useGetUserAccountBalanceQuery();  

 return (
  <div className="flex flex-col">
   <div className="w-full flex flex-row bg-green-200 items-center justify-between px-5 py-3">
     <h1>Welcome {address}</h1>
     <button className="p-3 rounded-3 bg-red-500" onClick={() => disconnect()}>Disconnect</button>
   </div>
   <div className="w-full flex flex-col bg-green-200 items-start justify-between px-5 py-3">
      { liquidity.isLoading ? loadingMessage : <h1>Liquidity: {liquidity?.data} ETH</h1>}
      { accBalance.isLoading ? loadingMessage : <h1>Balance: {accBalance?.data} ETH</h1>}
   </div>
   <div className="grid grid-cols-4 gap-4 mt-5">
      {accountAssets.isLoading ? loadingMessage : accountAssets.data?.map((asset) => (
        <NFTCard nft={asset} key={crypto.randomUUID()} />
      ))}
   </div>
  </div>
  )
}
