import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, Exact } from "@osmonauts/helpers";
export const protobufPackage = "cosmos.capability.v1beta1";

/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
  index?: Long;
}

/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface Owner {
  module?: string;
  name?: string;
}

/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwners {
  owners?: Owner[];
}

function createBaseCapability(): Capability {
  return {
    index: undefined,
  };
}

export const Capability = {
  encode(message: Capability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== undefined) {
      writer.uint32(8).uint64(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Capability {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapability();

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
    return {
      index: isSet(object.index) ? Long.fromString(object.index) : undefined,
    };
  },

  toJSON(message: Capability): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || undefined).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Capability>, I>>(object: I): Capability {
    const message = createBaseCapability();
    message.index =
      object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : undefined;
    return message;
  },
};

function createBaseOwner(): Owner {
  return {
    module: undefined,
    name: undefined,
  };
}

export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== undefined) {
      writer.uint32(10).string(message.module);
    }

    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();

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
    return {
      module: isSet(object.module) ? String(object.module) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
    };
  },

  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Owner>, I>>(object: I): Owner {
    const message = createBaseOwner();
    message.module = object.module ?? undefined;
    message.name = object.name ?? undefined;
    return message;
  },
};

function createBaseCapabilityOwners(): CapabilityOwners {
  return {
    owners: undefined,
  };
}

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
    const message = createBaseCapabilityOwners();

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
    return {
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => Owner.fromJSON(e)) : [],
    };
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
    const message = createBaseCapabilityOwners();
    message.owners = object.owners?.map((e) => Owner.fromPartial(e)) || [];
    return message;
  },
};
