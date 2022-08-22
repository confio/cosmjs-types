import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes, DeepPartial, Exact, isSet } from "@osmonauts/helpers";
export const protobufPackage = "cosmos.crypto.multisig.v1beta1";

/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 */
export interface MultiSignature {
  signatures?: Uint8Array[];
}

/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 */
export interface CompactBitArray {
  extraBitsStored?: number;
  elems?: Uint8Array;
}

function createBaseMultiSignature(): MultiSignature {
  return {
    signatures: undefined,
  };
}

export const MultiSignature = {
  encode(message: MultiSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signatures) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiSignature();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signatures.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MultiSignature {
    return {
      signatures: Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: MultiSignature): unknown {
    const obj: any = {};

    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => base64FromBytes(e !== undefined ? e : undefined));
    } else {
      obj.signatures = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultiSignature>, I>>(object: I): MultiSignature {
    const message = createBaseMultiSignature();
    message.signatures = object.signatures?.map((e) => e) || [];
    return message;
  },
};

function createBaseCompactBitArray(): CompactBitArray {
  return {
    extraBitsStored: undefined,
    elems: undefined,
  };
}

export const CompactBitArray = {
  encode(message: CompactBitArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.extraBitsStored !== undefined) {
      writer.uint32(8).uint32(message.extraBitsStored);
    }

    if (message.elems !== undefined) {
      writer.uint32(18).bytes(message.elems);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompactBitArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompactBitArray();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.extraBitsStored = reader.uint32();
          break;

        case 2:
          message.elems = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CompactBitArray {
    return {
      extraBitsStored: isSet(object.extraBitsStored) ? Number(object.extraBitsStored) : undefined,
      elems: isSet(object.elems) ? bytesFromBase64(object.elems) : undefined,
    };
  },

  toJSON(message: CompactBitArray): unknown {
    const obj: any = {};
    message.extraBitsStored !== undefined && (obj.extraBitsStored = Math.round(message.extraBitsStored));
    message.elems !== undefined &&
      (obj.elems = message.elems !== undefined ? base64FromBytes(message.elems) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CompactBitArray>, I>>(object: I): CompactBitArray {
    const message = createBaseCompactBitArray();
    message.extraBitsStored = object.extraBitsStored ?? undefined;
    message.elems = object.elems ?? undefined;
    return message;
  },
};
