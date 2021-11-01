/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Params,
  Validator,
  Delegation,
  UnbondingDelegation,
  Redelegation,
} from "../../../cosmos/staking/v1beta1/staking";

export const protobufPackage = "cosmos.staking.v1beta1";

/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of related to deposit. */
  params?: Params;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */
  lastTotalPower: Uint8Array;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */
  lastValidatorPowers: LastValidatorPower[];
  /** delegations defines the validator set at genesis. */
  validators: Validator[];
  /** delegations defines the delegations active at genesis. */
  delegations: Delegation[];
  /** unbonding_delegations defines the unbonding delegations active at genesis. */
  unbondingDelegations: UnbondingDelegation[];
  /** redelegations defines the redelegations active at genesis. */
  redelegations: Redelegation[];
  exported: boolean;
}

/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
  /** address is the address of the validator. */
  address: string;
  /** power defines the power of the validator. */
  power: Long;
}

const baseGenesisState: object = { exported: false };

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }
    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.lastValidatorPowers = [];
    message.validators = [];
    message.delegations = [];
    message.unbondingDelegations = [];
    message.redelegations = [];
    message.lastTotalPower = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastTotalPower = reader.bytes();
          break;
        case 3:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.exported = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.lastValidatorPowers = [];
    message.validators = [];
    message.delegations = [];
    message.unbondingDelegations = [];
    message.redelegations = [];
    message.lastTotalPower = new Uint8Array();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.lastTotalPower !== undefined && object.lastTotalPower !== null) {
      message.lastTotalPower = bytesFromBase64(object.lastTotalPower);
    }
    if (object.lastValidatorPowers !== undefined && object.lastValidatorPowers !== null) {
      for (const e of object.lastValidatorPowers) {
        message.lastValidatorPowers.push(LastValidatorPower.fromJSON(e));
      }
    }
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromJSON(e));
      }
    }
    if (object.delegations !== undefined && object.delegations !== null) {
      for (const e of object.delegations) {
        message.delegations.push(Delegation.fromJSON(e));
      }
    }
    if (object.unbondingDelegations !== undefined && object.unbondingDelegations !== null) {
      for (const e of object.unbondingDelegations) {
        message.unbondingDelegations.push(UnbondingDelegation.fromJSON(e));
      }
    }
    if (object.redelegations !== undefined && object.redelegations !== null) {
      for (const e of object.redelegations) {
        message.redelegations.push(Redelegation.fromJSON(e));
      }
    }
    if (object.exported !== undefined && object.exported !== null) {
      message.exported = Boolean(object.exported);
    } else {
      message.exported = false;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastTotalPower !== undefined &&
      (obj.lastTotalPower = base64FromBytes(
        message.lastTotalPower !== undefined ? message.lastTotalPower : new Uint8Array(),
      ));
    if (message.lastValidatorPowers) {
      obj.lastValidatorPowers = message.lastValidatorPowers.map((e) =>
        e ? LastValidatorPower.toJSON(e) : undefined,
      );
    } else {
      obj.lastValidatorPowers = [];
    }
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) => (e ? Delegation.toJSON(e) : undefined));
    } else {
      obj.delegations = [];
    }
    if (message.unbondingDelegations) {
      obj.unbondingDelegations = message.unbondingDelegations.map((e) =>
        e ? UnbondingDelegation.toJSON(e) : undefined,
      );
    } else {
      obj.unbondingDelegations = [];
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) => (e ? Redelegation.toJSON(e) : undefined));
    } else {
      obj.redelegations = [];
    }
    message.exported !== undefined && (obj.exported = message.exported);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
    message.lastValidatorPowers = [];
    if (object.lastValidatorPowers !== undefined && object.lastValidatorPowers !== null) {
      for (const e of object.lastValidatorPowers) {
        message.lastValidatorPowers.push(LastValidatorPower.fromPartial(e));
      }
    }
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromPartial(e));
      }
    }
    message.delegations = [];
    if (object.delegations !== undefined && object.delegations !== null) {
      for (const e of object.delegations) {
        message.delegations.push(Delegation.fromPartial(e));
      }
    }
    message.unbondingDelegations = [];
    if (object.unbondingDelegations !== undefined && object.unbondingDelegations !== null) {
      for (const e of object.unbondingDelegations) {
        message.unbondingDelegations.push(UnbondingDelegation.fromPartial(e));
      }
    }
    message.redelegations = [];
    if (object.redelegations !== undefined && object.redelegations !== null) {
      for (const e of object.redelegations) {
        message.redelegations.push(Redelegation.fromPartial(e));
      }
    }
    message.exported = object.exported ?? false;
    return message;
  },
};

const baseLastValidatorPower: object = { address: "", power: Long.ZERO };

export const LastValidatorPower = {
  encode(message: LastValidatorPower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLastValidatorPower } as LastValidatorPower;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.power = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastValidatorPower {
    const message = { ...baseLastValidatorPower } as LastValidatorPower;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Long.fromString(object.power);
    } else {
      message.power = Long.ZERO;
    }
    return message;
  },

  toJSON(message: LastValidatorPower): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.power !== undefined && (obj.power = (message.power || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<LastValidatorPower>): LastValidatorPower {
    const message = { ...baseLastValidatorPower } as LastValidatorPower;
    message.address = object.address ?? "";
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power as Long;
    } else {
      message.power = Long.ZERO;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
