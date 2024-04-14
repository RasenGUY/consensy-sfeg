import { useBorrowEthForNFTMutation } from "../../app/blockchainApiSlice";
import { PledgeNFTModel } from "../../models/pledge"
import toast from "react-hot-toast";

type NFTCardProps = {
 nft: PledgeNFTModel
}

export const NFTCard: React.FC<NFTCardProps> = ({nft}: NFTCardProps) => {
  const [borrow, borrowQuery] = useBorrowEthForNFTMutation();
 
  const borrowEth = async (tokenId: number) => {
    try {
      await borrow(BigInt(tokenId)).unwrap();
      toast.success('Borrowed ETH');
    } catch (error) {
      toast.error('Something went wrong');
    }
  }
  return (
    <div className="bg-neutral-400 w-[250px] h-[250px] relative flex border border-1 border-teal flex-col items-center justify-between rounded-3">
     <div className="absolute left-0 top-0 p-2">
      <h3>#<b>{Number(nft.tokenId)}</b></h3>
     </div>
     <div className="flex col items-center justify-center p-3 bg-neutral-400">
      <div className="circle rounded-full" style={{
        width: Number(nft.diameter).toString().concat("px"),
        height: Number(nft.diameter).toString().concat("px"),
        backgroundColor: nft.gradientOne, 
      }}></div>
     </div>
     <div className="relative flex justify-between w-full p-1 bg-neutral-600">
       {/* <button disabled className="p-2 bg-gray-800">Payback</button> */}
       <button className="p-2 bg-green-500" onClick={async () => await borrowEth(nft.tokenId)}>{borrowQuery.isLoading ? "...Borrowing" : "Collateralize"}</button>
     </div>
    </div>
  )
}
