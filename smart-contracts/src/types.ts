export enum ArtifactName {
  Pledge = 'Pledge',
  Borrow = 'Borrow',
}

export enum ContractName {
  Pledge = 'Pledge',
  Borrow = 'Borrow',
}

export type DeployedContract = {
  address: string,
  implementation?: string,
  legacyAddresses: string[],
  forwarder?: string,
  deprecated?: boolean;
  deploymentBlock: string,
}

export type DeployedContractList = {
  contracts: DeployedContractMap
}

export type DeployedContractMap = { 
  [k in ContractName]: DeployedContract
}

export type DeployedContractsConfig = { 
  version?: string;
  networks: {
    [chainId: number]: DeployedContractList
  };
}

export type DependenciesMap = {
  [k in ArtifactName]?: DeployedContract
}