/* eslint-disable */
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, IdentifiedConnection } from "./connection";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, Long, Rpc } from "../../../../helpers";
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

function createBaseQueryConnectionRequest(): QueryConnectionRequest {
  return {
    connectionId: "",
  };
}

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
    const message = createBaseQueryConnectionRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryConnectionRequest>, I>>(object: I): QueryConnectionRequest {
    const message = createBaseQueryConnectionRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseQueryConnectionResponse(): QueryConnectionResponse {
  return {
    connection: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined,
  };
}

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
    const message = createBaseQueryConnectionResponse();

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

  fromPartial<I extends Exact<DeepPartial<QueryConnectionResponse>, I>>(object: I): QueryConnectionResponse {
    const message = createBaseQueryConnectionResponse();
    message.connection =
      object.connection !== undefined && object.connection !== null
        ? ConnectionEnd.fromPartial(object.connection)
        : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

function createBaseQueryConnectionsRequest(): QueryConnectionsRequest {
  return {
    pagination: undefined,
  };
}

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
    const message = createBaseQueryConnectionsRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryConnectionsRequest>, I>>(object: I): QueryConnectionsRequest {
    const message = createBaseQueryConnectionsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryConnectionsResponse(): QueryConnectionsResponse {
  return {
    connections: [],
    pagination: undefined,
    height: undefined,
  };
}

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
    const message = createBaseQueryConnectionsResponse();

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

  fromPartial<I extends Exact<DeepPartial<QueryConnectionsResponse>, I>>(
    object: I,
  ): QueryConnectionsResponse {
    const message = createBaseQueryConnectionsResponse();
    message.connections = object.connections?.map((e) => IdentifiedConnection.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    message.height =
      object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
};

function createBaseQueryClientConnectionsRequest(): QueryClientConnectionsRequest {
  return {
    clientId: "",
  };
}

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
    const message = createBaseQueryClientConnectionsRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryClientConnectionsRequest>, I>>(
    object: I,
  ): QueryClientConnectionsRequest {
    const message = createBaseQueryClientConnectionsRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
};

function createBaseQueryClientConnectionsResponse(): QueryClientConnectionsResponse {
  return {
    connectionPaths: [],
    proof: new Uint8Array(),
    proofHeight: undefined,
  };
}

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
    const message = createBaseQueryClientConnectionsResponse();

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

  fromPartial<I extends Exact<DeepPartial<QueryClientConnectionsResponse>, I>>(
    object: I,
  ): QueryClientConnectionsResponse {
    const message = createBaseQueryClientConnectionsResponse();
    message.connectionPaths = object.connectionPaths?.map((e) => e) || [];
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

function createBaseQueryConnectionClientStateRequest(): QueryConnectionClientStateRequest {
  return {
    connectionId: "",
  };
}

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
    const message = createBaseQueryConnectionClientStateRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryConnectionClientStateRequest>, I>>(
    object: I,
  ): QueryConnectionClientStateRequest {
    const message = createBaseQueryConnectionClientStateRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseQueryConnectionClientStateResponse(): QueryConnectionClientStateResponse {
  return {
    identifiedClientState: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined,
  };
}

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
    const message = createBaseQueryConnectionClientStateResponse();

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

  fromPartial<I extends Exact<DeepPartial<QueryConnectionClientStateResponse>, I>>(
    object: I,
  ): QueryConnectionClientStateResponse {
    const message = createBaseQueryConnectionClientStateResponse();
    message.identifiedClientState =
      object.identifiedClientState !== undefined && object.identifiedClientState !== null
        ? IdentifiedClientState.fromPartial(object.identifiedClientState)
        : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};

function createBaseQueryConnectionConsensusStateRequest(): QueryConnectionConsensusStateRequest {
  return {
    connectionId: "",
    revisionNumber: Long.UZERO,
    revisionHeight: Long.UZERO,
  };
}

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
    const message = createBaseQueryConnectionConsensusStateRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryConnectionConsensusStateRequest>, I>>(
    object: I,
  ): QueryConnectionConsensusStateRequest {
    const message = createBaseQueryConnectionConsensusStateRequest();
    message.connectionId = object.connectionId ?? "";
    message.revisionNumber =
      object.revisionNumber !== undefined && object.revisionNumber !== null
        ? Long.fromValue(object.revisionNumber)
        : Long.UZERO;
    message.revisionHeight =
      object.revisionHeight !== undefined && object.revisionHeight !== null
        ? Long.fromValue(object.revisionHeight)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryConnectionConsensusStateResponse(): QueryConnectionConsensusStateResponse {
  return {
    consensusState: undefined,
    clientId: "",
    proof: new Uint8Array(),
    proofHeight: undefined,
  };
}

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
    const message = createBaseQueryConnectionConsensusStateResponse();

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

  fromPartial<I extends Exact<DeepPartial<QueryConnectionConsensusStateResponse>, I>>(
    object: I,
  ): QueryConnectionConsensusStateResponse {
    const message = createBaseQueryConnectionConsensusStateResponse();
    message.consensusState =
      object.consensusState !== undefined && object.consensusState !== null
        ? Any.fromPartial(object.consensusState)
        : undefined;
    message.clientId = object.clientId ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    return message;
  },
};
/** Query provides defines the gRPC querier service */

export interface Query {
  /** Connection queries an IBC connection end. */
  Connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
  /** Connections queries all the IBC connections of a chain. */

  Connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
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

  Connections(
    request: QueryConnectionsRequest = {
      pagination: undefined,
    },
  ): Promise<QueryConnectionsResponse> {
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
