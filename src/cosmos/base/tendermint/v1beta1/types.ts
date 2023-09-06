/* eslint-disable */
import { Data, Commit, BlockID } from "../../../../tendermint/types/types";
import { EvidenceList } from "../../../../tendermint/types/evidence";
import { Consensus } from "../../../../tendermint/version/types";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import {
  Long,
  isSet,
  DeepPartial,
  Exact,
  fromJsonTimestamp,
  bytesFromBase64,
  fromTimestamp,
  base64FromBytes,
} from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.base.tendermint.v1beta1";
/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */
export interface Block {
  header: Header;
  data: Data;
  evidence: EvidenceList;
  lastCommit: Commit;
}
/** Header defines the structure of a Tendermint block header. */
export interface Header {
  /** basic block info */
  version: Consensus;
  chainId: string;
  height: Long;
  time: Timestamp;
  /** prev block info */
  lastBlockId: BlockID;
  /** hashes of block data */
  lastCommitHash: Uint8Array;
  dataHash: Uint8Array;
  /** hashes from the app output from the prev block */
  validatorsHash: Uint8Array;
  /** validators for the next block */
  nextValidatorsHash: Uint8Array;
  /** consensus params for current block */
  consensusHash: Uint8Array;
  /** state after txs from the previous block */
  appHash: Uint8Array;
  lastResultsHash: Uint8Array;
  /** consensus info */
  evidenceHash: Uint8Array;
  /**
   * proposer_address is the original block proposer address, formatted as a Bech32 string.
   * In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string
   * for better UX.
   */
  proposerAddress: string;
}
function createBaseBlock(): Block {
  return {
    header: Header.fromPartial({}),
    data: Data.fromPartial({}),
    evidence: EvidenceList.fromPartial({}),
    lastCommit: Commit.fromPartial({}),
  };
}
export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== undefined) {
      Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastCommit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Block {
    const obj = createBaseBlock();
    if (isSet(object.header)) obj.header = Header.fromJSON(object.header);
    if (isSet(object.data)) obj.data = Data.fromJSON(object.data);
    if (isSet(object.evidence)) obj.evidence = EvidenceList.fromJSON(object.evidence);
    if (isSet(object.lastCommit)) obj.lastCommit = Commit.fromJSON(object.lastCommit);
    return obj;
  },
  toJSON(message: Block): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.data !== undefined && (obj.data = message.data ? Data.toJSON(message.data) : undefined);
    message.evidence !== undefined &&
      (obj.evidence = message.evidence ? EvidenceList.toJSON(message.evidence) : undefined);
    message.lastCommit !== undefined &&
      (obj.lastCommit = message.lastCommit ? Commit.toJSON(message.lastCommit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromPartial(object.data);
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceList.fromPartial(object.evidence);
    }
    if (object.lastCommit !== undefined && object.lastCommit !== null) {
      message.lastCommit = Commit.fromPartial(object.lastCommit);
    }
    return message;
  },
};
function createBaseHeader(): Header {
  return {
    version: Consensus.fromPartial({}),
    chainId: "",
    height: Long.ZERO,
    time: Timestamp.fromPartial({}),
    lastBlockId: BlockID.fromPartial({}),
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: "",
  };
}
export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }
    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }
    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }
    if (message.proposerAddress !== "") {
      writer.uint32(114).string(message.proposerAddress);
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
          message.proposerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Header {
    const obj = createBaseHeader();
    if (isSet(object.version)) obj.version = Consensus.fromJSON(object.version);
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.height)) obj.height = Long.fromValue(object.height);
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.lastBlockId)) obj.lastBlockId = BlockID.fromJSON(object.lastBlockId);
    if (isSet(object.lastCommitHash)) obj.lastCommitHash = bytesFromBase64(object.lastCommitHash);
    if (isSet(object.dataHash)) obj.dataHash = bytesFromBase64(object.dataHash);
    if (isSet(object.validatorsHash)) obj.validatorsHash = bytesFromBase64(object.validatorsHash);
    if (isSet(object.nextValidatorsHash)) obj.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    if (isSet(object.consensusHash)) obj.consensusHash = bytesFromBase64(object.consensusHash);
    if (isSet(object.appHash)) obj.appHash = bytesFromBase64(object.appHash);
    if (isSet(object.lastResultsHash)) obj.lastResultsHash = bytesFromBase64(object.lastResultsHash);
    if (isSet(object.evidenceHash)) obj.evidenceHash = bytesFromBase64(object.evidenceHash);
    if (isSet(object.proposerAddress)) obj.proposerAddress = String(object.proposerAddress);
    return obj;
  },
  toJSON(message: Header): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = message.version ? Consensus.toJSON(message.version) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.lastBlockId !== undefined &&
      (obj.lastBlockId = message.lastBlockId ? BlockID.toJSON(message.lastBlockId) : undefined);
    message.lastCommitHash !== undefined &&
      (obj.lastCommitHash = base64FromBytes(
        message.lastCommitHash !== undefined ? message.lastCommitHash : new Uint8Array(),
      ));
    message.dataHash !== undefined &&
      (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
    message.validatorsHash !== undefined &&
      (obj.validatorsHash = base64FromBytes(
        message.validatorsHash !== undefined ? message.validatorsHash : new Uint8Array(),
      ));
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array(),
      ));
    message.consensusHash !== undefined &&
      (obj.consensusHash = base64FromBytes(
        message.consensusHash !== undefined ? message.consensusHash : new Uint8Array(),
      ));
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    message.lastResultsHash !== undefined &&
      (obj.lastResultsHash = base64FromBytes(
        message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array(),
      ));
    message.evidenceHash !== undefined &&
      (obj.evidenceHash = base64FromBytes(
        message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array(),
      ));
    message.proposerAddress !== undefined && (obj.proposerAddress = message.proposerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Header>, I>>(object: I): Header {
    const message = createBaseHeader();
    if (object.version !== undefined && object.version !== null) {
      message.version = Consensus.fromPartial(object.version);
    }
    message.chainId = object.chainId ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromValue(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    if (object.lastBlockId !== undefined && object.lastBlockId !== null) {
      message.lastBlockId = BlockID.fromPartial(object.lastBlockId);
    }
    message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.validatorsHash = object.validatorsHash ?? new Uint8Array();
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.consensusHash = object.consensusHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? "";
    return message;
  },
};
