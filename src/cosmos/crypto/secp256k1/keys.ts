import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "@osmonauts/helpers";
export const protobufPackage = "cosmos.crypto.secp256k1";

/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
  key?: Uint8Array;
}

/** PrivKey defines a secp256k1 private key. */
export interface PrivKey {
  key?: Uint8Array;
}

function createBasePubKey(): PubKey {
  return {
    key: undefined,
  };
}

export const PubKey = {
  encode(message: PubKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      writer.uint32(10).bytes(message.key);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PubKey {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : undefined,
    };
  },

  toJSON(message: PubKey): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = message.key !== undefined ? base64FromBytes(message.key) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PubKey>, I>>(object: I): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? undefined;
    return message;
  },
};

function createBasePrivKey(): PrivKey {
  return {
    key: undefined,
  };
}

export const PrivKey = {
  encode(message: PrivKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      writer.uint32(10).bytes(message.key);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrivKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PrivKey {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : undefined,
    };
  },

  toJSON(message: PrivKey): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = message.key !== undefined ? base64FromBytes(message.key) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrivKey>, I>>(object: I): PrivKey {
    const message = createBasePrivKey();
    message.key = object.key ?? undefined;
    return message;
  },
};
