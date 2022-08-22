import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "@osmonauts/helpers";
export const protobufPackage = "tendermint.crypto";
export interface Proof {
  total?: Long;
  index?: Long;
  leafHash?: Uint8Array;
  aunts?: Uint8Array[];
}
export interface ValueOp {
  /** Encoded in ProofOp.Key. */
  key?: Uint8Array;

  /** To encode in ProofOp.Data */
  proof?: Proof;
}
export interface DominoOp {
  key?: string;
  input?: string;
  output?: string;
}

/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOp {
  type?: string;
  key?: Uint8Array;
  data?: Uint8Array;
}

/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOps {
  ops?: ProofOp[];
}

function createBaseProof(): Proof {
  return {
    total: undefined,
    index: undefined,
    leafHash: undefined,
    aunts: undefined,
  };
}

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== undefined) {
      writer.uint32(8).int64(message.total);
    }

    if (message.index !== undefined) {
      writer.uint32(16).int64(message.index);
    }

    if (message.leafHash !== undefined) {
      writer.uint32(26).bytes(message.leafHash);
    }

    for (const v of message.aunts) {
      writer.uint32(34).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.total = reader.int64() as Long;
          break;

        case 2:
          message.index = reader.int64() as Long;
          break;

        case 3:
          message.leafHash = reader.bytes();
          break;

        case 4:
          message.aunts.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Proof {
    return {
      total: isSet(object.total) ? Long.fromString(object.total) : undefined,
      index: isSet(object.index) ? Long.fromString(object.index) : undefined,
      leafHash: isSet(object.leafHash) ? bytesFromBase64(object.leafHash) : undefined,
      aunts: Array.isArray(object?.aunts) ? object.aunts.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = (message.total || undefined).toString());
    message.index !== undefined && (obj.index = (message.index || undefined).toString());
    message.leafHash !== undefined &&
      (obj.leafHash = message.leafHash !== undefined ? base64FromBytes(message.leafHash) : undefined);

    if (message.aunts) {
      obj.aunts = message.aunts.map((e) => base64FromBytes(e !== undefined ? e : undefined));
    } else {
      obj.aunts = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    message.total =
      object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : undefined;
    message.index =
      object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : undefined;
    message.leafHash = object.leafHash ?? undefined;
    message.aunts = object.aunts?.map((e) => e) || [];
    return message;
  },
};

function createBaseValueOp(): ValueOp {
  return {
    key: undefined,
    proof: undefined,
  };
}

export const ValueOp = {
  encode(message: ValueOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValueOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValueOp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValueOp {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : undefined,
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
    };
  },

  toJSON(message: ValueOp): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = message.key !== undefined ? base64FromBytes(message.key) : undefined);
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValueOp>, I>>(object: I): ValueOp {
    const message = createBaseValueOp();
    message.key = object.key ?? undefined;
    message.proof =
      object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
};

function createBaseDominoOp(): DominoOp {
  return {
    key: undefined,
    input: undefined,
    output: undefined,
  };
}

export const DominoOp = {
  encode(message: DominoOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }

    if (message.input !== undefined) {
      writer.uint32(18).string(message.input);
    }

    if (message.output !== undefined) {
      writer.uint32(26).string(message.output);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DominoOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDominoOp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.input = reader.string();
          break;

        case 3:
          message.output = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DominoOp {
    return {
      key: isSet(object.key) ? String(object.key) : undefined,
      input: isSet(object.input) ? String(object.input) : undefined,
      output: isSet(object.output) ? String(object.output) : undefined,
    };
  },

  toJSON(message: DominoOp): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.input !== undefined && (obj.input = message.input);
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DominoOp>, I>>(object: I): DominoOp {
    const message = createBaseDominoOp();
    message.key = object.key ?? undefined;
    message.input = object.input ?? undefined;
    message.output = object.output ?? undefined;
    return message;
  },
};

function createBaseProofOp(): ProofOp {
  return {
    type: undefined,
    key: undefined,
    data: undefined,
  };
}

export const ProofOp = {
  encode(message: ProofOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      writer.uint32(10).string(message.type);
    }

    if (message.key !== undefined) {
      writer.uint32(18).bytes(message.key);
    }

    if (message.data !== undefined) {
      writer.uint32(26).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.key = reader.bytes();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProofOp {
    return {
      type: isSet(object.type) ? String(object.type) : undefined,
      key: isSet(object.key) ? bytesFromBase64(object.key) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : undefined,
    };
  },

  toJSON(message: ProofOp): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.key !== undefined &&
      (obj.key = message.key !== undefined ? base64FromBytes(message.key) : undefined);
    message.data !== undefined &&
      (obj.data = message.data !== undefined ? base64FromBytes(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofOp>, I>>(object: I): ProofOp {
    const message = createBaseProofOp();
    message.type = object.type ?? undefined;
    message.key = object.key ?? undefined;
    message.data = object.data ?? undefined;
    return message;
  },
};

function createBaseProofOps(): ProofOps {
  return {
    ops: undefined,
  };
}

export const ProofOps = {
  encode(message: ProofOps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ops) {
      ProofOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOps();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProofOps {
    return {
      ops: Array.isArray(object?.ops) ? object.ops.map((e: any) => ProofOp.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProofOps): unknown {
    const obj: any = {};

    if (message.ops) {
      obj.ops = message.ops.map((e) => (e ? ProofOp.toJSON(e) : undefined));
    } else {
      obj.ops = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofOps>, I>>(object: I): ProofOps {
    const message = createBaseProofOps();
    message.ops = object.ops?.map((e) => ProofOp.fromPartial(e)) || [];
    return message;
  },
};
