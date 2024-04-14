import deployedAddresses from '../../../.external/deployed-addresses.json';
import pkg from 'lodash';
const { merge } = pkg;

type Deployed = {
 [x: string]: `0x${string}` | Record<number, `0x${string}`> | undefined 
}

type SupportedContracts = ("Borrow" | "Pledge")[] 

type Networks = (keyof typeof deployedAddresses.networks)[]; 


function parseAddresses(): Deployed { 
  const deployments = {
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const networks: Networks = Object.keys(JSON.parse(JSON.stringify(deployedAddresses.networks))) as any;  
  
  networks.forEach((network) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const contractNames: SupportedContracts = Object.keys(deployedAddresses.networks[network].contracts) as any; 
    
    contractNames.forEach((name) => {
      const obj = {
        [name]: { 
          [network]: deployedAddresses.networks[network].contracts[name].address
        }
      }
      merge(deployments, obj);
    }) 
  })
  return deployments;
}

const deployed = parseAddresses();
export {
  deployed,
}