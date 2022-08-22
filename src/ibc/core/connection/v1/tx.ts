import { Counterparty, Version } from "./connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export const protobufPackage = "ibc.core.connection.v1";

/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInit {
  clientId?: string;
  counterparty?: Counterparty;
  version?: Version;
  delayPeriod?: Long;
  signer?: string;
}

/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponse {}

/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTry {
  clientId?: string;

  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the connection identifier of the previous connection in state INIT
   */
  previousConnectionId?: string;
  clientState?: Any;
  counterparty?: Counterparty;
  delayPeriod?: Long;
  counterpartyVersions?: Version[];
  proofHeight?: Height;

  /**
   * proof of the initialization the connection on Chain A: `UNITIALIZED ->
   * INIT`
   */
  proofInit?: Uint8Array;

  /** proof of client state included in message */
  proofClient?: Uint8Array;

  /** proof of client consensus state */
  proofConsensus?: Uint8Array;
  consensusHeight?: Height;
  signer?: string;
}

/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponse {}

/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAck {
  connectionId?: string;
  counterpartyConnectionId?: string;
  version?: Version;
  clientState?: Any;
  proofHeight?: Height;

  /**
   * proof of the initialization the connection on Chain B: `UNITIALIZED ->
   * TRYOPEN`
   */
  proofTry?: Uint8Array;

  /** proof of client state included in message */
  proofClient?: Uint8Array;

  /** proof of client consensus state */
  proofConsensus?: Uint8Array;
  consensusHeight?: Height;
  signer?: string;
}

/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponse {}

/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirm {
  connectionId?: string;

  /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
  proofAck?: Uint8Array;
  proofHeight?: Height;
  signer?: string;
}

/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponse {}

function createBaseMsgConnectionOpenInit(): MsgConnectionOpenInit {
  return {
    clientId: undefined,
    counterparty: undefined,
    version: undefined,
    delayPeriod: undefined,
    signer: undefined,
  };
}

export const MsgConnectionOpenInit = {
  encode(message: MsgConnectionOpenInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== undefined) {
      writer.uint32(10).string(message.clientId);
    }

    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }

    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }

    if (message.delayPeriod !== undefined) {
      writer.uint32(32).uint64(message.delayPeriod);
    }

    if (message.signer !== undefined) {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;

        case 4:
          message.delayPeriod = reader.uint64() as Long;
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgConnectionOpenInit {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : undefined,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      delayPeriod: isSet(object.delayPeriod) ? Long.fromString(object.delayPeriod) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : undefined,
    };
  },

  toJSON(message: MsgConnectionOpenInit): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.version !== undefined &&
      (obj.version = message.version ? Version.toJSON(message.version) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || undefined).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenInit>, I>>(object: I): MsgConnectionOpenInit {
    const message = createBaseMsgConnectionOpenInit();
    message.clientId = object.clientId ?? undefined;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromPartial(object.counterparty)
        : undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? Version.fromPartial(object.version)
        : undefined;
    message.delayPeriod =
      object.delayPeriod !== undefined && object.delayPeriod !== null
        ? Long.fromValue(object.delayPeriod)
        : undefined;
    message.signer = object.signer ?? undefined;
    return message;
  },
};

function createBaseMsgConnectionOpenInitResponse(): MsgConnectionOpenInitResponse {
  return {};
}

export const MsgConnectionOpenInitResponse = {
  encode(_: MsgConnectionOpenInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInitResponse();

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

  fromJSON(_: any): MsgConnectionOpenInitResponse {
    return {};
  },

  toJSON(_: MsgConnectionOpenInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenInitResponse>, I>>(
    _: I,
  ): MsgConnectionOpenInitResponse {
    const message = createBaseMsgConnectionOpenInitResponse();
    return message;
  },
};

function createBaseMsgConnectionOpenTry(): MsgConnectionOpenTry {
  return {
    clientId: undefined,
    previousConnectionId: undefined,
    clientState: undefined,
    counterparty: undefined,
    delayPeriod: undefined,
    counterpartyVersions: undefined,
    proofHeight: undefined,
    proofInit: undefined,
    proofClient: undefined,
    proofConsensus: undefined,
    consensusHeight: undefined,
    signer: undefined,
  };
}

export const MsgConnectionOpenTry = {
  encode(message: MsgConnectionOpenTry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== undefined) {
      writer.uint32(10).string(message.clientId);
    }

    if (message.previousConnectionId !== undefined) {
      writer.uint32(18).string(message.previousConnectionId);
    }

    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
    }

    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }

    if (message.delayPeriod !== undefined) {
      writer.uint32(40).uint64(message.delayPeriod);
    }

    for (const v of message.counterpartyVersions) {
      Version.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }

    if (message.proofInit !== undefined) {
      writer.uint32(66).bytes(message.proofInit);
    }

    if (message.proofClient !== undefined) {
      writer.uint32(74).bytes(message.proofClient);
    }

    if (message.proofConsensus !== undefined) {
      writer.uint32(82).bytes(message.proofConsensus);
    }

    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
    }

    if (message.signer !== undefined) {
      writer.uint32(98).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;

        case 2:
          message.previousConnectionId = reader.string();
          break;

        case 3:
          message.clientState = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 5:
          message.delayPeriod = reader.uint64() as Long;
          break;

        case 6:
          message.counterpartyVersions.push(Version.decode(reader, reader.uint32()));
          break;

        case 7:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        case 8:
          message.proofInit = reader.bytes();
          break;

        case 9:
          message.proofClient = reader.bytes();
          break;

        case 10:
          message.proofConsensus = reader.bytes();
          break;

        case 11:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;

        case 12:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgConnectionOpenTry {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : undefined,
      previousConnectionId: isSet(object.previousConnectionId)
        ? String(object.previousConnectionId)
        : undefined,
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delayPeriod: isSet(object.delayPeriod) ? Long.fromString(object.delayPeriod) : undefined,
      counterpartyVersions: Array.isArray(object?.counterpartyVersions)
        ? object.counterpartyVersions.map((e: any) => Version.fromJSON(e))
        : [],
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : undefined,
      proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : undefined,
      proofConsensus: isSet(object.proofConsensus) ? bytesFromBase64(object.proofConsensus) : undefined,
      consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : undefined,
    };
  },

  toJSON(message: MsgConnectionOpenTry): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.previousConnectionId !== undefined && (obj.previousConnectionId = message.previousConnectionId);
    message.clientState !== undefined &&
      (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || undefined).toString());

    if (message.counterpartyVersions) {
      obj.counterpartyVersions = message.counterpartyVersions.map((e) => (e ? Version.toJSON(e) : undefined));
    } else {
      obj.counterpartyVersions = [];
    }

    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.proofInit !== undefined &&
      (obj.proofInit = message.proofInit !== undefined ? base64FromBytes(message.proofInit) : undefined);
    message.proofClient !== undefined &&
      (obj.proofClient =
        message.proofClient !== undefined ? base64FromBytes(message.proofClient) : undefined);
    message.proofConsensus !== undefined &&
      (obj.proofConsensus =
        message.proofConsensus !== undefined ? base64FromBytes(message.proofConsensus) : undefined);
    message.consensusHeight !== undefined &&
      (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenTry>, I>>(object: I): MsgConnectionOpenTry {
    const message = createBaseMsgConnectionOpenTry();
    message.clientId = object.clientId ?? undefined;
    message.previousConnectionId = object.previousConnectionId ?? undefined;
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromPartial(object.clientState)
        : undefined;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromPartial(object.counterparty)
        : undefined;
    message.delayPeriod =
      object.delayPeriod !== undefined && object.delayPeriod !== null
        ? Long.fromValue(object.delayPeriod)
        : undefined;
    message.counterpartyVersions = object.counterpartyVersions?.map((e) => Version.fromPartial(e)) || [];
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.proofInit = object.proofInit ?? undefined;
    message.proofClient = object.proofClient ?? undefined;
    message.proofConsensus = object.proofConsensus ?? undefined;
    message.consensusHeight =
      object.consensusHeight !== undefined && object.consensusHeight !== null
        ? Height.fromPartial(object.consensusHeight)
        : undefined;
    message.signer = object.signer ?? undefined;
    return message;
  },
};

function createBaseMsgConnectionOpenTryResponse(): MsgConnectionOpenTryResponse {
  return {};
}

export const MsgConnectionOpenTryResponse = {
  encode(_: MsgConnectionOpenTryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTryResponse();

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

  fromJSON(_: any): MsgConnectionOpenTryResponse {
    return {};
  },

  toJSON(_: MsgConnectionOpenTryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenTryResponse>, I>>(
    _: I,
  ): MsgConnectionOpenTryResponse {
    const message = createBaseMsgConnectionOpenTryResponse();
    return message;
  },
};

function createBaseMsgConnectionOpenAck(): MsgConnectionOpenAck {
  return {
    connectionId: undefined,
    counterpartyConnectionId: undefined,
    version: undefined,
    clientState: undefined,
    proofHeight: undefined,
    proofTry: undefined,
    proofClient: undefined,
    proofConsensus: undefined,
    consensusHeight: undefined,
    signer: undefined,
  };
}

export const MsgConnectionOpenAck = {
  encode(message: MsgConnectionOpenAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== undefined) {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.counterpartyConnectionId !== undefined) {
      writer.uint32(18).string(message.counterpartyConnectionId);
    }

    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }

    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }

    if (message.proofTry !== undefined) {
      writer.uint32(50).bytes(message.proofTry);
    }

    if (message.proofClient !== undefined) {
      writer.uint32(58).bytes(message.proofClient);
    }

    if (message.proofConsensus !== undefined) {
      writer.uint32(66).bytes(message.proofConsensus);
    }

    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
    }

    if (message.signer !== undefined) {
      writer.uint32(82).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAck();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.counterpartyConnectionId = reader.string();
          break;

        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;

        case 4:
          message.clientState = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        case 6:
          message.proofTry = reader.bytes();
          break;

        case 7:
          message.proofClient = reader.bytes();
          break;

        case 8:
          message.proofConsensus = reader.bytes();
          break;

        case 9:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;

        case 10:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgConnectionOpenAck {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : undefined,
      counterpartyConnectionId: isSet(object.counterpartyConnectionId)
        ? String(object.counterpartyConnectionId)
        : undefined,
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : undefined,
      proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : undefined,
      proofConsensus: isSet(object.proofConsensus) ? bytesFromBase64(object.proofConsensus) : undefined,
      consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : undefined,
    };
  },

  toJSON(message: MsgConnectionOpenAck): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.counterpartyConnectionId !== undefined &&
      (obj.counterpartyConnectionId = message.counterpartyConnectionId);
    message.version !== undefined &&
      (obj.version = message.version ? Version.toJSON(message.version) : undefined);
    message.clientState !== undefined &&
      (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.proofTry !== undefined &&
      (obj.proofTry = message.proofTry !== undefined ? base64FromBytes(message.proofTry) : undefined);
    message.proofClient !== undefined &&
      (obj.proofClient =
        message.proofClient !== undefined ? base64FromBytes(message.proofClient) : undefined);
    message.proofConsensus !== undefined &&
      (obj.proofConsensus =
        message.proofConsensus !== undefined ? base64FromBytes(message.proofConsensus) : undefined);
    message.consensusHeight !== undefined &&
      (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenAck>, I>>(object: I): MsgConnectionOpenAck {
    const message = createBaseMsgConnectionOpenAck();
    message.connectionId = object.connectionId ?? undefined;
    message.counterpartyConnectionId = object.counterpartyConnectionId ?? undefined;
    message.version =
      object.version !== undefined && object.version !== null
        ? Version.fromPartial(object.version)
        : undefined;
    message.clientState =
      object.clientState !== undefined && object.clientState !== null
        ? Any.fromPartial(object.clientState)
        : undefined;
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.proofTry = object.proofTry ?? undefined;
    message.proofClient = object.proofClient ?? undefined;
    message.proofConsensus = object.proofConsensus ?? undefined;
    message.consensusHeight =
      object.consensusHeight !== undefined && object.consensusHeight !== null
        ? Height.fromPartial(object.consensusHeight)
        : undefined;
    message.signer = object.signer ?? undefined;
    return message;
  },
};

function createBaseMsgConnectionOpenAckResponse(): MsgConnectionOpenAckResponse {
  return {};
}

export const MsgConnectionOpenAckResponse = {
  encode(_: MsgConnectionOpenAckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAckResponse();

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

  fromJSON(_: any): MsgConnectionOpenAckResponse {
    return {};
  },

  toJSON(_: MsgConnectionOpenAckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenAckResponse>, I>>(
    _: I,
  ): MsgConnectionOpenAckResponse {
    const message = createBaseMsgConnectionOpenAckResponse();
    return message;
  },
};

function createBaseMsgConnectionOpenConfirm(): MsgConnectionOpenConfirm {
  return {
    connectionId: undefined,
    proofAck: undefined,
    proofHeight: undefined,
    signer: undefined,
  };
}

export const MsgConnectionOpenConfirm = {
  encode(message: MsgConnectionOpenConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== undefined) {
      writer.uint32(10).string(message.connectionId);
    }

    if (message.proofAck !== undefined) {
      writer.uint32(18).bytes(message.proofAck);
    }

    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }

    if (message.signer !== undefined) {
      writer.uint32(34).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirm();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;

        case 2:
          message.proofAck = reader.bytes();
          break;

        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgConnectionOpenConfirm {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : undefined,
      proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : undefined,
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : undefined,
    };
  },

  toJSON(message: MsgConnectionOpenConfirm): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.proofAck !== undefined &&
      (obj.proofAck = message.proofAck !== undefined ? base64FromBytes(message.proofAck) : undefined);
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenConfirm>, I>>(
    object: I,
  ): MsgConnectionOpenConfirm {
    const message = createBaseMsgConnectionOpenConfirm();
    message.connectionId = object.connectionId ?? undefined;
    message.proofAck = object.proofAck ?? undefined;
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? undefined;
    return message;
  },
};

function createBaseMsgConnectionOpenConfirmResponse(): MsgConnectionOpenConfirmResponse {
  return {};
}

export const MsgConnectionOpenConfirmResponse = {
  encode(_: MsgConnectionOpenConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirmResponse();

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

  fromJSON(_: any): MsgConnectionOpenConfirmResponse {
    return {};
  },

  toJSON(_: MsgConnectionOpenConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenConfirmResponse>, I>>(
    _: I,
  ): MsgConnectionOpenConfirmResponse {
    const message = createBaseMsgConnectionOpenConfirmResponse();
    return message;
  },
};
