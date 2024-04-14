import { network } from "hardhat";
import { 
  getNetworkConfig, 
  mergeNetworkConfig, 
} from '../src/config';
import { Deployer } from '../src/deployer';
import { unwrap } from '../src/helpers';

async function main() {

  const chainId: number = unwrap(network.config, 'chainId');
  const config = getNetworkConfig(chainId);
  if (!config) {
    throw new Error(`Config not found for network ${chainId}`);
  }
  const deployer = await Deployer.create();
  deployer.log('Network:', network.name);
  const deployConfig = await deployer.execute(['pledge'], config);
  mergeNetworkConfig(deployConfig);
  console.log('Deployment Success!');
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
