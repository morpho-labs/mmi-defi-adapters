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
} from "./common";

export type MarketParamsStruct = {
  loanToken: AddressLike;
  collateralToken: AddressLike;
  oracle: AddressLike;
  irm: AddressLike;
  lltv: BigNumberish;
};

export type MarketParamsStructOutput = [
  loanToken: string,
  collateralToken: string,
  oracle: string,
  irm: string,
  lltv: bigint
] & {
  loanToken: string;
  collateralToken: string;
  oracle: string;
  irm: string;
  lltv: bigint;
};

export type MarketStruct = {
  totalSupplyAssets: BigNumberish;
  totalSupplyShares: BigNumberish;
  totalBorrowAssets: BigNumberish;
  totalBorrowShares: BigNumberish;
  lastUpdate: BigNumberish;
  fee: BigNumberish;
};

export type MarketStructOutput = [
  totalSupplyAssets: bigint,
  totalSupplyShares: bigint,
  totalBorrowAssets: bigint,
  totalBorrowShares: bigint,
  lastUpdate: bigint,
  fee: bigint
] & {
  totalSupplyAssets: bigint;
  totalSupplyShares: bigint;
  totalBorrowAssets: bigint;
  totalBorrowShares: bigint;
  lastUpdate: bigint;
  fee: bigint;
};

export interface AdaptiveCurveIrmInterface extends Interface {
  getFunction(
    nameOrSignature: "MORPHO" | "borrowRate" | "borrowRateView" | "rateAtTarget"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "BorrowRateUpdate"): EventFragment;

  encodeFunctionData(functionFragment: "MORPHO", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrowRate",
    values: [MarketParamsStruct, MarketStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowRateView",
    values: [MarketParamsStruct, MarketStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "rateAtTarget",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "MORPHO", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrowRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowRateView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rateAtTarget",
    data: BytesLike
  ): Result;
}

export namespace BorrowRateUpdateEvent {
  export type InputTuple = [
    id: BytesLike,
    avgBorrowRate: BigNumberish,
    rateAtTarget: BigNumberish
  ];
  export type OutputTuple = [
    id: string,
    avgBorrowRate: bigint,
    rateAtTarget: bigint
  ];
  export interface OutputObject {
    id: string;
    avgBorrowRate: bigint;
    rateAtTarget: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AdaptiveCurveIrm extends BaseContract {
  connect(runner?: ContractRunner | null): AdaptiveCurveIrm;
  waitForDeployment(): Promise<this>;

  interface: AdaptiveCurveIrmInterface;

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

  MORPHO: TypedContractMethod<[], [string], "view">;

  borrowRate: TypedContractMethod<
    [marketParams: MarketParamsStruct, market: MarketStruct],
    [bigint],
    "nonpayable"
  >;

  borrowRateView: TypedContractMethod<
    [marketParams: MarketParamsStruct, market: MarketStruct],
    [bigint],
    "view"
  >;

  rateAtTarget: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MORPHO"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "borrowRate"
  ): TypedContractMethod<
    [marketParams: MarketParamsStruct, market: MarketStruct],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "borrowRateView"
  ): TypedContractMethod<
    [marketParams: MarketParamsStruct, market: MarketStruct],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "rateAtTarget"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  getEvent(
    key: "BorrowRateUpdate"
  ): TypedContractEvent<
    BorrowRateUpdateEvent.InputTuple,
    BorrowRateUpdateEvent.OutputTuple,
    BorrowRateUpdateEvent.OutputObject
  >;

  filters: {
    "BorrowRateUpdate(bytes32,uint256,uint256)": TypedContractEvent<
      BorrowRateUpdateEvent.InputTuple,
      BorrowRateUpdateEvent.OutputTuple,
      BorrowRateUpdateEvent.OutputObject
    >;
    BorrowRateUpdate: TypedContractEvent<
      BorrowRateUpdateEvent.InputTuple,
      BorrowRateUpdateEvent.OutputTuple,
      BorrowRateUpdateEvent.OutputObject
    >;
  };
}