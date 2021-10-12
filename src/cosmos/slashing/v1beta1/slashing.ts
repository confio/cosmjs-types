/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "cosmos.slashing.v1beta1";

/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
  address: string;
  /** height at which validator was first a candidate OR was unjailed */
  startHeight: Long;
  /** index offset into signed block bit array */
  indexOffset: Long;
  /** timestamp validator cannot be unjailed until */
  jailedUntil?: Date;
  /**
   * whether or not a validator has been tombstoned (killed out of validator
   * set)
   */
  tombstoned: boolean;
  /** missed blocks counter (to avoid scanning the array every time) */
  missedBlocksCounter: Long;
}

/** Params represents the parameters used for by the slashing module. */
export interface Params {
  signedBlocksWindow: Long;
  minSignedPerWindow: Uint8Array;
  downtimeJailDuration?: Duration;
  slashFractionDoubleSign: Uint8Array;
  slashFractionDowntime: Uint8Array;
}

const baseValidatorSigningInfo: object = {
  address: "",
  startHeight: Long.ZERO,
  indexOffset: Long.ZERO,
  tombstoned: false,
  missedBlocksCounter: Long.ZERO,
};

export const ValidatorSigningInfo = {
  encode(message: ValidatorSigningInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.startHeight.isZero()) {
      writer.uint32(16).int64(message.startHeight);
    }
    if (!message.indexOffset.isZero()) {
      writer.uint32(24).int64(message.indexOffset);
    }
    if (message.jailedUntil !== undefined) {
      Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (!message.missedBlocksCounter.isZero()) {
      writer.uint32(48).int64(message.missedBlocksCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidatorSigningInfo } as ValidatorSigningInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.startHeight = reader.int64() as Long;
          break;
        case 3:
          message.indexOffset = reader.int64() as Long;
          break;
        case 4:
          message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missedBlocksCounter = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorSigningInfo {
    const message = { ...baseValidatorSigningInfo } as ValidatorSigningInfo;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.startHeight !== undefined && object.startHeight !== null) {
      message.startHeight = Long.fromString(object.startHeight);
    } else {
      message.startHeight = Long.ZERO;
    }
    if (object.indexOffset !== undefined && object.indexOffset !== null) {
      message.indexOffset = Long.fromString(object.indexOffset);
    } else {
      message.indexOffset = Long.ZERO;
    }
    if (object.jailedUntil !== undefined && object.jailedUntil !== null) {
      message.jailedUntil = fromJsonTimestamp(object.jailedUntil);
    } else {
      message.jailedUntil = undefined;
    }
    if (object.tombstoned !== undefined && object.tombstoned !== null) {
      message.tombstoned = Boolean(object.tombstoned);
    } else {
      message.tombstoned = false;
    }
    if (object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null) {
      message.missedBlocksCounter = Long.fromString(object.missedBlocksCounter);
    } else {
      message.missedBlocksCounter = Long.ZERO;
    }
    return message;
  },

  toJSON(message: ValidatorSigningInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.startHeight !== undefined && (obj.startHeight = (message.startHeight || Long.ZERO).toString());
    message.indexOffset !== undefined && (obj.indexOffset = (message.indexOffset || Long.ZERO).toString());
    message.jailedUntil !== undefined && (obj.jailedUntil = message.jailedUntil.toISOString());
    message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
    message.missedBlocksCounter !== undefined &&
      (obj.missedBlocksCounter = (message.missedBlocksCounter || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorSigningInfo>): ValidatorSigningInfo {
    const message = { ...baseValidatorSigningInfo } as ValidatorSigningInfo;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.startHeight !== undefined && object.startHeight !== null) {
      message.startHeight = object.startHeight as Long;
    } else {
      message.startHeight = Long.ZERO;
    }
    if (object.indexOffset !== undefined && object.indexOffset !== null) {
      message.indexOffset = object.indexOffset as Long;
    } else {
      message.indexOffset = Long.ZERO;
    }
    if (object.jailedUntil !== undefined && object.jailedUntil !== null) {
      message.jailedUntil = object.jailedUntil;
    } else {
      message.jailedUntil = undefined;
    }
    if (object.tombstoned !== undefined && object.tombstoned !== null) {
      message.tombstoned = object.tombstoned;
    } else {
      message.tombstoned = false;
    }
    if (object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null) {
      message.missedBlocksCounter = object.missedBlocksCounter as Long;
    } else {
      message.missedBlocksCounter = Long.ZERO;
    }
    return message;
  },
};

const baseParams: object = { signedBlocksWindow: Long.ZERO };

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.signedBlocksWindow.isZero()) {
      writer.uint32(8).int64(message.signedBlocksWindow);
    }
    if (message.minSignedPerWindow.length !== 0) {
      writer.uint32(18).bytes(message.minSignedPerWindow);
    }
    if (message.downtimeJailDuration !== undefined) {
      Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slashFractionDoubleSign.length !== 0) {
      writer.uint32(34).bytes(message.slashFractionDoubleSign);
    }
    if (message.slashFractionDowntime.length !== 0) {
      writer.uint32(42).bytes(message.slashFractionDowntime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.minSignedPerWindow = new Uint8Array();
    message.slashFractionDoubleSign = new Uint8Array();
    message.slashFractionDowntime = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedBlocksWindow = reader.int64() as Long;
          break;
        case 2:
          message.minSignedPerWindow = reader.bytes();
          break;
        case 3:
          message.downtimeJailDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.slashFractionDoubleSign = reader.bytes();
          break;
        case 5:
          message.slashFractionDowntime = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.minSignedPerWindow = new Uint8Array();
    message.slashFractionDoubleSign = new Uint8Array();
    message.slashFractionDowntime = new Uint8Array();
    if (object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null) {
      message.signedBlocksWindow = Long.fromString(object.signedBlocksWindow);
    } else {
      message.signedBlocksWindow = Long.ZERO;
    }
    if (object.minSignedPerWindow !== undefined && object.minSignedPerWindow !== null) {
      message.minSignedPerWindow = bytesFromBase64(object.minSignedPerWindow);
    }
    if (object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null) {
      message.downtimeJailDuration = Duration.fromJSON(object.downtimeJailDuration);
    } else {
      message.downtimeJailDuration = undefined;
    }
    if (object.slashFractionDoubleSign !== undefined && object.slashFractionDoubleSign !== null) {
      message.slashFractionDoubleSign = bytesFromBase64(object.slashFractionDoubleSign);
    }
    if (object.slashFractionDowntime !== undefined && object.slashFractionDowntime !== null) {
      message.slashFractionDowntime = bytesFromBase64(object.slashFractionDowntime);
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.signedBlocksWindow !== undefined &&
      (obj.signedBlocksWindow = (message.signedBlocksWindow || Long.ZERO).toString());
    message.minSignedPerWindow !== undefined &&
      (obj.minSignedPerWindow = base64FromBytes(
        message.minSignedPerWindow !== undefined ? message.minSignedPerWindow : new Uint8Array(),
      ));
    message.downtimeJailDuration !== undefined &&
      (obj.downtimeJailDuration = message.downtimeJailDuration
        ? Duration.toJSON(message.downtimeJailDuration)
        : undefined);
    message.slashFractionDoubleSign !== undefined &&
      (obj.slashFractionDoubleSign = base64FromBytes(
        message.slashFractionDoubleSign !== undefined ? message.slashFractionDoubleSign : new Uint8Array(),
      ));
    message.slashFractionDowntime !== undefined &&
      (obj.slashFractionDowntime = base64FromBytes(
        message.slashFractionDowntime !== undefined ? message.slashFractionDowntime : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null) {
      message.signedBlocksWindow = object.signedBlocksWindow as Long;
    } else {
      message.signedBlocksWindow = Long.ZERO;
    }
    if (object.minSignedPerWindow !== undefined && object.minSignedPerWindow !== null) {
      message.minSignedPerWindow = object.minSignedPerWindow;
    } else {
      message.minSignedPerWindow = new Uint8Array();
    }
    if (object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null) {
      message.downtimeJailDuration = Duration.fromPartial(object.downtimeJailDuration);
    } else {
      message.downtimeJailDuration = undefined;
    }
    if (object.slashFractionDoubleSign !== undefined && object.slashFractionDoubleSign !== null) {
      message.slashFractionDoubleSign = object.slashFractionDoubleSign;
    } else {
      message.slashFractionDoubleSign = new Uint8Array();
    }
    if (object.slashFractionDowntime !== undefined && object.slashFractionDowntime !== null) {
      message.slashFractionDowntime = object.slashFractionDowntime;
    } else {
      message.slashFractionDowntime = new Uint8Array();
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
