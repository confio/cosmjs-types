/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "cosmos.upgrade.v1beta1";

/** Plan specifies information about a planned upgrade and when it should occur. */
export interface Plan {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name: string;
  /**
   * Deprecated: Time based upgrades have been deprecated. Time based upgrade logic
   * has been removed from the SDK.
   * If this field is not empty, an error will be thrown.
   *
   * @deprecated
   */
  time?: Date;
  /**
   * The height at which the upgrade must be performed.
   * Only used if Time is not set.
   */
  height: Long;
  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info: string;
  /**
   * Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been
   * moved to the IBC module in the sub module 02-client.
   * If this field is not empty, an error will be thrown.
   *
   * @deprecated
   */
  upgradedClientState?: Any;
}

/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 */
export interface SoftwareUpgradeProposal {
  title: string;
  description: string;
  plan?: Plan;
}

/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 */
export interface CancelSoftwareUpgradeProposal {
  title: string;
  description: string;
}

/**
 * ModuleVersion specifies a module and its consensus version.
 *
 * Since: cosmos-sdk 0.43
 */
export interface ModuleVersion {
  /** name of the app module */
  name: string;
  /** consensus version of the app module */
  version: Long;
}

const basePlan: object = { name: "", height: Long.ZERO, info: "" };

export const Plan = {
  encode(message: Plan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Plan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlan } as Plan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.height = reader.int64() as Long;
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Plan {
    const message = { ...basePlan } as Plan;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromJsonTimestamp(object.time);
    } else {
      message.time = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromString(object.height);
    } else {
      message.height = Long.ZERO;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info);
    } else {
      message.info = "";
    }
    if (object.upgradedClientState !== undefined && object.upgradedClientState !== null) {
      message.upgradedClientState = Any.fromJSON(object.upgradedClientState);
    } else {
      message.upgradedClientState = undefined;
    }
    return message;
  },

  toJSON(message: Plan): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.info !== undefined && (obj.info = message.info);
    message.upgradedClientState !== undefined &&
      (obj.upgradedClientState = message.upgradedClientState
        ? Any.toJSON(message.upgradedClientState)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Plan>): Plan {
    const message = { ...basePlan } as Plan;
    message.name = object.name ?? "";
    message.time = object.time ?? undefined;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height as Long;
    } else {
      message.height = Long.ZERO;
    }
    message.info = object.info ?? "";
    if (object.upgradedClientState !== undefined && object.upgradedClientState !== null) {
      message.upgradedClientState = Any.fromPartial(object.upgradedClientState);
    } else {
      message.upgradedClientState = undefined;
    }
    return message;
  },
};

const baseSoftwareUpgradeProposal: object = { title: "", description: "" };

export const SoftwareUpgradeProposal = {
  encode(message: SoftwareUpgradeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SoftwareUpgradeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSoftwareUpgradeProposal } as SoftwareUpgradeProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SoftwareUpgradeProposal {
    const message = { ...baseSoftwareUpgradeProposal } as SoftwareUpgradeProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromJSON(object.plan);
    } else {
      message.plan = undefined;
    }
    return message;
  },

  toJSON(message: SoftwareUpgradeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SoftwareUpgradeProposal>): SoftwareUpgradeProposal {
    const message = { ...baseSoftwareUpgradeProposal } as SoftwareUpgradeProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan);
    } else {
      message.plan = undefined;
    }
    return message;
  },
};

const baseCancelSoftwareUpgradeProposal: object = { title: "", description: "" };

export const CancelSoftwareUpgradeProposal = {
  encode(message: CancelSoftwareUpgradeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelSoftwareUpgradeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCancelSoftwareUpgradeProposal } as CancelSoftwareUpgradeProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelSoftwareUpgradeProposal {
    const message = { ...baseCancelSoftwareUpgradeProposal } as CancelSoftwareUpgradeProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: CancelSoftwareUpgradeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<CancelSoftwareUpgradeProposal>): CancelSoftwareUpgradeProposal {
    const message = { ...baseCancelSoftwareUpgradeProposal } as CancelSoftwareUpgradeProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

const baseModuleVersion: object = { name: "", version: Long.UZERO };

export const ModuleVersion = {
  encode(message: ModuleVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.version.isZero()) {
      writer.uint32(16).uint64(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModuleVersion } as ModuleVersion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.version = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleVersion {
    const message = { ...baseModuleVersion } as ModuleVersion;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromString(object.version);
    } else {
      message.version = Long.UZERO;
    }
    return message;
  },

  toJSON(message: ModuleVersion): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ModuleVersion>): ModuleVersion {
    const message = { ...baseModuleVersion } as ModuleVersion;
    message.name = object.name ?? "";
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version as Long;
    } else {
      message.version = Long.UZERO;
    }
    return message;
  },
};

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
