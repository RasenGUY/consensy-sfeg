import { network } from "hardhat";
import { 
  getNetworkConfig, 
  mergeNetworkConfig, 
} from '../src/config';
import { Deployer } from '../src/deployer';
import { unwrap } from '../src/helpers';
import { AddressLike } from "ethers";


async function main() {
  const chainId: number = unwrap(network.config, 'chainId');
  const config = getNetworkConfig(chainId);
  if (!config) {
    throw new Error(`Config not found for network ${chainId}`);
  }
  const deployer = await Deployer.create();
  deployer.log('Network:', network.name);
  const deployConfig = await deployer.execute(['mint'], config, {receiver: chainId === 1337 ? "0x70997970C51812dc3A010C7d01b50e0d17dc79C8" : process.env.NFT_ACCOUNT as AddressLike, nftCount: 10});
  mergeNetworkConfig(deployConfig);
  console.log('Mint Success!');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
