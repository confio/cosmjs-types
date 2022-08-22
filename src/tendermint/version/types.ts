import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, Exact } from "@osmonauts/helpers";
export const protobufPackage = "tendermint.version";

/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface App {
  protocol?: Long;
  software?: string;
}

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
  block?: Long;
  app?: Long;
}

function createBaseApp(): App {
  return {
    protocol: undefined,
    software: undefined,
  };
}

export const App = {
  encode(message: App, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol !== undefined) {
      writer.uint32(8).uint64(message.protocol);
    }

    if (message.software !== undefined) {
      writer.uint32(18).string(message.software);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): App {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.protocol = reader.uint64() as Long;
          break;

        case 2:
          message.software = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): App {
    return {
      protocol: isSet(object.protocol) ? Long.fromString(object.protocol) : undefined,
      software: isSet(object.software) ? String(object.software) : undefined,
    };
  },

  toJSON(message: App): unknown {
    const obj: any = {};
    message.protocol !== undefined && (obj.protocol = (message.protocol || undefined).toString());
    message.software !== undefined && (obj.software = message.software);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<App>, I>>(object: I): App {
    const message = createBaseApp();
    message.protocol =
      object.protocol !== undefined && object.protocol !== null ? Long.fromValue(object.protocol) : undefined;
    message.software = object.software ?? undefined;
    return message;
  },
};

function createBaseConsensus(): Consensus {
  return {
    block: undefined,
    app: undefined,
  };
}

export const Consensus = {
  encode(message: Consensus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      writer.uint32(8).uint64(message.block);
    }

    if (message.app !== undefined) {
      writer.uint32(16).uint64(message.app);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Consensus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensus();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64() as Long;
          break;

        case 2:
          message.app = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Consensus {
    return {
      block: isSet(object.block) ? Long.fromString(object.block) : undefined,
      app: isSet(object.app) ? Long.fromString(object.app) : undefined,
    };
  },

  toJSON(message: Consensus): unknown {
    const obj: any = {};
    message.block !== undefined && (obj.block = (message.block || undefined).toString());
    message.app !== undefined && (obj.app = (message.app || undefined).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Consensus>, I>>(object: I): Consensus {
    const message = createBaseConsensus();
    message.block =
      object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : undefined;
    message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : undefined;
    return message;
  },
};
