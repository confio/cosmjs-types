/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "cosmos.authz.v1beta1";

/** Since: cosmos-sdk 0.43 */

/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}

/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
  authorization?: Any;
  expiration?: Timestamp;
}

const baseGenericAuthorization: object = { msg: "" };

export const GenericAuthorization = {
  encode(message: GenericAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenericAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenericAuthorization } as GenericAuthorization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenericAuthorization {
    const message = { ...baseGenericAuthorization } as GenericAuthorization;
    message.msg = object.msg !== undefined && object.msg !== null ? String(object.msg) : "";
    return message;
  },

  toJSON(message: GenericAuthorization): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(object: DeepPartial<GenericAuthorization>): GenericAuthorization {
    const message = { ...baseGenericAuthorization } as GenericAuthorization;
    message.msg = object.msg ?? "";
    return message;
  },
};

const baseGrant: object = {};

export const Grant = {
  encode(message: Grant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorization !== undefined) {
      Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Grant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGrant } as Grant;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Grant {
    const message = { ...baseGrant } as Grant;
    message.authorization =
      object.authorization !== undefined && object.authorization !== null
        ? Any.fromJSON(object.authorization)
        : undefined;
    message.expiration =
      object.expiration !== undefined && object.expiration !== null
        ? fromJsonTimestamp(object.expiration)
        : undefined;
    return message;
  },

  toJSON(message: Grant): unknown {
    const obj: any = {};
    message.authorization !== undefined &&
      (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : undefined);
    message.expiration !== undefined && (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Grant>): Grant {
    const message = { ...baseGrant } as Grant;
    message.authorization =
      object.authorization !== undefined && object.authorization !== null
        ? Any.fromPartial(object.authorization)
        : undefined;
    message.expiration =
      object.expiration !== undefined && object.expiration !== null
        ? Timestamp.fromPartial(object.expiration)
        : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
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

function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === "string") {
    return toTimestamp(new Date(o));
  } else {
    return Timestamp.fromJSON(o);
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
