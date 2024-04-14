import { ArtifactName, DependenciesMap, DeployedContract } from './types';
import { Contract } from 'ethers';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function unwrap (object: any, key: string): any {
  if (!object[key]) {
    throw new Error(`Unwrap: cannot find key ${key} on object ${object.toString()}`);
  }
  return object[key];
}

export function unwrapDependencies (dependencies: DependenciesMap, keys: ArtifactName[]): DeployedContract[] {
  return keys.map((key) => unwrap(dependencies, key));
}