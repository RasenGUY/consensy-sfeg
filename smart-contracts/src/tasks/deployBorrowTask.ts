import { merge } from "lodash";
import { Deployer } from "../deployer";
import { Task } from "../tasks/types";
import { network } from 'hardhat';
import { ArtifactName, ContractName, DependenciesMap, DeployedContractList } from "../types";
import { Borrow } from "../../types";
import { ZeroAddress } from "ethers";
import { unwrapDependencies } from "../helpers";

/**
* deploys the borrow contract
*/
const deployBorrowContractTask: Task = {
 tags: ['deploy_borrow', 'full'],
 priority: 1,
 inputOptions: true,
 run: async (
   ctx: Deployer, 
   dependencies: DependenciesMap, 
   inputs: any
 ) => {
    const [Pledge] = unwrapDependencies(dependencies, [ArtifactName.Pledge])
    const nonceManager = ctx.nonceManager;
    nonceManager.reset();
    ctx.log('Deploying Borrow Contract');
    const borrow = await ctx.artifacts.Borrow.connect(nonceManager).deploy(Pledge.address) as Borrow;
    await borrow.waitForDeployment();
    await ctx.saveContractConfig(ContractName.Borrow, borrow);
    ctx.log('Borrow Contract deployed at:', borrow.target);
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
export default deployBorrowContractTask;