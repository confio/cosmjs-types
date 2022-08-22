import { CapabilityOwners } from "./capability";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, Exact } from "@osmonauts/helpers";
export const protobufPackage = "cosmos.capability.v1beta1";

/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
  /** index is the index of the capability owner. */
  index?: Long;

  /** index_owners are the owners at the given index. */
  indexOwners?: CapabilityOwners;
}

/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** index is the capability global index. */
  index?: Long;

  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   */
  owners?: GenesisOwners[];
}

function createBaseGenesisOwners(): GenesisOwners {
  return {
    index: undefined,
    indexOwners: undefined,
  };
}

export const GenesisOwners = {
  encode(message: GenesisOwners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== undefined) {
      writer.uint32(8).uint64(message.index);
    }

    if (message.indexOwners !== undefined) {
      CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisOwners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisOwners();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64() as Long;
          break;

        case 2:
          message.indexOwners = CapabilityOwners.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisOwners {
    return {
      index: isSet(object.index) ? Long.fromString(object.index) : undefined,
      indexOwners: isSet(object.indexOwners) ? CapabilityOwners.fromJSON(object.indexOwners) : undefined,
    };
  },

  toJSON(message: GenesisOwners): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || undefined).toString());
    message.indexOwners !== undefined &&
      (obj.indexOwners = message.indexOwners ? CapabilityOwners.toJSON(message.indexOwners) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisOwners>, I>>(object: I): GenesisOwners {
    const message = createBaseGenesisOwners();
    message.index =
      object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : undefined;
    message.indexOwners =
      object.indexOwners !== undefined && object.indexOwners !== null
        ? CapabilityOwners.fromPartial(object.indexOwners)
        : undefined;
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return {
    index: undefined,
    owners: undefined,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== undefined) {
      writer.uint32(8).uint64(message.index);
    }

    for (const v of message.owners) {
      GenesisOwners.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64() as Long;
          break;

        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      index: isSet(object.index) ? Long.fromString(object.index) : undefined,
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || undefined).toString());

    if (message.owners) {
      obj.owners = message.owners.map((e) => (e ? GenesisOwners.toJSON(e) : undefined));
    } else {
      obj.owners = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.index =
      object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : undefined;
    message.owners = object.owners?.map((e) => GenesisOwners.fromPartial(e)) || [];
    return message;
  },
};
