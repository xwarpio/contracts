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

export interface MasterChefInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BONUS_MULTIPLIER"
      | "Fee"
      | "MAX_FEE"
      | "MAX_RewardFEE"
      | "RewardFee"
      | "SXWARP"
      | "XWARP"
      | "XWARPPerBlock"
      | "add"
      | "deposit"
      | "dev"
      | "devaddr"
      | "emergencyWithdraw"
      | "enterStaking"
      | "getMultiplier"
      | "leaveStaking"
      | "massUpdatePools"
      | "owner"
      | "pendingXWARP"
      | "poolInfo"
      | "poolLength"
      | "renounceOwnership"
      | "set"
      | "setFee"
      | "setRewardFee"
      | "startBlock"
      | "totalAllocPoint"
      | "transferOwnership"
      | "treasury"
      | "updateMultiplier"
      | "updatePool"
      | "userInfo"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Deposit"
      | "EmergencyWithdraw"
      | "OwnershipTransferred"
      | "Withdraw"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BONUS_MULTIPLIER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "Fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "MAX_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MAX_RewardFEE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "RewardFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "SXWARP", values?: undefined): string;
  encodeFunctionData(functionFragment: "XWARP", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "XWARPPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "add",
    values: [BigNumberish, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "dev", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "devaddr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "enterStaking",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMultiplier",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "leaveStaking",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "massUpdatePools",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingXWARP",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalAllocPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BONUS_MULTIPLIER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MAX_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_RewardFEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "RewardFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SXWARP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "XWARP", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "XWARPPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dev", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "devaddr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enterStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "leaveStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "massUpdatePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingXWARP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace DepositEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EmergencyWithdrawEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MasterChef extends BaseContract {
  connect(runner?: ContractRunner | null): MasterChef;
  waitForDeployment(): Promise<this>;

  interface: MasterChefInterface;

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

  BONUS_MULTIPLIER: TypedContractMethod<[], [bigint], "view">;

  Fee: TypedContractMethod<[], [bigint], "view">;

  MAX_FEE: TypedContractMethod<[], [bigint], "view">;

  MAX_RewardFEE: TypedContractMethod<[], [bigint], "view">;

  RewardFee: TypedContractMethod<[], [bigint], "view">;

  SXWARP: TypedContractMethod<[], [string], "view">;

  XWARP: TypedContractMethod<[], [string], "view">;

  XWARPPerBlock: TypedContractMethod<[], [bigint], "view">;

  add: TypedContractMethod<
    [_allocPoint: BigNumberish, _lpToken: AddressLike, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;

  deposit: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  dev: TypedContractMethod<[_devaddr: AddressLike], [void], "nonpayable">;

  devaddr: TypedContractMethod<[], [string], "view">;

  emergencyWithdraw: TypedContractMethod<
    [_pid: BigNumberish],
    [void],
    "nonpayable"
  >;

  enterStaking: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getMultiplier: TypedContractMethod<
    [_from: BigNumberish, _to: BigNumberish],
    [bigint],
    "view"
  >;

  leaveStaking: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  massUpdatePools: TypedContractMethod<[], [void], "nonpayable">;

  owner: TypedContractMethod<[], [string], "view">;

  pendingXWARP: TypedContractMethod<
    [_pid: BigNumberish, _user: AddressLike],
    [bigint],
    "view"
  >;

  poolInfo: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        lpToken: string;
        allocPoint: bigint;
        lastRewardBlock: bigint;
        accXWARPPerShare: bigint;
      }
    ],
    "view"
  >;

  poolLength: TypedContractMethod<[], [bigint], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  set: TypedContractMethod<
    [_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;

  setFee: TypedContractMethod<[_Fee: BigNumberish], [void], "nonpayable">;

  setRewardFee: TypedContractMethod<
    [_RewardFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  startBlock: TypedContractMethod<[], [bigint], "view">;

  totalAllocPoint: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  treasury: TypedContractMethod<[], [string], "view">;

  updateMultiplier: TypedContractMethod<
    [multiplierNumber: BigNumberish],
    [void],
    "nonpayable"
  >;

  updatePool: TypedContractMethod<[_pid: BigNumberish], [void], "nonpayable">;

  userInfo: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { amount: bigint; rewardDebt: bigint }],
    "view"
  >;

  withdraw: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BONUS_MULTIPLIER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "Fee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAX_FEE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MAX_RewardFEE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "RewardFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "SXWARP"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "XWARP"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "XWARPPerBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "add"
  ): TypedContractMethod<
    [_allocPoint: BigNumberish, _lpToken: AddressLike, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "dev"
  ): TypedContractMethod<[_devaddr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "devaddr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "emergencyWithdraw"
  ): TypedContractMethod<[_pid: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "enterStaking"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getMultiplier"
  ): TypedContractMethod<
    [_from: BigNumberish, _to: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "leaveStaking"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "massUpdatePools"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingXWARP"
  ): TypedContractMethod<
    [_pid: BigNumberish, _user: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "poolInfo"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        lpToken: string;
        allocPoint: bigint;
        lastRewardBlock: bigint;
        accXWARPPerShare: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "poolLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "set"
  ): TypedContractMethod<
    [_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFee"
  ): TypedContractMethod<[_Fee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRewardFee"
  ): TypedContractMethod<[_RewardFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "startBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalAllocPoint"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "treasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "updateMultiplier"
  ): TypedContractMethod<
    [multiplierNumber: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updatePool"
  ): TypedContractMethod<[_pid: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "userInfo"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { amount: bigint; rewardDebt: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "EmergencyWithdraw"
  ): TypedContractEvent<
    EmergencyWithdrawEvent.InputTuple,
    EmergencyWithdrawEvent.OutputTuple,
    EmergencyWithdrawEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;

  filters: {
    "Deposit(address,uint256,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "EmergencyWithdraw(address,uint256,uint256)": TypedContractEvent<
      EmergencyWithdrawEvent.InputTuple,
      EmergencyWithdrawEvent.OutputTuple,
      EmergencyWithdrawEvent.OutputObject
    >;
    EmergencyWithdraw: TypedContractEvent<
      EmergencyWithdrawEvent.InputTuple,
      EmergencyWithdrawEvent.OutputTuple,
      EmergencyWithdrawEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Withdraw(address,uint256,uint256)": TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
  };
}
