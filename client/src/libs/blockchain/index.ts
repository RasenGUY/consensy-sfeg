/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { readContract, waitForTransactionReceipt, writeContract, simulateContract } from 'wagmi/actions';
import { Chain } from 'wagmi/chains';
import { getAccount } from '@wagmi/core' 
import { config as wagmiConfig } from './wagmiConfig';
import { borrowConfig, pledgeConfig } from './abis';
import { Address } from 'viem';

// todo add typechecking for function name 
export const customBlockchainBaseQuery = ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }, API: typeof BlockchainAPIBase ): BaseQueryFn<{
   contract: AllContractTypes
   method: 'READ'|'WRITE';
   functionName: string;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   args: any;
   contractAddress?: Address,
 },
 unknown,
 unknown
> => async ({ contract, method, args, functionName, contractAddress }) => {
    const api = new API(baseUrl);
    try {
     if(method === 'WRITE') {
      const transactionHash = await api.write({ contract, functionName, args, contractAddress });
      return await api.waitForMined(transactionHash);
     } 
     return await api.read({contract, functionName, args, contractAddress });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
     return {
      error: {
       status: error?.status ?? undefined,
       data: api.handleError(error, 'Something went wrong'),
      },
     }
    } 
 }

 export type ABIConfig = {
  readonly address: Record<number, string>,
  readonly abi: unknown[];
} 

export interface IBlockchainAPIBase {
  baseUrl: string;
  chain: (Chain & { unsupported?: boolean | undefined; }) | undefined;
}

export const ContractTypes = {
  'BORROW': 'borrow', 
  'PLEDGE': 'pledge',
} as const;

export const ContractConfig = {
  [ContractTypes.BORROW]: borrowConfig,
  [ContractTypes.PLEDGE]: pledgeConfig,
} as const; 

export type AllContractTypes = typeof ContractTypes[keyof typeof ContractTypes];

export function getAddress(chainId: number, contract: AllContractTypes) {
  const addressConfig = ContractConfig[contract as AllContractTypes].address;
  return ContractConfig[contract].address[chainId as keyof typeof addressConfig] as Address;
}

export class BlockchainAPIBase implements IBlockchainAPIBase {
 public baseUrl: string;
 public chain = wagmiConfig.chains.find(chain => chain.id === getAccount(wagmiConfig).chainId) ;
 private config = ContractConfig;
 constructor(baseUrl: string | undefined = undefined) { this.baseUrl = baseUrl ?? 'blockchainApi/' }
 public functions = {};
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 handleError(error: any, customMessage: string){
  if (error.message){
   if(error.message.split("\n\n") && error.message.split("\n\n").length > 0) {
    return error.message.split("\n\n")[0];
   }
   return error.message
  } else {
   return customMessage;
  }
 }
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 async handleWriteRequest(config: any) {
  const hash = await writeContract(wagmiConfig, config.request);
  return hash as Address;
 }
 async read({ 
  contract, 
  functionName,
  args,
  contractAddress
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 }: { contract: string, functionName: any, args: any, contractAddress?: Address  }) {
  const addressConfig = this.config[contract as AllContractTypes].address;
  
  return await this.handleRequest(async () => await readContract(wagmiConfig, {
    address: !contractAddress ? this.config[contract as AllContractTypes].address[this.chain?.id as keyof typeof addressConfig] as Address : contractAddress,
    abi: this.config[contract as AllContractTypes].abi,
    functionName,
    args
   })
  );
 }

 async write({ 
  contract, 
  functionName,
  args,  
  contractAddress
 }: { 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contract: string, functionName: any, args: any, contractAddress?: Address }) {
  const addressConfig = this.config[contract as AllContractTypes].address;
  const params = {
    address: !contractAddress ? this.config[contract as AllContractTypes].address[this.chain?.id as keyof typeof addressConfig] as `0x${string}` : contractAddress,
    abi: this.config[contract as AllContractTypes].abi,
    functionName,
    args
   }
   const result = await simulateContract(wagmiConfig, params)
   return await this.handleWriteRequest(result);
 }
 async waitForMined(hash: `0x${string}`) {  
  return await this.handleRequest(async () => await waitForTransactionReceipt(wagmiConfig, { hash }));
 }
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 async handleRequest(func: any) {
  try {
   return { data: await func() , error: undefined, meta: undefined }
  } catch (error) {
   return { data: undefined, error, meta: undefined }
  }
 } 
}

export * from './wagmiConfig';
export * from './abis';