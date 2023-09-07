/* eslint-disable */
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block as Block1 } from "../../../../tendermint/types/block";
import { Block as Block2 } from "./types";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.base.tendermint.v1beta1";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
  height: Long;
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
  blockHeight: Long;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
  blockHeight: Long;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}
/** Validator is the type for the validator-set. */
export interface Validator {
  address: string;
  pubKey: Any;
  votingPower: Long;
  proposerPriority: Long;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
  height: Long;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
  blockId: BlockID;
  /** Deprecated: please use `sdk_block` instead */
  block: Block1;
  /** Since: cosmos-sdk 0.47 */
  sdkBlock: Block2;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
  blockId: BlockID;
  /** Deprecated: please use `sdk_block` instead */
  block: Block1;
  /** Since: cosmos-sdk 0.47 */
  sdkBlock: Block2;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
  syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
  defaultNodeInfo: DefaultNodeInfo;
  applicationVersion: VersionInfo;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
  name: string;
  appName: string;
  version: string;
  gitCommit: string;
  buildTags: string;
  goVersion: string;
  buildDeps: Module[];
  /** Since: cosmos-sdk 0.43 */
  cosmosSdkVersion: string;
}
/** Module is the type for VersionInfo */
export interface Module {
  /** module path */
  path: string;
  /** module version */
  version: string;
  /** checksum */
  sum: string;
}
/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequest {
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}
/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponse {
  code: number;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proofOps: ProofOps;
  height: Long;
  codespace: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 */
export interface ProofOp {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 */
export interface ProofOps {
  ops: ProofOp[];
}
function createBaseGetValidatorSetByHeightRequest(): GetValidatorSetByHeightRequest {
  return {
    height: Long.ZERO,
    pagination: PageRequest.fromPartial({}),
  };
}
export const GetValidatorSetByHeightRequest = {
  encode(message: GetValidatorSetByHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorSetByHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetValidatorSetByHeightRequest {
    const obj = createBaseGetValidatorSetByHeightRequest();
    if (isSet(object.height)) obj.height = Long.fromValue(object.height);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GetValidatorSetByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetValidatorSetByHeightRequest>, I>>(
    object: I,
  ): GetValidatorSetByHeightRequest {
    const message = createBaseGetValidatorSetByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromValue(object.height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseGetValidatorSetByHeightResponse(): GetValidatorSetByHeightResponse {
  return {
    blockHeight: Long.ZERO,
    validators: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const GetValidatorSetByHeightResponse = {
  encode(message: GetValidatorSetByHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorSetByHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64() as Long;
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetValidatorSetByHeightResponse {
    const obj = createBaseGetValidatorSetByHeightResponse();
    if (isSet(object.blockHeight)) obj.blockHeight = Long.fromValue(object.blockHeight);
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GetValidatorSetByHeightResponse): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetValidatorSetByHeightResponse>, I>>(
    object: I,
  ): GetValidatorSetByHeightResponse {
    const message = createBaseGetValidatorSetByHeightResponse();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Long.fromValue(object.blockHeight);
    }
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseGetLatestValidatorSetRequest(): GetLatestValidatorSetRequest {
  return {
    pagination: PageRequest.fromPartial({}),
  };
}
export const GetLatestValidatorSetRequest = {
  encode(message: GetLatestValidatorSetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestValidatorSetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestValidatorSetRequest {
    const obj = createBaseGetLatestValidatorSetRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GetLatestValidatorSetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetLatestValidatorSetRequest>, I>>(
    object: I,
  ): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseGetLatestValidatorSetResponse(): GetLatestValidatorSetResponse {
  return {
    blockHeight: Long.ZERO,
    validators: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const GetLatestValidatorSetResponse = {
  encode(message: GetLatestValidatorSetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestValidatorSetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64() as Long;
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestValidatorSetResponse {
    const obj = createBaseGetLatestValidatorSetResponse();
    if (isSet(object.blockHeight)) obj.blockHeight = Long.fromValue(object.blockHeight);
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: GetLatestValidatorSetResponse): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetLatestValidatorSetResponse>, I>>(
    object: I,
  ): GetLatestValidatorSetResponse {
    const message = createBaseGetLatestValidatorSetResponse();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Long.fromValue(object.blockHeight);
    }
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseValidator(): Validator {
  return {
    address: "",
    pubKey: Any.fromPartial({}),
    votingPower: Long.ZERO,
    proposerPriority: Long.ZERO,
  };
}
export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.votingPower.isZero()) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (!message.proposerPriority.isZero()) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64() as Long;
          break;
        case 4:
          message.proposerPriority = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    const obj = createBaseValidator();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pubKey)) obj.pubKey = Any.fromJSON(object.pubKey);
    if (isSet(object.votingPower)) obj.votingPower = Long.fromValue(object.votingPower);
    if (isSet(object.proposerPriority)) obj.proposerPriority = Long.fromValue(object.proposerPriority);
    return obj;
  },
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || Long.ZERO).toString());
    message.proposerPriority !== undefined &&
      (obj.proposerPriority = (message.proposerPriority || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = Any.fromPartial(object.pubKey);
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = Long.fromValue(object.votingPower);
    }
    if (object.proposerPriority !== undefined && object.proposerPriority !== null) {
      message.proposerPriority = Long.fromValue(object.proposerPriority);
    }
    return message;
  },
};
function createBaseGetBlockByHeightRequest(): GetBlockByHeightRequest {
  return {
    height: Long.ZERO,
  };
}
export const GetBlockByHeightRequest = {
  encode(message: GetBlockByHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockByHeightRequest {
    const obj = createBaseGetBlockByHeightRequest();
    if (isSet(object.height)) obj.height = Long.fromValue(object.height);
    return obj;
  },
  toJSON(message: GetBlockByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetBlockByHeightRequest>, I>>(object: I): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromValue(object.height);
    }
    return message;
  },
};
function createBaseGetBlockByHeightResponse(): GetBlockByHeightResponse {
  return {
    blockId: BlockID.fromPartial({}),
    block: Block1.fromPartial({}),
    sdkBlock: Block2.fromPartial({}),
  };
}
export const GetBlockByHeightResponse = {
  encode(message: GetBlockByHeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== undefined) {
      Block2.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block1.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = Block2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockByHeightResponse {
    const obj = createBaseGetBlockByHeightResponse();
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.block)) obj.block = Block1.fromJSON(object.block);
    if (isSet(object.sdkBlock)) obj.sdkBlock = Block2.fromJSON(object.sdkBlock);
    return obj;
  },
  toJSON(message: GetBlockByHeightResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block1.toJSON(message.block) : undefined);
    message.sdkBlock !== undefined &&
      (obj.sdkBlock = message.sdkBlock ? Block2.toJSON(message.sdkBlock) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetBlockByHeightResponse>, I>>(
    object: I,
  ): GetBlockByHeightResponse {
    const message = createBaseGetBlockByHeightResponse();
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block1.fromPartial(object.block);
    }
    if (object.sdkBlock !== undefined && object.sdkBlock !== null) {
      message.sdkBlock = Block2.fromPartial(object.sdkBlock);
    }
    return message;
  },
};
function createBaseGetLatestBlockRequest(): GetLatestBlockRequest {
  return {};
}
export const GetLatestBlockRequest = {
  encode(_: GetLatestBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetLatestBlockRequest {
    const obj = createBaseGetLatestBlockRequest();
    return obj;
  },
  toJSON(_: GetLatestBlockRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetLatestBlockRequest>, I>>(_: I): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
};
function createBaseGetLatestBlockResponse(): GetLatestBlockResponse {
  return {
    blockId: BlockID.fromPartial({}),
    block: Block1.fromPartial({}),
    sdkBlock: Block2.fromPartial({}),
  };
}
export const GetLatestBlockResponse = {
  encode(message: GetLatestBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block1.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdkBlock !== undefined) {
      Block2.encode(message.sdkBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block1.decode(reader, reader.uint32());
          break;
        case 3:
          message.sdkBlock = Block2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestBlockResponse {
    const obj = createBaseGetLatestBlockResponse();
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.block)) obj.block = Block1.fromJSON(object.block);
    if (isSet(object.sdkBlock)) obj.sdkBlock = Block2.fromJSON(object.sdkBlock);
    return obj;
  },
  toJSON(message: GetLatestBlockResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined &&
      (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block1.toJSON(message.block) : undefined);
    message.sdkBlock !== undefined &&
      (obj.sdkBlock = message.sdkBlock ? Block2.toJSON(message.sdkBlock) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetLatestBlockResponse>, I>>(object: I): GetLatestBlockResponse {
    const message = createBaseGetLatestBlockResponse();
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block1.fromPartial(object.block);
    }
    if (object.sdkBlock !== undefined && object.sdkBlock !== null) {
      message.sdkBlock = Block2.fromPartial(object.sdkBlock);
    }
    return message;
  },
};
function createBaseGetSyncingRequest(): GetSyncingRequest {
  return {};
}
export const GetSyncingRequest = {
  encode(_: GetSyncingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetSyncingRequest {
    const obj = createBaseGetSyncingRequest();
    return obj;
  },
  toJSON(_: GetSyncingRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetSyncingRequest>, I>>(_: I): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  },
};
function createBaseGetSyncingResponse(): GetSyncingResponse {
  return {
    syncing: false,
  };
}
export const GetSyncingResponse = {
  encode(message: GetSyncingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetSyncingResponse {
    const obj = createBaseGetSyncingResponse();
    if (isSet(object.syncing)) obj.syncing = Boolean(object.syncing);
    return obj;
  },
  toJSON(message: GetSyncingResponse): unknown {
    const obj: any = {};
    message.syncing !== undefined && (obj.syncing = message.syncing);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetSyncingResponse>, I>>(object: I): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    message.syncing = object.syncing ?? false;
    return message;
  },
};
function createBaseGetNodeInfoRequest(): GetNodeInfoRequest {
  return {};
}
export const GetNodeInfoRequest = {
  encode(_: GetNodeInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetNodeInfoRequest {
    const obj = createBaseGetNodeInfoRequest();
    return obj;
  },
  toJSON(_: GetNodeInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetNodeInfoRequest>, I>>(_: I): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
};
function createBaseGetNodeInfoResponse(): GetNodeInfoResponse {
  return {
    defaultNodeInfo: DefaultNodeInfo.fromPartial({}),
    applicationVersion: VersionInfo.fromPartial({}),
  };
}
export const GetNodeInfoResponse = {
  encode(message: GetNodeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultNodeInfo !== undefined) {
      DefaultNodeInfo.encode(message.defaultNodeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.applicationVersion !== undefined) {
      VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultNodeInfo = DefaultNodeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetNodeInfoResponse {
    const obj = createBaseGetNodeInfoResponse();
    if (isSet(object.defaultNodeInfo)) obj.defaultNodeInfo = DefaultNodeInfo.fromJSON(object.defaultNodeInfo);
    if (isSet(object.applicationVersion))
      obj.applicationVersion = VersionInfo.fromJSON(object.applicationVersion);
    return obj;
  },
  toJSON(message: GetNodeInfoResponse): unknown {
    const obj: any = {};
    message.defaultNodeInfo !== undefined &&
      (obj.defaultNodeInfo = message.defaultNodeInfo
        ? DefaultNodeInfo.toJSON(message.defaultNodeInfo)
        : undefined);
    message.applicationVersion !== undefined &&
      (obj.applicationVersion = message.applicationVersion
        ? VersionInfo.toJSON(message.applicationVersion)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetNodeInfoResponse>, I>>(object: I): GetNodeInfoResponse {
    const message = createBaseGetNodeInfoResponse();
    if (object.defaultNodeInfo !== undefined && object.defaultNodeInfo !== null) {
      message.defaultNodeInfo = DefaultNodeInfo.fromPartial(object.defaultNodeInfo);
    }
    if (object.applicationVersion !== undefined && object.applicationVersion !== null) {
      message.applicationVersion = VersionInfo.fromPartial(object.applicationVersion);
    }
    return message;
  },
};
function createBaseVersionInfo(): VersionInfo {
  return {
    name: "",
    appName: "",
    version: "",
    gitCommit: "",
    buildTags: "",
    goVersion: "",
    buildDeps: [],
    cosmosSdkVersion: "",
  };
}
export const VersionInfo = {
  encode(message: VersionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }
    for (const v of message.buildDeps) {
      Module.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VersionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.gitCommit = reader.string();
          break;
        case 5:
          message.buildTags = reader.string();
          break;
        case 6:
          message.goVersion = reader.string();
          break;
        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32()));
          break;
        case 8:
          message.cosmosSdkVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VersionInfo {
    const obj = createBaseVersionInfo();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.appName)) obj.appName = String(object.appName);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.gitCommit)) obj.gitCommit = String(object.gitCommit);
    if (isSet(object.buildTags)) obj.buildTags = String(object.buildTags);
    if (isSet(object.goVersion)) obj.goVersion = String(object.goVersion);
    if (Array.isArray(object?.buildDeps))
      obj.buildDeps = object.buildDeps.map((e: any) => Module.fromJSON(e));
    if (isSet(object.cosmosSdkVersion)) obj.cosmosSdkVersion = String(object.cosmosSdkVersion);
    return obj;
  },
  toJSON(message: VersionInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.appName !== undefined && (obj.appName = message.appName);
    message.version !== undefined && (obj.version = message.version);
    message.gitCommit !== undefined && (obj.gitCommit = message.gitCommit);
    message.buildTags !== undefined && (obj.buildTags = message.buildTags);
    message.goVersion !== undefined && (obj.goVersion = message.goVersion);
    if (message.buildDeps) {
      obj.buildDeps = message.buildDeps.map((e) => (e ? Module.toJSON(e) : undefined));
    } else {
      obj.buildDeps = [];
    }
    message.cosmosSdkVersion !== undefined && (obj.cosmosSdkVersion = message.cosmosSdkVersion);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VersionInfo>, I>>(object: I): VersionInfo {
    const message = createBaseVersionInfo();
    message.name = object.name ?? "";
    message.appName = object.appName ?? "";
    message.version = object.version ?? "";
    message.gitCommit = object.gitCommit ?? "";
    message.buildTags = object.buildTags ?? "";
    message.goVersion = object.goVersion ?? "";
    message.buildDeps = object.buildDeps?.map((e) => Module.fromPartial(e)) || [];
    message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
    return message;
  },
};
function createBaseModule(): Module {
  return {
    path: "",
    version: "",
    sum: "",
  };
}
export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    const obj = createBaseModule();
    if (isSet(object.path)) obj.path = String(object.path);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.sum)) obj.sum = String(object.sum);
    return obj;
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.version !== undefined && (obj.version = message.version);
    message.sum !== undefined && (obj.sum = message.sum);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    message.path = object.path ?? "";
    message.version = object.version ?? "";
    message.sum = object.sum ?? "";
    return message;
  },
};
function createBaseABCIQueryRequest(): ABCIQueryRequest {
  return {
    data: new Uint8Array(),
    path: "",
    height: Long.ZERO,
    prove: false,
  };
}
export const ABCIQueryRequest = {
  encode(message: ABCIQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64() as Long;
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ABCIQueryRequest {
    const obj = createBaseABCIQueryRequest();
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.path)) obj.path = String(object.path);
    if (isSet(object.height)) obj.height = Long.fromValue(object.height);
    if (isSet(object.prove)) obj.prove = Boolean(object.prove);
    return obj;
  },
  toJSON(message: ABCIQueryRequest): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.path !== undefined && (obj.path = message.path);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.prove !== undefined && (obj.prove = message.prove);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ABCIQueryRequest>, I>>(object: I): ABCIQueryRequest {
    const message = createBaseABCIQueryRequest();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromValue(object.height);
    }
    message.prove = object.prove ?? false;
    return message;
  },
};
function createBaseABCIQueryResponse(): ABCIQueryResponse {
  return {
    code: 0,
    log: "",
    info: "",
    index: Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proofOps: ProofOps.fromPartial({}),
    height: Long.ZERO,
    codespace: "",
  };
}
export const ABCIQueryResponse = {
  encode(message: ABCIQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64() as Long;
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64() as Long;
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ABCIQueryResponse {
    const obj = createBaseABCIQueryResponse();
    if (isSet(object.code)) obj.code = Number(object.code);
    if (isSet(object.log)) obj.log = String(object.log);
    if (isSet(object.info)) obj.info = String(object.info);
    if (isSet(object.index)) obj.index = Long.fromValue(object.index);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    if (isSet(object.proofOps)) obj.proofOps = ProofOps.fromJSON(object.proofOps);
    if (isSet(object.height)) obj.height = Long.fromValue(object.height);
    if (isSet(object.codespace)) obj.codespace = String(object.codespace);
    return obj;
  },
  toJSON(message: ABCIQueryResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.index !== undefined && (obj.index = (message.index || Long.ZERO).toString());
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.proofOps !== undefined &&
      (obj.proofOps = message.proofOps ? ProofOps.toJSON(message.proofOps) : undefined);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ABCIQueryResponse>, I>>(object: I): ABCIQueryResponse {
    const message = createBaseABCIQueryResponse();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    if (object.index !== undefined && object.index !== null) {
      message.index = Long.fromValue(object.index);
    }
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    if (object.proofOps !== undefined && object.proofOps !== null) {
      message.proofOps = ProofOps.fromPartial(object.proofOps);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromValue(object.height);
    }
    message.codespace = object.codespace ?? "";
    return message;
  },
};
function createBaseProofOp(): ProofOp {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array(),
  };
}
export const ProofOp = {
  encode(message: ProofOp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
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
    const obj = createBaseProofOp();
    if (isSet(object.type)) obj.type = String(object.type);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: ProofOp): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProofOp>, I>>(object: I): ProofOp {
    const message = createBaseProofOp();
    message.type = object.type ?? "";
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
function createBaseProofOps(): ProofOps {
  return {
    ops: [],
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
    const obj = createBaseProofOps();
    if (Array.isArray(object?.ops)) obj.ops = object.ops.map((e: any) => ProofOp.fromJSON(e));
    return obj;
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
/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
  /** GetNodeInfo queries the current node info. */
  GetNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
  /** GetSyncing queries node syncing. */
  GetSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse>;
  /** GetLatestBlock returns the latest block. */
  GetLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
  /** GetBlockByHeight queries block for given height. */
  GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
  /** GetLatestValidatorSet queries latest validator-set. */
  GetLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
  /** GetValidatorSetByHeight queries validator-set at a given height. */
  GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
  /**
   * ABCIQuery defines a query handler that supports ABCI queries directly to the
   * application, bypassing Tendermint completely. The ABCI query must contain
   * a valid and supported path, including app, custom, p2p, and store.
   *
   * Since: cosmos-sdk 0.46
   */
  ABCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetNodeInfo = this.GetNodeInfo.bind(this);
    this.GetSyncing = this.GetSyncing.bind(this);
    this.GetLatestBlock = this.GetLatestBlock.bind(this);
    this.GetBlockByHeight = this.GetBlockByHeight.bind(this);
    this.GetLatestValidatorSet = this.GetLatestValidatorSet.bind(this);
    this.GetValidatorSetByHeight = this.GetValidatorSetByHeight.bind(this);
    this.ABCIQuery = this.ABCIQuery.bind(this);
  }
  GetNodeInfo(request: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponse> {
    const data = GetNodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
    return promise.then((data) => GetNodeInfoResponse.decode(new _m0.Reader(data)));
  }
  GetSyncing(request: GetSyncingRequest = {}): Promise<GetSyncingResponse> {
    const data = GetSyncingRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
    return promise.then((data) => GetSyncingResponse.decode(new _m0.Reader(data)));
  }
  GetLatestBlock(request: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponse> {
    const data = GetLatestBlockRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
    return promise.then((data) => GetLatestBlockResponse.decode(new _m0.Reader(data)));
  }
  GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse> {
    const data = GetBlockByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
    return promise.then((data) => GetBlockByHeightResponse.decode(new _m0.Reader(data)));
  }
  GetLatestValidatorSet(
    request: GetLatestValidatorSetRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<GetLatestValidatorSetResponse> {
    const data = GetLatestValidatorSetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
    return promise.then((data) => GetLatestValidatorSetResponse.decode(new _m0.Reader(data)));
  }
  GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse> {
    const data = GetValidatorSetByHeightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetValidatorSetByHeight",
      data,
    );
    return promise.then((data) => GetValidatorSetByHeightResponse.decode(new _m0.Reader(data)));
  }
  ABCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse> {
    const data = ABCIQueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "ABCIQuery", data);
    return promise.then((data) => ABCIQueryResponse.decode(new _m0.Reader(data)));
  }
}
