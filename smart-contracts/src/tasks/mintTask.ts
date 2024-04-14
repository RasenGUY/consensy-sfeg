import { network } from "hardhat";
import { Pledge } from "../../../client/src/types";
import { Deployer } from "../deployer";
import { Task } from "./types";
import { ArtifactName, DependenciesMap, DeployedContractList } from "../types";
import { merge } from "lodash";
import { unwrapDependencies } from "../helpers";
import { generateRandomNFTs } from "../utils";
import { ZeroAddress } from "ethers";

/**
* deploys the pledge contract
*/
const mintTask: Task = {
 tags: ['mint', 'full'],
 priority: 2,
 inputOptions: true,
 run: async (
   ctx: Deployer, 
   dependencies: DependenciesMap, 
   inputs: any
 ) => {
    const nonceManager = ctx.nonceManager;
    nonceManager.reset();
    const [Pledge] = unwrapDependencies(
     dependencies,
     [
       ArtifactName.Pledge,
     ],
   );
    ctx.log('Minting 10 random nfts');
    const pledge = ctx.artifacts.Pledge.connect(nonceManager).attach(Pledge.address) as Pledge;
    const MINT_AMOUNT = 10;
    const toMint = generateRandomNFTs(MINT_AMOUNT);
    const tx = await pledge.mintMany(inputs.receiver, toMint);
    await tx.wait()
    // if(await pledge.balanceOf(inputs.receiver) >= BigInt(MINT_AMOUNT)) throw new Error('Minting failed');
    ctx.log('Minted 10 random Pledge NFTs to', inputs.receiver);
    ctx.log('NFTs minted:', JSON.stringify(toMint));
 },
 ensureDependencies: (ctx: Deployer, config?: DeployedContractList): DependenciesMap => {
  config = merge(ctx.getDeployConfig(), config);
  const { Pledge } = config?.contracts || {};
  const dependencies = { Pledge };
  for (const [key, value] of Object.entries(dependencies)) {
    if (!value || !value.address || value.address === ZeroAddress) {
      throw new Error(`${key} contract not found for network ${network.config.chainId} PLEASE DEPLOY PLEDGE CONTRACT FIRST!`);
    }
  }
  return dependencies;
 },
}
export default mintTask;
