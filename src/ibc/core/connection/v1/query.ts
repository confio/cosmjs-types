/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ConnectionEnd, IdentifiedConnection } from "../../../../ibc/core/connection/v1/connection";
import { Height, IdentifiedClientState } from "../../../../ibc/core/client/v1/client";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";

export const protobufPackage = "ibc.core.connection.v1";

/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequest {
  /** connection unique identifier */
  connectionId: string;
}

/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponse {
  /** connection associated with the request identifier */
  connection?: ConnectionEnd;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
  pagination?: PageRequest;
}

/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
  /** list of stored connections of the chain. */
  connections: IdentifiedConnection[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height?: Height;
}

/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequest {
  /** client identifier associated with a connection */
  clientId: string;
}

/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponse {
  /** slice of all the connection paths associated with a client. */
  connectionPaths: string[];
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was generated */
  proofHeight?: Height;
}

/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequest {
  /** connection identifier */
  connectionId: string;
}

/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponse {
  /** client state associated with the channel */
  identifiedClientState?: IdentifiedClientState;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequest {
  /** connection identifier */
  connectionId: string;
  revisionNumber: Long;
  revisionHeight: Long;
}

/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponse {
  /** consensus state associated with the channel */
  consensusState?: Any;
  /** client ID associated with the consensus state */
  clientId: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}

const baseQueryConnectionRequest: object = { connectionId: "" };

export const QueryConnectionRequest = {
  encode(message: QueryConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConnectionRequest } as QueryConnectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConnectionRequest {
    const message = { ...baseQueryConnectionRequest } as QueryConnectionRequest;
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = "";
    }
    return message;
  },

  toJSON(message: QueryConnectionRequest): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConnectionRequest>): QueryConnectionRequest {
    const message = { ...baseQueryConnectionRequest } as QueryConnectionRequest;
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

const baseQueryConnectionResponse: object = {};

export const QueryConnectionResponse = {
  encode(message: QueryConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConnectionResponse } as QueryConnectionResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = ConnectionEnd.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConnectionResponse {
    const message = { ...baseQueryConnectionResponse } as QueryConnectionResponse;
    message.proof = new Uint8Array();
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = ConnectionEnd.fromJSON(object.connection);
    } else {
      message.connection = undefined;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },

  toJSON(message: QueryConnectionResponse): unknown {
    const obj: any = {};
    message.connection !== undefined &&
      (obj.connection = message.connection ? ConnectionEnd.toJSON(message.connection) : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConnectionResponse>): QueryConnectionResponse {
    const message = { ...baseQueryConnectionResponse } as QueryConnectionResponse;
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = ConnectionEnd.fromPartial(object.connection);
    } else {
      message.connection = undefined;
    }
    message.proof = object.proof ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },
};

const baseQueryConnectionsRequest: object = {};

export const QueryConnectionsRequest = {
  encode(message: QueryConnectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConnectionsRequest } as QueryConnectionsRequest;
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

  fromJSON(object: any): QueryConnectionsRequest {
    const message = { ...baseQueryConnectionsRequest } as QueryConnectionsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryConnectionsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConnectionsRequest>): QueryConnectionsRequest {
    const message = { ...baseQueryConnectionsRequest } as QueryConnectionsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryConnectionsResponse: object = {};

export const QueryConnectionsResponse = {
  encode(message: QueryConnectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connections) {
      IdentifiedConnection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConnectionsResponse } as QueryConnectionsResponse;
    message.connections = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConnectionsResponse {
    const message = { ...baseQueryConnectionsResponse } as QueryConnectionsResponse;
    message.connections = [];
    if (object.connections !== undefined && object.connections !== null) {
      for (const e of object.connections) {
        message.connections.push(IdentifiedConnection.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromJSON(object.height);
    } else {
      message.height = undefined;
    }
    return message;
  },

  toJSON(message: QueryConnectionsResponse): unknown {
    const obj: any = {};
    if (message.connections) {
      obj.connections = message.connections.map((e) => (e ? IdentifiedConnection.toJSON(e) : undefined));
    } else {
      obj.connections = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConnectionsResponse>): QueryConnectionsResponse {
    const message = { ...baseQueryConnectionsResponse } as QueryConnectionsResponse;
    message.connections = [];
    if (object.connections !== undefined && object.connections !== null) {
      for (const e of object.connections) {
        message.connections.push(IdentifiedConnection.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromPartial(object.height);
    } else {
      message.height = undefined;
    }
    return message;
  },
};

const baseQueryClientConnectionsRequest: object = { clientId: "" };

export const QueryClientConnectionsRequest = {
  encode(message: QueryClientConnectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClientConnectionsRequest } as QueryClientConnectionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientConnectionsRequest {
    const message = { ...baseQueryClientConnectionsRequest } as QueryClientConnectionsRequest;
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    return message;
  },

  toJSON(message: QueryClientConnectionsRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClientConnectionsRequest>): QueryClientConnectionsRequest {
    const message = { ...baseQueryClientConnectionsRequest } as QueryClientConnectionsRequest;
    message.clientId = object.clientId ?? "";
    return message;
  },
};

const baseQueryClientConnectionsResponse: object = { connectionPaths: "" };

export const QueryClientConnectionsResponse = {
  encode(message: QueryClientConnectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connectionPaths) {
      writer.uint32(10).string(v!);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryClientConnectionsResponse } as QueryClientConnectionsResponse;
    message.connectionPaths = [];
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionPaths.push(reader.string());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClientConnectionsResponse {
    const message = { ...baseQueryClientConnectionsResponse } as QueryClientConnectionsResponse;
    message.connectionPaths = [];
    message.proof = new Uint8Array();
    if (object.connectionPaths !== undefined && object.connectionPaths !== null) {
      for (const e of object.connectionPaths) {
        message.connectionPaths.push(String(e));
      }
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },

  toJSON(message: QueryClientConnectionsResponse): unknown {
    const obj: any = {};
    if (message.connectionPaths) {
      obj.connectionPaths = message.connectionPaths.map((e) => e);
    } else {
      obj.connectionPaths = [];
    }
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryClientConnectionsResponse>): QueryClientConnectionsResponse {
    const message = { ...baseQueryClientConnectionsResponse } as QueryClientConnectionsResponse;
    message.connectionPaths = [];
    if (object.connectionPaths !== undefined && object.connectionPaths !== null) {
      for (const e of object.connectionPaths) {
        message.connectionPaths.push(e);
      }
    }
    message.proof = object.proof ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },
};

const baseQueryConnectionClientStateRequest: object = { connectionId: "" };

export const QueryConnectionClientStateRequest = {
  encode(message: QueryConnectionClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConnectionClientStateRequest } as QueryConnectionClientStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConnectionClientStateRequest {
    const message = { ...baseQueryConnectionClientStateRequest } as QueryConnectionClientStateRequest;
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = "";
    }
    return message;
  },

  toJSON(message: QueryConnectionClientStateRequest): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConnectionClientStateRequest>): QueryConnectionClientStateRequest {
    const message = { ...baseQueryConnectionClientStateRequest } as QueryConnectionClientStateRequest;
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

const baseQueryConnectionClientStateResponse: object = {};

export const QueryConnectionClientStateResponse = {
  encode(message: QueryConnectionClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifiedClientState !== undefined) {
      IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConnectionClientStateResponse } as QueryConnectionClientStateResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifiedClientState = IdentifiedClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConnectionClientStateResponse {
    const message = { ...baseQueryConnectionClientStateResponse } as QueryConnectionClientStateResponse;
    message.proof = new Uint8Array();
    if (object.identifiedClientState !== undefined && object.identifiedClientState !== null) {
      message.identifiedClientState = IdentifiedClientState.fromJSON(object.identifiedClientState);
    } else {
      message.identifiedClientState = undefined;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },

  toJSON(message: QueryConnectionClientStateResponse): unknown {
    const obj: any = {};
    message.identifiedClientState !== undefined &&
      (obj.identifiedClientState = message.identifiedClientState
        ? IdentifiedClientState.toJSON(message.identifiedClientState)
        : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryConnectionClientStateResponse>): QueryConnectionClientStateResponse {
    const message = { ...baseQueryConnectionClientStateResponse } as QueryConnectionClientStateResponse;
    if (object.identifiedClientState !== undefined && object.identifiedClientState !== null) {
      message.identifiedClientState = IdentifiedClientState.fromPartial(object.identifiedClientState);
    } else {
      message.identifiedClientState = undefined;
    }
    message.proof = object.proof ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },
};

const baseQueryConnectionConsensusStateRequest: object = {
  connectionId: "",
  revisionNumber: Long.UZERO,
  revisionHeight: Long.UZERO,
};

export const QueryConnectionConsensusStateRequest = {
  encode(
    message: QueryConnectionConsensusStateRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (!message.revisionNumber.isZero()) {
      writer.uint32(16).uint64(message.revisionNumber);
    }
    if (!message.revisionHeight.isZero()) {
      writer.uint32(24).uint64(message.revisionHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConnectionConsensusStateRequest } as QueryConnectionConsensusStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.revisionNumber = reader.uint64() as Long;
          break;
        case 3:
          message.revisionHeight = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConnectionConsensusStateRequest {
    const message = { ...baseQueryConnectionConsensusStateRequest } as QueryConnectionConsensusStateRequest;
    if (object.connectionId !== undefined && object.connectionId !== null) {
      message.connectionId = String(object.connectionId);
    } else {
      message.connectionId = "";
    }
    if (object.revisionNumber !== undefined && object.revisionNumber !== null) {
      message.revisionNumber = Long.fromString(object.revisionNumber);
    } else {
      message.revisionNumber = Long.UZERO;
    }
    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = Long.fromString(object.revisionHeight);
    } else {
      message.revisionHeight = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryConnectionConsensusStateRequest): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.revisionNumber !== undefined &&
      (obj.revisionNumber = (message.revisionNumber || Long.UZERO).toString());
    message.revisionHeight !== undefined &&
      (obj.revisionHeight = (message.revisionHeight || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryConnectionConsensusStateRequest>,
  ): QueryConnectionConsensusStateRequest {
    const message = { ...baseQueryConnectionConsensusStateRequest } as QueryConnectionConsensusStateRequest;
    message.connectionId = object.connectionId ?? "";
    if (object.revisionNumber !== undefined && object.revisionNumber !== null) {
      message.revisionNumber = object.revisionNumber as Long;
    } else {
      message.revisionNumber = Long.UZERO;
    }
    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = object.revisionHeight as Long;
    } else {
      message.revisionHeight = Long.UZERO;
    }
    return message;
  },
};

const baseQueryConnectionConsensusStateResponse: object = { clientId: "" };

export const QueryConnectionConsensusStateResponse = {
  encode(
    message: QueryConnectionConsensusStateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryConnectionConsensusStateResponse } as QueryConnectionConsensusStateResponse;
    message.proof = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryConnectionConsensusStateResponse {
    const message = { ...baseQueryConnectionConsensusStateResponse } as QueryConnectionConsensusStateResponse;
    message.proof = new Uint8Array();
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromJSON(object.consensusState);
    } else {
      message.consensusState = undefined;
    }
    if (object.clientId !== undefined && object.clientId !== null) {
      message.clientId = String(object.clientId);
    } else {
      message.clientId = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromJSON(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },

  toJSON(message: QueryConnectionConsensusStateResponse): unknown {
    const obj: any = {};
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryConnectionConsensusStateResponse>,
  ): QueryConnectionConsensusStateResponse {
    const message = { ...baseQueryConnectionConsensusStateResponse } as QueryConnectionConsensusStateResponse;
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    } else {
      message.consensusState = undefined;
    }
    message.clientId = object.clientId ?? "";
    message.proof = object.proof ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    } else {
      message.proofHeight = undefined;
    }
    return message;
  },
};

/** Query provides defines the gRPC querier service */
export interface Query {
  /** Connection queries an IBC connection end. */
  Connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
  /** Connections queries all the IBC connections of a chain. */
  Connections(request: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
  /**
   * ClientConnections queries the connection paths associated with a client
   * state.
   */
  ClientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
  /**
   * ConnectionClientState queries the client state associated with the
   * connection.
   */
  ConnectionClientState(
    request: QueryConnectionClientStateRequest,
  ): Promise<QueryConnectionClientStateResponse>;
  /**
   * ConnectionConsensusState queries the consensus state associated with the
   * connection.
   */
  ConnectionConsensusState(
    request: QueryConnectionConsensusStateRequest,
  ): Promise<QueryConnectionConsensusStateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Connection = this.Connection.bind(this);
    this.Connections = this.Connections.bind(this);
    this.ClientConnections = this.ClientConnections.bind(this);
    this.ConnectionClientState = this.ConnectionClientState.bind(this);
    this.ConnectionConsensusState = this.ConnectionConsensusState.bind(this);
  }
  Connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse> {
    const data = QueryConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
    return promise.then((data) => QueryConnectionResponse.decode(new _m0.Reader(data)));
  }

  Connections(request: QueryConnectionsRequest): Promise<QueryConnectionsResponse> {
    const data = QueryConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
    return promise.then((data) => QueryConnectionsResponse.decode(new _m0.Reader(data)));
  }

  ClientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
    const data = QueryClientConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
    return promise.then((data) => QueryClientConnectionsResponse.decode(new _m0.Reader(data)));
  }

  ConnectionClientState(
    request: QueryConnectionClientStateRequest,
  ): Promise<QueryConnectionClientStateResponse> {
    const data = QueryConnectionClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
    return promise.then((data) => QueryConnectionClientStateResponse.decode(new _m0.Reader(data)));
  }

  ConnectionConsensusState(
    request: QueryConnectionConsensusStateRequest,
  ): Promise<QueryConnectionConsensusStateResponse> {
    const data = QueryConnectionConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
    return promise.then((data) => QueryConnectionConsensusStateResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
