import { Pledge } from "../../../client/src/types";
import { Deployer } from "../deployer";
import { Task } from "../tasks/types";
import { ContractName, DependenciesMap, DeployedContractList } from "../types";

/**
* deploys the pledge contract
*/
const deployPledgeTask: Task = {
 tags: ['pledge', 'full'],
 priority: 0,
 inputOptions: true,
 run: async (
   ctx: Deployer, 
   dependencies: DependenciesMap, 
   inputs: any
 ) => {
    const nonceManager = ctx.nonceManager;
    nonceManager.reset();
    ctx.log('Deploying Pledge Contract');
    const pledge = await ctx.artifacts.Pledge.connect(nonceManager).deploy('Pledge', 'PLD') as Pledge;
    await pledge.waitForDeployment();
    await ctx.saveContractConfig(ContractName.Pledge, pledge);
    ctx.log('Pledge Contract deployed at:', pledge.target);
 },
 ensureDependencies: (ctx: Deployer, config?: DeployedContractList): DependenciesMap => ({}),
}
export default deployPledgeTask;
