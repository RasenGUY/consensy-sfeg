import { Deployer } from "../deployer";
import { DependenciesMap, DeployedContractList } from "../types";

export type Task = {
 tags: string[];
 priority: number;
 inputOptions?: boolean,
 run: (
   ctx: Deployer, 
   dependencies: DependenciesMap, 
   inputs?: any
 ) => Promise<void>;
 ensureDependencies: (ctx: Deployer, config?: DeployedContractList) => DependenciesMap;
};