/* eslint-disable */
import { BaseAccount } from "../../auth/v1beta1/auth";
import { Coin } from "../../base/v1beta1/coin";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.vesting.v1beta1";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
  baseAccount?: BaseAccount;
  originalVesting: Coin[];
  delegatedFree: Coin[];
  delegatedVesting: Coin[];
  /** Vesting end time, as unix timestamp (in seconds). */
  endTime: Long;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  /** Vesting start time, as unix timestamp (in seconds). */
  startTime: Long;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
  /** Period duration in seconds. */
  length: Long;
  amount: Coin[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  startTime: Long;
  vestingPeriods: Period[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccount {
  baseVestingAccount?: BaseVestingAccount;
}
function createBaseBaseVestingAccount(): BaseVestingAccount {
  return {
    baseAccount: undefined,
    originalVesting: [],
    delegatedFree: [],
    delegatedVesting: [],
    endTime: Long.ZERO,
  };
}
export const BaseVestingAccount = {
  encode(message: BaseVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.originalVesting) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatedFree) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegatedVesting) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (!message.endTime.isZero()) {
      writer.uint32(40).int64(message.endTime);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BaseVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.originalVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.delegatedFree.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegatedVesting.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BaseVestingAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      originalVesting: Array.isArray(object?.originalVesting)
        ? object.originalVesting.map((e: any) => Coin.fromJSON(e))
        : [],
      delegatedFree: Array.isArray(object?.delegatedFree)
        ? object.delegatedFree.map((e: any) => Coin.fromJSON(e))
        : [],
      delegatedVesting: Array.isArray(object?.delegatedVesting)
        ? object.delegatedVesting.map((e: any) => Coin.fromJSON(e))
        : [],
      endTime: isSet(object.endTime) ? Long.fromValue(object.endTime) : Long.ZERO,
    };
  },
  toJSON(message: BaseVestingAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    if (message.originalVesting) {
      obj.originalVesting = message.originalVesting.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.originalVesting = [];
    }
    if (message.delegatedFree) {
      obj.delegatedFree = message.delegatedFree.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.delegatedFree = [];
    }
    if (message.delegatedVesting) {
      obj.delegatedVesting = message.delegatedVesting.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.delegatedVesting = [];
    }
    message.endTime !== undefined && (obj.endTime = (message.endTime || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BaseVestingAccount>, I>>(object: I): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    message.baseAccount =
      object.baseAccount !== undefined && object.baseAccount !== null
        ? BaseAccount.fromPartial(object.baseAccount)
        : undefined;
    message.originalVesting = object.originalVesting?.map((e) => Coin.fromPartial(e)) || [];
    message.delegatedFree = object.delegatedFree?.map((e) => Coin.fromPartial(e)) || [];
    message.delegatedVesting = object.delegatedVesting?.map((e) => Coin.fromPartial(e)) || [];
    message.endTime =
      object.endTime !== undefined && object.endTime !== null ? Long.fromValue(object.endTime) : Long.ZERO;
    return message;
  },
  fromAmino(object: BaseVestingAccountAmino): BaseVestingAccount {
    return {
      baseAccount: object?.base_account ? BaseAccount.fromAmino(object.base_account) : undefined,
      originalVesting: Array.isArray(object?.original_vesting)
        ? object.original_vesting.map((e: any) => Coin.fromAmino(e))
        : [],
      delegatedFree: Array.isArray(object?.delegated_free)
        ? object.delegated_free.map((e: any) => Coin.fromAmino(e))
        : [],
      delegatedVesting: Array.isArray(object?.delegated_vesting)
        ? object.delegated_vesting.map((e: any) => Coin.fromAmino(e))
        : [],
      endTime: Long.fromString(object.end_time),
    };
  },
  toAmino(message: BaseVestingAccount): BaseVestingAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
    if (message.originalVesting) {
      obj.original_vesting = message.originalVesting.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.original_vesting = [];
    }
    if (message.delegatedFree) {
      obj.delegated_free = message.delegatedFree.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.delegated_free = [];
    }
    if (message.delegatedVesting) {
      obj.delegated_vesting = message.delegatedVesting.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.delegated_vesting = [];
    }
    obj.end_time = message.endTime ? message.endTime.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BaseVestingAccountAminoMsg): BaseVestingAccount {
    return BaseVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: BaseVestingAccount): BaseVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/BaseVestingAccount",
      value: BaseVestingAccount.toAmino(message),
    };
  },
};
function createBaseContinuousVestingAccount(): ContinuousVestingAccount {
  return {
    baseVestingAccount: undefined,
    startTime: Long.ZERO,
  };
}
export const ContinuousVestingAccount = {
  encode(message: ContinuousVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (!message.startTime.isZero()) {
      writer.uint32(16).int64(message.startTime);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContinuousVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContinuousVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContinuousVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount)
        ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
        : undefined,
      startTime: isSet(object.startTime) ? Long.fromValue(object.startTime) : Long.ZERO,
    };
  },
  toJSON(message: ContinuousVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    message.startTime !== undefined && (obj.startTime = (message.startTime || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ContinuousVestingAccount>, I>>(
    object: I,
  ): ContinuousVestingAccount {
    const message = createBaseContinuousVestingAccount();
    message.baseVestingAccount =
      object.baseVestingAccount !== undefined && object.baseVestingAccount !== null
        ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
        : undefined;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? Long.fromValue(object.startTime)
        : Long.ZERO;
    return message;
  },
  fromAmino(object: ContinuousVestingAccountAmino): ContinuousVestingAccount {
    return {
      baseVestingAccount: object?.base_vesting_account
        ? BaseVestingAccount.fromAmino(object.base_vesting_account)
        : undefined,
      startTime: Long.fromString(object.start_time),
    };
  },
  toAmino(message: ContinuousVestingAccount): ContinuousVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount
      ? BaseVestingAccount.toAmino(message.baseVestingAccount)
      : undefined;
    obj.start_time = message.startTime ? message.startTime.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContinuousVestingAccountAminoMsg): ContinuousVestingAccount {
    return ContinuousVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: ContinuousVestingAccount): ContinuousVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/ContinuousVestingAccount",
      value: ContinuousVestingAccount.toAmino(message),
    };
  },
};
function createBaseDelayedVestingAccount(): DelayedVestingAccount {
  return {
    baseVestingAccount: undefined,
  };
}
export const DelayedVestingAccount = {
  encode(message: DelayedVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelayedVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelayedVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount)
        ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
        : undefined,
    };
  },
  toJSON(message: DelayedVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DelayedVestingAccount>, I>>(object: I): DelayedVestingAccount {
    const message = createBaseDelayedVestingAccount();
    message.baseVestingAccount =
      object.baseVestingAccount !== undefined && object.baseVestingAccount !== null
        ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
        : undefined;
    return message;
  },
  fromAmino(object: DelayedVestingAccountAmino): DelayedVestingAccount {
    return {
      baseVestingAccount: object?.base_vesting_account
        ? BaseVestingAccount.fromAmino(object.base_vesting_account)
        : undefined,
    };
  },
  toAmino(message: DelayedVestingAccount): DelayedVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount
      ? BaseVestingAccount.toAmino(message.baseVestingAccount)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: DelayedVestingAccountAminoMsg): DelayedVestingAccount {
    return DelayedVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: DelayedVestingAccount): DelayedVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/DelayedVestingAccount",
      value: DelayedVestingAccount.toAmino(message),
    };
  },
};
function createBasePeriod(): Period {
  return {
    length: Long.ZERO,
    amount: [],
  };
}
export const Period = {
  encode(message: Period, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.length.isZero()) {
      writer.uint32(8).int64(message.length);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Period {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = reader.int64() as Long;
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Period {
    return {
      length: isSet(object.length) ? Long.fromValue(object.length) : Long.ZERO,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },
  toJSON(message: Period): unknown {
    const obj: any = {};
    message.length !== undefined && (obj.length = (message.length || Long.ZERO).toString());
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Period>, I>>(object: I): Period {
    const message = createBasePeriod();
    message.length =
      object.length !== undefined && object.length !== null ? Long.fromValue(object.length) : Long.ZERO;
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PeriodAmino): Period {
    return {
      length: Long.fromString(object.length),
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
    };
  },
  toAmino(message: Period): PeriodAmino {
    const obj: any = {};
    obj.length = message.length ? message.length.toString() : undefined;
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: PeriodAminoMsg): Period {
    return Period.fromAmino(object.value);
  },
  toAminoMsg(message: Period): PeriodAminoMsg {
    return {
      type: "cosmos-sdk/Period",
      value: Period.toAmino(message),
    };
  },
};
function createBasePeriodicVestingAccount(): PeriodicVestingAccount {
  return {
    baseVestingAccount: undefined,
    startTime: Long.ZERO,
    vestingPeriods: [],
  };
}
export const PeriodicVestingAccount = {
  encode(message: PeriodicVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    if (!message.startTime.isZero()) {
      writer.uint32(16).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.startTime = reader.int64() as Long;
          break;
        case 3:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PeriodicVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount)
        ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
        : undefined,
      startTime: isSet(object.startTime) ? Long.fromValue(object.startTime) : Long.ZERO,
      vestingPeriods: Array.isArray(object?.vestingPeriods)
        ? object.vestingPeriods.map((e: any) => Period.fromJSON(e))
        : [],
    };
  },
  toJSON(message: PeriodicVestingAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    message.startTime !== undefined && (obj.startTime = (message.startTime || Long.ZERO).toString());
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map((e) => (e ? Period.toJSON(e) : undefined));
    } else {
      obj.vestingPeriods = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PeriodicVestingAccount>, I>>(object: I): PeriodicVestingAccount {
    const message = createBasePeriodicVestingAccount();
    message.baseVestingAccount =
      object.baseVestingAccount !== undefined && object.baseVestingAccount !== null
        ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
        : undefined;
    message.startTime =
      object.startTime !== undefined && object.startTime !== null
        ? Long.fromValue(object.startTime)
        : Long.ZERO;
    message.vestingPeriods = object.vestingPeriods?.map((e) => Period.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PeriodicVestingAccountAmino): PeriodicVestingAccount {
    return {
      baseVestingAccount: object?.base_vesting_account
        ? BaseVestingAccount.fromAmino(object.base_vesting_account)
        : undefined,
      startTime: Long.fromString(object.start_time),
      vestingPeriods: Array.isArray(object?.vesting_periods)
        ? object.vesting_periods.map((e: any) => Period.fromAmino(e))
        : [],
    };
  },
  toAmino(message: PeriodicVestingAccount): PeriodicVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount
      ? BaseVestingAccount.toAmino(message.baseVestingAccount)
      : undefined;
    obj.start_time = message.startTime ? message.startTime.toString() : undefined;
    if (message.vestingPeriods) {
      obj.vesting_periods = message.vestingPeriods.map((e) => (e ? Period.toAmino(e) : undefined));
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromAminoMsg(object: PeriodicVestingAccountAminoMsg): PeriodicVestingAccount {
    return PeriodicVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: PeriodicVestingAccount): PeriodicVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/PeriodicVestingAccount",
      value: PeriodicVestingAccount.toAmino(message),
    };
  },
};
function createBasePermanentLockedAccount(): PermanentLockedAccount {
  return {
    baseVestingAccount: undefined,
  };
}
export const PermanentLockedAccount = {
  encode(message: PermanentLockedAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PermanentLockedAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PermanentLockedAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount)
        ? BaseVestingAccount.fromJSON(object.baseVestingAccount)
        : undefined,
    };
  },
  toJSON(message: PermanentLockedAccount): unknown {
    const obj: any = {};
    message.baseVestingAccount !== undefined &&
      (obj.baseVestingAccount = message.baseVestingAccount
        ? BaseVestingAccount.toJSON(message.baseVestingAccount)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PermanentLockedAccount>, I>>(object: I): PermanentLockedAccount {
    const message = createBasePermanentLockedAccount();
    message.baseVestingAccount =
      object.baseVestingAccount !== undefined && object.baseVestingAccount !== null
        ? BaseVestingAccount.fromPartial(object.baseVestingAccount)
        : undefined;
    return message;
  },
  fromAmino(object: PermanentLockedAccountAmino): PermanentLockedAccount {
    return {
      baseVestingAccount: object?.base_vesting_account
        ? BaseVestingAccount.fromAmino(object.base_vesting_account)
        : undefined,
    };
  },
  toAmino(message: PermanentLockedAccount): PermanentLockedAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount
      ? BaseVestingAccount.toAmino(message.baseVestingAccount)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: PermanentLockedAccountAminoMsg): PermanentLockedAccount {
    return PermanentLockedAccount.fromAmino(object.value);
  },
  toAminoMsg(message: PermanentLockedAccount): PermanentLockedAccountAminoMsg {
    return {
      type: "cosmos-sdk/PermanentLockedAccount",
      value: PermanentLockedAccount.toAmino(message),
    };
  },
};
