import { Proof } from "../crypto/proof";
import { Consensus } from "../version/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { ValidatorSet } from "./validator";
import * as _m0 from "protobufjs/minimal";
import {
  isSet,
  bytesFromBase64,
  base64FromBytes,
  DeepPartial,
  Exact,
  Long,
  fromJsonTimestamp,
  fromTimestamp,
} from "@osmonauts/helpers";
export const protobufPackage = "tendermint.types";

/** BlockIdFlag indicates which BlcokID the signature is for */
export enum BlockIDFlag {
  BLOCK_ID_FLAG_UNKNOWN = 0,
  BLOCK_ID_FLAG_ABSENT = 1,
  BLOCK_ID_FLAG_COMMIT = 2,
  BLOCK_ID_FLAG_NIL = 3,
  UNRECOGNIZED = -1,
}
export function blockIDFlagFromJSON(object: any): BlockIDFlag {
  switch (object) {
    case 0:
    case "BLOCK_ID_FLAG_UNKNOWN":
      return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;

    case 1:
    case "BLOCK_ID_FLAG_ABSENT":
      return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;

    case 2:
    case "BLOCK_ID_FLAG_COMMIT":
      return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;

    case 3:
    case "BLOCK_ID_FLAG_NIL":
      return BlockIDFlag.BLOCK_ID_FLAG_NIL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return BlockIDFlag.UNRECOGNIZED;
  }
}
export function blockIDFlagToJSON(object: BlockIDFlag): string {
  switch (object) {
    case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
      return "BLOCK_ID_FLAG_UNKNOWN";

    case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
      return "BLOCK_ID_FLAG_ABSENT";

    case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
      return "BLOCK_ID_FLAG_COMMIT";

    case BlockIDFlag.BLOCK_ID_FLAG_NIL:
      return "BLOCK_ID_FLAG_NIL";

    default:
      return "UNKNOWN";
  }
}

/** SignedMsgType is a type of signed message in the consensus. */
export enum SignedMsgType {
  SIGNED_MSG_TYPE_UNKNOWN = 0,

  /** SIGNED_MSG_TYPE_PREVOTE - Votes */
  SIGNED_MSG_TYPE_PREVOTE = 1,
  SIGNED_MSG_TYPE_PRECOMMIT = 2,

  /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
  SIGNED_MSG_TYPE_PROPOSAL = 32,
  UNRECOGNIZED = -1,
}
export function signedMsgTypeFromJSON(object: any): SignedMsgType {
  switch (object) {
    case 0:
    case "SIGNED_MSG_TYPE_UNKNOWN":
      return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;

    case 1:
    case "SIGNED_MSG_TYPE_PREVOTE":
      return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;

    case 2:
    case "SIGNED_MSG_TYPE_PRECOMMIT":
      return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;

    case 32:
    case "SIGNED_MSG_TYPE_PROPOSAL":
      return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return SignedMsgType.UNRECOGNIZED;
  }
}
export function signedMsgTypeToJSON(object: SignedMsgType): string {
  switch (object) {
    case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
      return "SIGNED_MSG_TYPE_UNKNOWN";

    case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
      return "SIGNED_MSG_TYPE_PREVOTE";

    case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
      return "SIGNED_MSG_TYPE_PRECOMMIT";

    case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
      return "SIGNED_MSG_TYPE_PROPOSAL";

    default:
      return "UNKNOWN";
  }
}

/** PartsetHeader */
export interface PartSetHeader {
  total?: number;
  hash?: Uint8Array;
}
export interface Part {
  index?: number;
  bytes?: Uint8Array;
  proof?: Proof;
}

/** BlockID */
export interface BlockID {
  hash?: Uint8Array;
  partSetHeader?: PartSetHeader;
}

/** Header defines the structure of a Tendermint block header. */
export interface Header {
  /** basic block info */
  version?: Consensus;
  chainId?: string;
  height?: Long;
  time?: Timestamp;

  /** prev block info */
  lastBlockId?: BlockID;

  /** hashes of block data */
  lastCommitHash?: Uint8Array;
  dataHash?: Uint8Array;

  /** hashes from the app output from the prev block */
  validatorsHash?: Uint8Array;

  /** validators for the next block */
  nextValidatorsHash?: Uint8Array;

  /** consensus params for current block */
  consensusHash?: Uint8Array;

  /** state after txs from the previous block */
  appHash?: Uint8Array;
  lastResultsHash?: Uint8Array;

  /** consensus info */
  evidenceHash?: Uint8Array;

  /** original proposer of the block */
  proposerAddress?: Uint8Array;
}

/** Data contains the set of transactions included in the block */
export interface Data {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   */
  txs?: Uint8Array[];
}

/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface Vote {
  type?: SignedMsgType;
  height?: Long;
  round?: number;
  blockId?: BlockID;
  timestamp?: Timestamp;
  validatorAddress?: Uint8Array;
  validatorIndex?: number;
  signature?: Uint8Array;
}

/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
  height?: Long;
  round?: number;
  blockId?: BlockID;
  signatures?: CommitSig[];
}

/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
  blockIdFlag?: BlockIDFlag;
  validatorAddress?: Uint8Array;
  timestamp?: Timestamp;
  signature?: Uint8Array;
}
export interface Proposal {
  type?: SignedMsgType;
  height?: Long;
  round?: number;
  polRound?: number;
  blockId?: BlockID;
  timestamp?: Timestamp;
  signature?: Uint8Array;
}
export interface SignedHeader {
  header?: Header;
  commit?: Commit;
}
export interface LightBlock {
  signedHeader?: SignedHeader;
  validatorSet?: ValidatorSet;
}
export interface BlockMeta {
  blockId?: BlockID;
  blockSize?: Long;
  header?: Header;
  numTxs?: Long;
}

/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
  rootHash?: Uint8Array;
  data?: Uint8Array;
  proof?: Proof;
}

function createBasePartSetHeader(): PartSetHeader {
  return {
    total: undefined,
    hash: undefined,
  };
}

export const PartSetHeader = {
  encode(message: PartSetHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== undefined) {
      writer.uint32(8).uint32(message.total);
    }

    if (message.hash !== undefined) {
      writer.uint32(18).bytes(message.hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartSetHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartSetHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;

        case 2:
          message.hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PartSetHeader {
    return {
      total: isSet(object.total) ? Number(object.total) : undefined,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : undefined,
    };
  },

  toJSON(message: PartSetHeader): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.hash !== undefined &&
      (obj.hash = message.hash !== undefined ? base64FromBytes(message.hash) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartSetHeader>, I>>(object: I): PartSetHeader {
    const message = createBasePartSetHeader();
    message.total = object.total ?? undefined;
    message.hash = object.hash ?? undefined;
    return message;
  },
};

function createBasePart(): Part {
  return {
    index: undefined,
    bytes: undefined,
    proof: undefined,
  };
}

export const Part = {
  encode(message: Part, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== undefined) {
      writer.uint32(8).uint32(message.index);
    }

    if (message.bytes !== undefined) {
      writer.uint32(18).bytes(message.bytes);
    }

    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Part {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePart();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;

        case 2:
          message.bytes = reader.bytes();
          break;

        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Part {
    return {
      index: isSet(object.index) ? Number(object.index) : undefined,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : undefined,
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
    };
  },

  toJSON(message: Part): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.bytes !== undefined &&
      (obj.bytes = message.bytes !== undefined ? base64FromBytes(message.bytes) : undefined);
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Part>, I>>(object: I): Part {
    const message = createBasePart();
    message.index = object.index ?? undefined;
    message.bytes = object.bytes ?? undefined;
    message.proof =
      object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
};

function createBaseBlockID(): BlockID {
  return {
    hash: undefined,
    partSetHeader: undefined,
  };
}

export const BlockID = {
  encode(message: BlockID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== undefined) {
      writer.uint32(10).bytes(message.hash);
    }

    if (message.partSetHeader !== undefined) {
      PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        case 2:
          message.partSetHeader = PartSetHeader.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlockID {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : undefined,
      partSetHeader: isSet(object.partSetHeader) ? PartSetHeader.fromJSON(object.partSetHeader) : undefined,
    };
  },

  toJSON(message: BlockID): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = message.hash !== undefined ? base64FromBytes(message.hash) : undefined);
    message.partSetHeader !== undefined &&
      (obj.partSetHeader = message.partSetHeader ? PartSetHeader.toJSON(message.partSetHeader) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockID>, I>>(object: I): BlockID {
    const message = createBaseBlockID();
    message.hash = object.hash ?? undefined;
    message.partSetHeader =
      object.partSetHeader !== undefined && object.partSetHeader !== null
        ? PartSetHeader.fromPartial(object.partSetHeader)
        : undefined;
    return message;
  },
};

function createBaseHeader(): Header {
  return {
    version: undefined,
    chainId: undefined,
    height: undefined,
    time: undefined,
    lastBlockId: undefined,
    lastCommitHash: undefined,
    dataHash: undefined,
    validatorsHash: undefined,
    nextValidatorsHash: undefined,
    consensusHash: undefined,
    appHash: undefined,
    lastResultsHash: undefined,
    evidenceHash: undefined,
    proposerAddress: undefined,
  };
}

export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }

    if (message.chainId !== undefined) {
      writer.uint32(18).string(message.chainId);
    }

    if (message.height !== undefined) {
      writer.uint32(24).int64(message.height);
    }

    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }

    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }

    if (message.lastCommitHash !== undefined) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }

    if (message.dataHash !== undefined) {
      writer.uint32(58).bytes(message.dataHash);
    }

    if (message.validatorsHash !== undefined) {
      writer.uint32(66).bytes(message.validatorsHash);
    }

    if (message.nextValidatorsHash !== undefined) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }

    if (message.consensusHash !== undefined) {
      writer.uint32(82).bytes(message.consensusHash);
    }

    if (message.appHash !== undefined) {
      writer.uint32(90).bytes(message.appHash);
    }

    if (message.lastResultsHash !== undefined) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }

    if (message.evidenceHash !== undefined) {
      writer.uint32(106).bytes(message.evidenceHash);
    }

    if (message.proposerAddress !== undefined) {
      writer.uint32(114).bytes(message.proposerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = Consensus.decode(reader, reader.uint32());
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.height = reader.int64() as Long;
          break;

        case 4:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.lastCommitHash = reader.bytes();
          break;

        case 7:
          message.dataHash = reader.bytes();
          break;

        case 8:
          message.validatorsHash = reader.bytes();
          break;

        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;

        case 10:
          message.consensusHash = reader.bytes();
          break;

        case 11:
          message.appHash = reader.bytes();
          break;

        case 12:
          message.lastResultsHash = reader.bytes();
          break;

        case 13:
          message.evidenceHash = reader.bytes();
          break;

        case 14:
          message.proposerAddress = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Header {
    return {
      version: isSet(object.version) ? Consensus.fromJSON(object.version) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : undefined,
      height: isSet(object.height) ? Long.fromString(object.height) : undefined,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : undefined,
      lastCommitHash: isSet(object.lastCommitHash) ? bytesFromBase64(object.lastCommitHash) : undefined,
      dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : undefined,
      validatorsHash: isSet(object.validatorsHash) ? bytesFromBase64(object.validatorsHash) : undefined,
      nextValidatorsHash: isSet(object.nextValidatorsHash)
        ? bytesFromBase64(object.nextValidatorsHash)
        : undefined,
      consensusHash: isSet(object.consensusHash) ? bytesFromBase64(object.consensusHash) : undefined,
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : undefined,
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : undefined,
      evidenceHash: isSet(object.evidenceHash) ? bytesFromBase64(object.evidenceHash) : undefined,
      proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : undefined,
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = message.version ? Consensus.toJSON(message.version) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined && (obj.height = (message.height || undefined).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.lastBlockId !== undefined &&
      (obj.lastBlockId = message.lastBlockId ? BlockID.toJSON(message.lastBlockId) : undefined);
    message.lastCommitHash !== undefined &&
      (obj.lastCommitHash =
        message.lastCommitHash !== undefined ? base64FromBytes(message.lastCommitHash) : undefined);
    message.dataHash !== undefined &&
      (obj.dataHash = message.dataHash !== undefined ? base64FromBytes(message.dataHash) : undefined);
    message.validatorsHash !== undefined &&
      (obj.validatorsHash =
        message.validatorsHash !== undefined ? base64FromBytes(message.validatorsHash) : undefined);
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash =
        message.nextValidatorsHash !== undefined ? base64FromBytes(message.nextValidatorsHash) : undefined);
    message.consensusHash !== undefined &&
      (obj.consensusHash =
        message.consensusHash !== undefined ? base64FromBytes(message.consensusHash) : undefined);
    message.appHash !== undefined &&
      (obj.appHash = message.appHash !== undefined ? base64FromBytes(message.appHash) : undefined);
    message.lastResultsHash !== undefined &&
      (obj.lastResultsHash =
        message.lastResultsHash !== undefined ? base64FromBytes(message.lastResultsHash) : undefined);
    message.evidenceHash !== undefined &&
      (obj.evidenceHash =
        message.evidenceHash !== undefined ? base64FromBytes(message.evidenceHash) : undefined);
    message.proposerAddress !== undefined &&
      (obj.proposerAddress =
        message.proposerAddress !== undefined ? base64FromBytes(message.proposerAddress) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Header>, I>>(object: I): Header {
    const message = createBaseHeader();
    message.version =
      object.version !== undefined && object.version !== null
        ? Consensus.fromPartial(object.version)
        : undefined;
    message.chainId = object.chainId ?? undefined;
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : undefined;
    message.time =
      object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.lastBlockId =
      object.lastBlockId !== undefined && object.lastBlockId !== null
        ? BlockID.fromPartial(object.lastBlockId)
        : undefined;
    message.lastCommitHash = object.lastCommitHash ?? undefined;
    message.dataHash = object.dataHash ?? undefined;
    message.validatorsHash = object.validatorsHash ?? undefined;
    message.nextValidatorsHash = object.nextValidatorsHash ?? undefined;
    message.consensusHash = object.consensusHash ?? undefined;
    message.appHash = object.appHash ?? undefined;
    message.lastResultsHash = object.lastResultsHash ?? undefined;
    message.evidenceHash = object.evidenceHash ?? undefined;
    message.proposerAddress = object.proposerAddress ?? undefined;
    return message;
  },
};

function createBaseData(): Data {
  return {
    txs: undefined,
  };
}

export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Data {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: Data): unknown {
    const obj: any = {};

    if (message.txs) {
      obj.txs = message.txs.map((e) => base64FromBytes(e !== undefined ? e : undefined));
    } else {
      obj.txs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Data>, I>>(object: I): Data {
    const message = createBaseData();
    message.txs = object.txs?.map((e) => e) || [];
    return message;
  },
};

function createBaseVote(): Vote {
  return {
    type: undefined,
    height: undefined,
    round: undefined,
    blockId: undefined,
    timestamp: undefined,
    validatorAddress: undefined,
    validatorIndex: undefined,
    signature: undefined,
  };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      writer.uint32(8).int32(message.type);
    }

    if (message.height !== undefined) {
      writer.uint32(16).int64(message.height);
    }

    if (message.round !== undefined) {
      writer.uint32(24).int32(message.round);
    }

    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }

    if (message.validatorAddress !== undefined) {
      writer.uint32(50).bytes(message.validatorAddress);
    }

    if (message.validatorIndex !== undefined) {
      writer.uint32(56).int32(message.validatorIndex);
    }

    if (message.signature !== undefined) {
      writer.uint32(66).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;

        case 2:
          message.height = reader.int64() as Long;
          break;

        case 3:
          message.round = reader.int32();
          break;

        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        case 6:
          message.validatorAddress = reader.bytes();
          break;

        case 7:
          message.validatorIndex = reader.int32();
          break;

        case 8:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Vote {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : undefined,
      height: isSet(object.height) ? Long.fromString(object.height) : undefined,
      round: isSet(object.round) ? Number(object.round) : undefined,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : undefined,
      validatorIndex: isSet(object.validatorIndex) ? Number(object.validatorIndex) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || undefined).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.validatorAddress !== undefined &&
      (obj.validatorAddress =
        message.validatorAddress !== undefined ? base64FromBytes(message.validatorAddress) : undefined);
    message.validatorIndex !== undefined && (obj.validatorIndex = Math.round(message.validatorIndex));
    message.signature !== undefined &&
      (obj.signature = message.signature !== undefined ? base64FromBytes(message.signature) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote {
    const message = createBaseVote();
    message.type = object.type ?? undefined;
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : undefined;
    message.round = object.round ?? undefined;
    message.blockId =
      object.blockId !== undefined && object.blockId !== null
        ? BlockID.fromPartial(object.blockId)
        : undefined;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Timestamp.fromPartial(object.timestamp)
        : undefined;
    message.validatorAddress = object.validatorAddress ?? undefined;
    message.validatorIndex = object.validatorIndex ?? undefined;
    message.signature = object.signature ?? undefined;
    return message;
  },
};

function createBaseCommit(): Commit {
  return {
    height: undefined,
    round: undefined,
    blockId: undefined,
    signatures: undefined,
  };
}

export const Commit = {
  encode(message: Commit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== undefined) {
      writer.uint32(8).int64(message.height);
    }

    if (message.round !== undefined) {
      writer.uint32(16).int32(message.round);
    }

    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.signatures) {
      CommitSig.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;

        case 2:
          message.round = reader.int32();
          break;

        case 3:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 4:
          message.signatures.push(CommitSig.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Commit {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : undefined,
      round: isSet(object.round) ? Number(object.round) : undefined,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      signatures: Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => CommitSig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Commit): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || undefined).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);

    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => (e ? CommitSig.toJSON(e) : undefined));
    } else {
      obj.signatures = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Commit>, I>>(object: I): Commit {
    const message = createBaseCommit();
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : undefined;
    message.round = object.round ?? undefined;
    message.blockId =
      object.blockId !== undefined && object.blockId !== null
        ? BlockID.fromPartial(object.blockId)
        : undefined;
    message.signatures = object.signatures?.map((e) => CommitSig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCommitSig(): CommitSig {
  return {
    blockIdFlag: undefined,
    validatorAddress: undefined,
    timestamp: undefined,
    signature: undefined,
  };
}

export const CommitSig = {
  encode(message: CommitSig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockIdFlag !== undefined) {
      writer.uint32(8).int32(message.blockIdFlag);
    }

    if (message.validatorAddress !== undefined) {
      writer.uint32(18).bytes(message.validatorAddress);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }

    if (message.signature !== undefined) {
      writer.uint32(34).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitSig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitSig();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockIdFlag = reader.int32() as any;
          break;

        case 2:
          message.validatorAddress = reader.bytes();
          break;

        case 3:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommitSig {
    return {
      blockIdFlag: isSet(object.blockIdFlag) ? blockIDFlagFromJSON(object.blockIdFlag) : undefined,
      validatorAddress: isSet(object.validatorAddress) ? bytesFromBase64(object.validatorAddress) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
    };
  },

  toJSON(message: CommitSig): unknown {
    const obj: any = {};
    message.blockIdFlag !== undefined && (obj.blockIdFlag = blockIDFlagToJSON(message.blockIdFlag));
    message.validatorAddress !== undefined &&
      (obj.validatorAddress =
        message.validatorAddress !== undefined ? base64FromBytes(message.validatorAddress) : undefined);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.signature !== undefined &&
      (obj.signature = message.signature !== undefined ? base64FromBytes(message.signature) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommitSig>, I>>(object: I): CommitSig {
    const message = createBaseCommitSig();
    message.blockIdFlag = object.blockIdFlag ?? undefined;
    message.validatorAddress = object.validatorAddress ?? undefined;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Timestamp.fromPartial(object.timestamp)
        : undefined;
    message.signature = object.signature ?? undefined;
    return message;
  },
};

function createBaseProposal(): Proposal {
  return {
    type: undefined,
    height: undefined,
    round: undefined,
    polRound: undefined,
    blockId: undefined,
    timestamp: undefined,
    signature: undefined,
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      writer.uint32(8).int32(message.type);
    }

    if (message.height !== undefined) {
      writer.uint32(16).int64(message.height);
    }

    if (message.round !== undefined) {
      writer.uint32(24).int32(message.round);
    }

    if (message.polRound !== undefined) {
      writer.uint32(32).int32(message.polRound);
    }

    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(50).fork()).ldelim();
    }

    if (message.signature !== undefined) {
      writer.uint32(58).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;

        case 2:
          message.height = reader.int64() as Long;
          break;

        case 3:
          message.round = reader.int32();
          break;

        case 4:
          message.polRound = reader.int32();
          break;

        case 5:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        case 7:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : undefined,
      height: isSet(object.height) ? Long.fromString(object.height) : undefined,
      round: isSet(object.round) ? Number(object.round) : undefined,
      polRound: isSet(object.polRound) ? Number(object.polRound) : undefined,
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || undefined).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.polRound !== undefined && (obj.polRound = Math.round(message.polRound));
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.signature !== undefined &&
      (obj.signature = message.signature !== undefined ? base64FromBytes(message.signature) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.type = object.type ?? undefined;
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : undefined;
    message.round = object.round ?? undefined;
    message.polRound = object.polRound ?? undefined;
    message.blockId =
      object.blockId !== undefined && object.blockId !== null
        ? BlockID.fromPartial(object.blockId)
        : undefined;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Timestamp.fromPartial(object.timestamp)
        : undefined;
    message.signature = object.signature ?? undefined;
    return message;
  },
};

function createBaseSignedHeader(): SignedHeader {
  return {
    header: undefined,
    commit: undefined,
  };
}

export const SignedHeader = {
  encode(message: SignedHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }

    if (message.commit !== undefined) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;

        case 2:
          message.commit = Commit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignedHeader {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      commit: isSet(object.commit) ? Commit.fromJSON(object.commit) : undefined,
    };
  },

  toJSON(message: SignedHeader): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? Commit.toJSON(message.commit) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignedHeader>, I>>(object: I): SignedHeader {
    const message = createBaseSignedHeader();
    message.header =
      object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.commit =
      object.commit !== undefined && object.commit !== null ? Commit.fromPartial(object.commit) : undefined;
    return message;
  },
};

function createBaseLightBlock(): LightBlock {
  return {
    signedHeader: undefined,
    validatorSet: undefined,
  };
}

export const LightBlock = {
  encode(message: LightBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedHeader !== undefined) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }

    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LightBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;

        case 2:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LightBlock {
    return {
      signedHeader: isSet(object.signedHeader) ? SignedHeader.fromJSON(object.signedHeader) : undefined,
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
    };
  },

  toJSON(message: LightBlock): unknown {
    const obj: any = {};
    message.signedHeader !== undefined &&
      (obj.signedHeader = message.signedHeader ? SignedHeader.toJSON(message.signedHeader) : undefined);
    message.validatorSet !== undefined &&
      (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LightBlock>, I>>(object: I): LightBlock {
    const message = createBaseLightBlock();
    message.signedHeader =
      object.signedHeader !== undefined && object.signedHeader !== null
        ? SignedHeader.fromPartial(object.signedHeader)
        : undefined;
    message.validatorSet =
      object.validatorSet !== undefined && object.validatorSet !== null
        ? ValidatorSet.fromPartial(object.validatorSet)
        : undefined;
    return message;
  },
};

function createBaseBlockMeta(): BlockMeta {
  return {
    blockId: undefined,
    blockSize: undefined,
    header: undefined,
    numTxs: undefined,
  };
}

export const BlockMeta = {
  encode(message: BlockMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }

    if (message.blockSize !== undefined) {
      writer.uint32(16).int64(message.blockSize);
    }

    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }

    if (message.numTxs !== undefined) {
      writer.uint32(32).int64(message.numTxs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMeta();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;

        case 2:
          message.blockSize = reader.int64() as Long;
          break;

        case 3:
          message.header = Header.decode(reader, reader.uint32());
          break;

        case 4:
          message.numTxs = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlockMeta {
    return {
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      blockSize: isSet(object.blockSize) ? Long.fromString(object.blockSize) : undefined,
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      numTxs: isSet(object.numTxs) ? Long.fromString(object.numTxs) : undefined,
    };
  },

  toJSON(message: BlockMeta): unknown {
    const obj: any = {};
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.blockSize !== undefined && (obj.blockSize = (message.blockSize || undefined).toString());
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.numTxs !== undefined && (obj.numTxs = (message.numTxs || undefined).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockMeta>, I>>(object: I): BlockMeta {
    const message = createBaseBlockMeta();
    message.blockId =
      object.blockId !== undefined && object.blockId !== null
        ? BlockID.fromPartial(object.blockId)
        : undefined;
    message.blockSize =
      object.blockSize !== undefined && object.blockSize !== null
        ? Long.fromValue(object.blockSize)
        : undefined;
    message.header =
      object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.numTxs =
      object.numTxs !== undefined && object.numTxs !== null ? Long.fromValue(object.numTxs) : undefined;
    return message;
  },
};

function createBaseTxProof(): TxProof {
  return {
    rootHash: undefined,
    data: undefined,
    proof: undefined,
  };
}

export const TxProof = {
  encode(message: TxProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rootHash !== undefined) {
      writer.uint32(10).bytes(message.rootHash);
    }

    if (message.data !== undefined) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rootHash = reader.bytes();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxProof {
    return {
      rootHash: isSet(object.rootHash) ? bytesFromBase64(object.rootHash) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : undefined,
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
    };
  },

  toJSON(message: TxProof): unknown {
    const obj: any = {};
    message.rootHash !== undefined &&
      (obj.rootHash = message.rootHash !== undefined ? base64FromBytes(message.rootHash) : undefined);
    message.data !== undefined &&
      (obj.data = message.data !== undefined ? base64FromBytes(message.data) : undefined);
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TxProof>, I>>(object: I): TxProof {
    const message = createBaseTxProof();
    message.rootHash = object.rootHash ?? undefined;
    message.data = object.data ?? undefined;
    message.proof =
      object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
};
