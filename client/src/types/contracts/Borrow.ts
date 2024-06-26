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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface BorrowInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BORROW_RATE"
      | "accountBalance"
      | "addLiquidity"
      | "borrowEthForNFT"
      | "generateBorrowId"
      | "getLiquidity"
      | "onERC721Received"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "LiquidityAdded" | "LockNFT" | "Withdrawn"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BORROW_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accountBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowEthForNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "generateBorrowId",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "BORROW_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accountBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowEthForNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateBorrowId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace LiquidityAddedEvent {
  export type InputTuple = [adminstrator: AddressLike, amount: BigNumberish];
  export type OutputTuple = [adminstrator: string, amount: bigint];
  export interface OutputObject {
    adminstrator: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LockNFTEvent {
  export type InputTuple = [
    collection: AddressLike,
    owner: AddressLike,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [
    collection: string,
    owner: string,
    tokenId: bigint
  ];
  export interface OutputObject {
    collection: string;
    owner: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnEvent {
  export type InputTuple = [account: AddressLike, amount: BigNumberish];
  export type OutputTuple = [account: string, amount: bigint];
  export interface OutputObject {
    account: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Borrow extends BaseContract {
  connect(runner?: ContractRunner | null): Borrow;
  waitForDeployment(): Promise<this>;

  interface: BorrowInterface;

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

  BORROW_RATE: TypedContractMethod<[], [bigint], "view">;

  accountBalance: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  addLiquidity: TypedContractMethod<[], [void], "payable">;

  borrowEthForNFT: TypedContractMethod<
    [tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  generateBorrowId: TypedContractMethod<
    [collection: AddressLike, owner: AddressLike, tokenId: BigNumberish],
    [string],
    "view"
  >;

  getLiquidity: TypedContractMethod<[], [bigint], "view">;

  onERC721Received: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BORROW_RATE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "accountBalance"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "addLiquidity"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "borrowEthForNFT"
  ): TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "generateBorrowId"
  ): TypedContractMethod<
    [collection: AddressLike, owner: AddressLike, tokenId: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLiquidity"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "LiquidityAdded"
  ): TypedContractEvent<
    LiquidityAddedEvent.InputTuple,
    LiquidityAddedEvent.OutputTuple,
    LiquidityAddedEvent.OutputObject
  >;
  getEvent(
    key: "LockNFT"
  ): TypedContractEvent<
    LockNFTEvent.InputTuple,
    LockNFTEvent.OutputTuple,
    LockNFTEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;

  filters: {
    "LiquidityAdded(address,uint256)": TypedContractEvent<
      LiquidityAddedEvent.InputTuple,
      LiquidityAddedEvent.OutputTuple,
      LiquidityAddedEvent.OutputObject
    >;
    LiquidityAdded: TypedContractEvent<
      LiquidityAddedEvent.InputTuple,
      LiquidityAddedEvent.OutputTuple,
      LiquidityAddedEvent.OutputObject
    >;

    "LockNFT(address,address,uint256)": TypedContractEvent<
      LockNFTEvent.InputTuple,
      LockNFTEvent.OutputTuple,
      LockNFTEvent.OutputObject
    >;
    LockNFT: TypedContractEvent<
      LockNFTEvent.InputTuple,
      LockNFTEvent.OutputTuple,
      LockNFTEvent.OutputObject
    >;

    "Withdrawn(address,uint256)": TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
    Withdrawn: TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
  };
}
