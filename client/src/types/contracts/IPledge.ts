/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace IPledge {
  export type PledgeNFTStruct = {
    tokenId: BigNumberish;
    nftAddress: AddressLike;
    gradientOne: string;
    gradientTwo: string;
    diameter: BigNumberish;
  };

  export type PledgeNFTStructOutput = [
    tokenId: bigint,
    nftAddress: string,
    gradientOne: string,
    gradientTwo: string,
    diameter: bigint
  ] & {
    tokenId: bigint;
    nftAddress: string;
    gradientOne: string;
    gradientTwo: string;
    diameter: bigint;
  };

  export type MintParamsStruct = {
    gradientOne: string;
    gradientTwo: string;
    diameter: BigNumberish;
  };

  export type MintParamsStructOutput = [
    gradientOne: string,
    gradientTwo: string,
    diameter: bigint
  ] & { gradientOne: string; gradientTwo: string; diameter: bigint };
}

export interface IPledgeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getNFT"
      | "getNFTs"
      | "getNFTsOf"
      | "mintMany"
      | "mintPledge"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getNFTs", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getNFTsOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mintMany",
    values: [AddressLike, IPledge.MintParamsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "mintPledge",
    values: [AddressLike, IPledge.MintParamsStruct]
  ): string;

  decodeFunctionResult(functionFragment: "getNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNFTs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNFTsOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintMany", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintPledge", data: BytesLike): Result;
}

export interface IPledge extends BaseContract {
  connect(runner?: ContractRunner | null): IPledge;
  waitForDeployment(): Promise<this>;

  interface: IPledgeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getNFT: TypedContractMethod<
    [tokenId: BigNumberish],
    [IPledge.PledgeNFTStructOutput],
    "view"
  >;

  getNFTs: TypedContractMethod<[], [IPledge.PledgeNFTStructOutput[]], "view">;

  getNFTsOf: TypedContractMethod<
    [owner: AddressLike],
    [IPledge.PledgeNFTStructOutput[]],
    "view"
  >;

  mintMany: TypedContractMethod<
    [to: AddressLike, arg1: IPledge.MintParamsStruct[]],
    [void],
    "nonpayable"
  >;

  mintPledge: TypedContractMethod<
    [to: AddressLike, arg1: IPledge.MintParamsStruct],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getNFT"
  ): TypedContractMethod<
    [tokenId: BigNumberish],
    [IPledge.PledgeNFTStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNFTs"
  ): TypedContractMethod<[], [IPledge.PledgeNFTStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getNFTsOf"
  ): TypedContractMethod<
    [owner: AddressLike],
    [IPledge.PledgeNFTStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "mintMany"
  ): TypedContractMethod<
    [to: AddressLike, arg1: IPledge.MintParamsStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mintPledge"
  ): TypedContractMethod<
    [to: AddressLike, arg1: IPledge.MintParamsStruct],
    [void],
    "nonpayable"
  >;

  filters: {};
}
