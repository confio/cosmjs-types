/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cosmos.capability.v1beta1";

/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
  index: Long;
}

/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface Owner {
  module: string;
  name: string;
}

/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwners {
  owners: Owner[];
}

const baseCapability: object = { index: Long.UZERO };

export const Capability = {
  encode(message: Capability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Capability {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCapability } as Capability;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Capability {
    const message = { ...baseCapability } as Capability;
    message.index =
      object.index !== undefined && object.index !== null ? Long.fromString(object.index) : Long.UZERO;
    return message;
  },

  toJSON(message: Capability): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Capability>, I>>(object: I): Capability {
    const message = { ...baseCapability } as Capability;
    message.index =
      object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    return message;
  },
};

const baseOwner: object = { module: "", name: "" };

export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOwner } as Owner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Owner {
    const message = { ...baseOwner } as Owner;
    message.module = object.module !== undefined && object.module !== null ? String(object.module) : "";
    message.name = object.name !== undefined && object.name !== null ? String(object.name) : "";
    return message;
  },

  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Owner>, I>>(object: I): Owner {
    const message = { ...baseOwner } as Owner;
    message.module = object.module ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

const baseCapabilityOwners: object = {};

export const CapabilityOwners = {
  encode(message: CapabilityOwners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.owners) {
      Owner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CapabilityOwners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCapabilityOwners } as CapabilityOwners;
    message.owners = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owners.push(Owner.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CapabilityOwners {
    const message = { ...baseCapabilityOwners } as CapabilityOwners;
    message.owners = (object.owners ?? []).map((e: any) => Owner.fromJSON(e));
    return message;
  },

  toJSON(message: CapabilityOwners): unknown {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map((e) => (e ? Owner.toJSON(e) : undefined));
    } else {
      obj.owners = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CapabilityOwners>, I>>(object: I): CapabilityOwners {
    const message = { ...baseCapabilityOwners } as CapabilityOwners;
    message.owners = object.owners?.map((e) => Owner.fromPartial(e)) || [];
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
