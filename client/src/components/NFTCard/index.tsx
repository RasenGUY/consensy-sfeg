import { getAccount } from "@wagmi/core";
import { useApproveForBorrowMutation, useBorrowEthForNFTMutation, useIsAssetApprovedQuery } from "../../app/blockchainApiSlice";
import { ContractTypes, getAddress, config as wagmiConfig } from "../../libs/blockchain";
import { PledgeNFTModel } from "../../models/pledge"
import toast from "react-hot-toast";
import { Address } from "viem";


type NFTCardProps = {
 nft: PledgeNFTModel
}

export const NFTCard: React.FC<NFTCardProps> = ({nft}: NFTCardProps) => {
  const [borrow, borrowQuery] = useBorrowEthForNFTMutation();
  const [approve, approveQuery] = useApproveForBorrowMutation();
  const { chainId } = getAccount(wagmiConfig)
  const {data: isApproved, ...isApprovedQuery} = useIsAssetApprovedQuery({ borrowAddress: chainId ? getAddress(chainId, ContractTypes.BORROW) : '' as Address, tokenId: BigInt(nft.tokenId) });
 
  const borrowEth = async (tokenId: number) => {
    try {
      await borrow(BigInt(tokenId)).unwrap();
      toast.success('Borrowed ETH');
    } catch (error) {
      toast.error('Something went wrong');
    }
  }

  const approveForColl = async (tokenId: number) => {
    if(!chainId) return;
    const borrowAddress = getAddress(chainId, ContractTypes.BORROW);
    try {

      await approve({ borrowAddress, tokenId: BigInt(tokenId) }).unwrap();
      toast.success('Collateralization Approval Success');
    } catch (error) {
      console.log(error);
      toast.error('Approval Failed');
    }
  }

  return (
    <div className="bg-neutral-400 w-[250px] h-[250px] relative flex border border-1 border-teal flex-col rounded-lg">
     <div className="absolute left-0 top-0 p-2">
      <h3>#<b>{Number(nft.tokenId)}</b></h3>
     </div>
     <div className="grow flex items-center justify-center p-3 bg-neutral-400 rounded-lg">
      <div className="circle rounded-full bg-gradient-to-r" style={{
        width: Number(nft.diameter).toString().concat("px"),
        height: Number(nft.diameter).toString().concat("px"),
        background: `linear-gradient(to right, ${nft.gradientOne}, ${nft.gradientTwo})`,
      }}></div>
     </div>
     <div className="shrink relative flex justify-between w-full p-2 bg-neutral-600 rounded-b-lg">
       {/* <button disabled className="p-2 bg-gray-800">Payback</button> */}
         {
          !isApproved ? 
            <button 
            className="p-2 bg-green-500" 
            onClick={async () => await approveForColl(nft.tokenId)}
            disabled={approveQuery.isLoading || isApprovedQuery.isLoading}
            >{approveQuery.isLoading ? "...Processing" : "Approve"}</button>
          :
            <button 
            className="p-2 bg-green-500" 
            onClick={async () => await borrowEth(nft.tokenId)}
            disabled={borrowQuery.isLoading || isApprovedQuery.isLoading}
            >{borrowQuery.isLoading ? "...Borrowing" : "Collateralize"}</button>
        }
     </div>
    </div>
  )
}
