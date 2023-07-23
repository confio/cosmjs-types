/* eslint-disable */
import { Counterparty, Version } from "./connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "ibc.core.connection.v1";
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInit {
  clientId: string;
  counterparty?: Counterparty;
  version?: Version;
  delayPeriod: Long;
  signer: string;
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
  clientId: string;
  /** Deprecated: this field is unused. Crossing hellos are no longer supported in core IBC. */
  /** @deprecated */
  previousConnectionId: string;
  clientState?: Any;
  counterparty?: Counterparty;
  delayPeriod: Long;
  counterpartyVersions: Version[];
  proofHeight?: Height;
  /**
   * proof of the initialization the connection on Chain A: `UNITIALIZED ->
   * INIT`
   */
  proofInit: Uint8Array;
  /** proof of client state included in message */
  proofClient: Uint8Array;
  /** proof of client consensus state */
  proofConsensus: Uint8Array;
  consensusHeight?: Height;
  signer: string;
  /** optional proof data for host state machines that are unable to introspect their own consensus state */
  hostConsensusStateProof: Uint8Array;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponse {}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAck {
  connectionId: string;
  counterpartyConnectionId: string;
  version?: Version;
  clientState?: Any;
  proofHeight?: Height;
  /**
   * proof of the initialization the connection on Chain B: `UNITIALIZED ->
   * TRYOPEN`
   */
  proofTry: Uint8Array;
  /** proof of client state included in message */
  proofClient: Uint8Array;
  /** proof of client consensus state */
  proofConsensus: Uint8Array;
  consensusHeight?: Height;
  signer: string;
  /** optional proof data for host state machines that are unable to introspect their own consensus state */
  hostConsensusStateProof: Uint8Array;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponse {}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirm {
  connectionId: string;
  /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
  proofAck: Uint8Array;
  proofHeight?: Height;
  signer: string;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponse {}
function createBaseMsgConnectionOpenInit(): MsgConnectionOpenInit {
  return {
    clientId: "",
    counterparty: undefined,
    version: undefined,
    delayPeriod: Long.UZERO,
    signer: "",
  };
}
export const MsgConnectionOpenInit = {
  encode(message: MsgConnectionOpenInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(32).uint64(message.delayPeriod);
    }
    if (message.signer !== "") {
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      delayPeriod: isSet(object.delayPeriod) ? Long.fromValue(object.delayPeriod) : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgConnectionOpenInit): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.version !== undefined &&
      (obj.version = message.version ? Version.toJSON(message.version) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenInit>, I>>(object: I): MsgConnectionOpenInit {
    const message = createBaseMsgConnectionOpenInit();
    message.clientId = object.clientId ?? "";
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
        : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgConnectionOpenInitAmino): MsgConnectionOpenInit {
    return {
      clientId: object.client_id,
      counterparty: object?.counterparty ? Counterparty.fromAmino(object.counterparty) : undefined,
      version: object?.version ? Version.fromAmino(object.version) : undefined,
      delayPeriod: Long.fromString(object.delay_period),
      signer: object.signer,
    };
  },
  toAmino(message: MsgConnectionOpenInit): MsgConnectionOpenInitAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
    obj.version = message.version ? Version.toAmino(message.version) : undefined;
    obj.delay_period = message.delayPeriod ? message.delayPeriod.toString() : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenInitAminoMsg): MsgConnectionOpenInit {
    return MsgConnectionOpenInit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenInit): MsgConnectionOpenInitAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenInit",
      value: MsgConnectionOpenInit.toAmino(message),
    };
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
  fromAmino(_: MsgConnectionOpenInitResponseAmino): MsgConnectionOpenInitResponse {
    return {};
  },
  toAmino(_: MsgConnectionOpenInitResponse): MsgConnectionOpenInitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenInitResponseAminoMsg): MsgConnectionOpenInitResponse {
    return MsgConnectionOpenInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenInitResponse): MsgConnectionOpenInitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenInitResponse",
      value: MsgConnectionOpenInitResponse.toAmino(message),
    };
  },
};
function createBaseMsgConnectionOpenTry(): MsgConnectionOpenTry {
  return {
    clientId: "",
    previousConnectionId: "",
    clientState: undefined,
    counterparty: undefined,
    delayPeriod: Long.UZERO,
    counterpartyVersions: [],
    proofHeight: undefined,
    proofInit: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: undefined,
    signer: "",
    hostConsensusStateProof: new Uint8Array(),
  };
}
export const MsgConnectionOpenTry = {
  encode(message: MsgConnectionOpenTry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.previousConnectionId !== "") {
      writer.uint32(18).string(message.previousConnectionId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    for (const v of message.counterpartyVersions) {
      Version.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(66).bytes(message.proofInit);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(74).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(82).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(98).string(message.signer);
    }
    if (message.hostConsensusStateProof.length !== 0) {
      writer.uint32(106).bytes(message.hostConsensusStateProof);
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
        case 13:
          message.hostConsensusStateProof = reader.bytes();
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
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      previousConnectionId: isSet(object.previousConnectionId) ? String(object.previousConnectionId) : "",
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      delayPeriod: isSet(object.delayPeriod) ? Long.fromValue(object.delayPeriod) : Long.UZERO,
      counterpartyVersions: Array.isArray(object?.counterpartyVersions)
        ? object.counterpartyVersions.map((e: any) => Version.fromJSON(e))
        : [],
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
      proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : new Uint8Array(),
      proofConsensus: isSet(object.proofConsensus)
        ? bytesFromBase64(object.proofConsensus)
        : new Uint8Array(),
      consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
      hostConsensusStateProof: isSet(object.hostConsensusStateProof)
        ? bytesFromBase64(object.hostConsensusStateProof)
        : new Uint8Array(),
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
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || Long.UZERO).toString());
    if (message.counterpartyVersions) {
      obj.counterpartyVersions = message.counterpartyVersions.map((e) => (e ? Version.toJSON(e) : undefined));
    } else {
      obj.counterpartyVersions = [];
    }
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.proofInit !== undefined &&
      (obj.proofInit = base64FromBytes(
        message.proofInit !== undefined ? message.proofInit : new Uint8Array(),
      ));
    message.proofClient !== undefined &&
      (obj.proofClient = base64FromBytes(
        message.proofClient !== undefined ? message.proofClient : new Uint8Array(),
      ));
    message.proofConsensus !== undefined &&
      (obj.proofConsensus = base64FromBytes(
        message.proofConsensus !== undefined ? message.proofConsensus : new Uint8Array(),
      ));
    message.consensusHeight !== undefined &&
      (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    message.hostConsensusStateProof !== undefined &&
      (obj.hostConsensusStateProof = base64FromBytes(
        message.hostConsensusStateProof !== undefined ? message.hostConsensusStateProof : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenTry>, I>>(object: I): MsgConnectionOpenTry {
    const message = createBaseMsgConnectionOpenTry();
    message.clientId = object.clientId ?? "";
    message.previousConnectionId = object.previousConnectionId ?? "";
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
        : Long.UZERO;
    message.counterpartyVersions = object.counterpartyVersions?.map((e) => Version.fromPartial(e)) || [];
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight =
      object.consensusHeight !== undefined && object.consensusHeight !== null
        ? Height.fromPartial(object.consensusHeight)
        : undefined;
    message.signer = object.signer ?? "";
    message.hostConsensusStateProof = object.hostConsensusStateProof ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgConnectionOpenTryAmino): MsgConnectionOpenTry {
    return {
      clientId: object.client_id,
      previousConnectionId: object.previous_connection_id,
      clientState: object?.client_state ? Any.fromAmino(object.client_state) : undefined,
      counterparty: object?.counterparty ? Counterparty.fromAmino(object.counterparty) : undefined,
      delayPeriod: Long.fromString(object.delay_period),
      counterpartyVersions: Array.isArray(object?.counterparty_versions)
        ? object.counterparty_versions.map((e: any) => Version.fromAmino(e))
        : [],
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined,
      proofInit: object.proof_init,
      proofClient: object.proof_client,
      proofConsensus: object.proof_consensus,
      consensusHeight: object?.consensus_height ? Height.fromAmino(object.consensus_height) : undefined,
      signer: object.signer,
      hostConsensusStateProof: object.host_consensus_state_proof,
    };
  },
  toAmino(message: MsgConnectionOpenTry): MsgConnectionOpenTryAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.previous_connection_id = message.previousConnectionId;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
    obj.delay_period = message.delayPeriod ? message.delayPeriod.toString() : undefined;
    if (message.counterpartyVersions) {
      obj.counterparty_versions = message.counterpartyVersions.map((e) =>
        e ? Version.toAmino(e) : undefined,
      );
    } else {
      obj.counterparty_versions = [];
    }
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.proof_init = message.proofInit;
    obj.proof_client = message.proofClient;
    obj.proof_consensus = message.proofConsensus;
    obj.consensus_height = message.consensusHeight ? Height.toAmino(message.consensusHeight) : {};
    obj.signer = message.signer;
    obj.host_consensus_state_proof = message.hostConsensusStateProof;
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenTryAminoMsg): MsgConnectionOpenTry {
    return MsgConnectionOpenTry.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenTry): MsgConnectionOpenTryAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenTry",
      value: MsgConnectionOpenTry.toAmino(message),
    };
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
  fromAmino(_: MsgConnectionOpenTryResponseAmino): MsgConnectionOpenTryResponse {
    return {};
  },
  toAmino(_: MsgConnectionOpenTryResponse): MsgConnectionOpenTryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenTryResponseAminoMsg): MsgConnectionOpenTryResponse {
    return MsgConnectionOpenTryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenTryResponse): MsgConnectionOpenTryResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenTryResponse",
      value: MsgConnectionOpenTryResponse.toAmino(message),
    };
  },
};
function createBaseMsgConnectionOpenAck(): MsgConnectionOpenAck {
  return {
    connectionId: "",
    counterpartyConnectionId: "",
    version: undefined,
    clientState: undefined,
    proofHeight: undefined,
    proofTry: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: undefined,
    signer: "",
    hostConsensusStateProof: new Uint8Array(),
  };
}
export const MsgConnectionOpenAck = {
  encode(message: MsgConnectionOpenAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.counterpartyConnectionId !== "") {
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
    if (message.proofTry.length !== 0) {
      writer.uint32(50).bytes(message.proofTry);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(58).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(66).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(82).string(message.signer);
    }
    if (message.hostConsensusStateProof.length !== 0) {
      writer.uint32(90).bytes(message.hostConsensusStateProof);
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
        case 11:
          message.hostConsensusStateProof = reader.bytes();
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
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      counterpartyConnectionId: isSet(object.counterpartyConnectionId)
        ? String(object.counterpartyConnectionId)
        : "",
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : new Uint8Array(),
      proofClient: isSet(object.proofClient) ? bytesFromBase64(object.proofClient) : new Uint8Array(),
      proofConsensus: isSet(object.proofConsensus)
        ? bytesFromBase64(object.proofConsensus)
        : new Uint8Array(),
      consensusHeight: isSet(object.consensusHeight) ? Height.fromJSON(object.consensusHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
      hostConsensusStateProof: isSet(object.hostConsensusStateProof)
        ? bytesFromBase64(object.hostConsensusStateProof)
        : new Uint8Array(),
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
      (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
    message.proofClient !== undefined &&
      (obj.proofClient = base64FromBytes(
        message.proofClient !== undefined ? message.proofClient : new Uint8Array(),
      ));
    message.proofConsensus !== undefined &&
      (obj.proofConsensus = base64FromBytes(
        message.proofConsensus !== undefined ? message.proofConsensus : new Uint8Array(),
      ));
    message.consensusHeight !== undefined &&
      (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    message.hostConsensusStateProof !== undefined &&
      (obj.hostConsensusStateProof = base64FromBytes(
        message.hostConsensusStateProof !== undefined ? message.hostConsensusStateProof : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenAck>, I>>(object: I): MsgConnectionOpenAck {
    const message = createBaseMsgConnectionOpenAck();
    message.connectionId = object.connectionId ?? "";
    message.counterpartyConnectionId = object.counterpartyConnectionId ?? "";
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
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight =
      object.consensusHeight !== undefined && object.consensusHeight !== null
        ? Height.fromPartial(object.consensusHeight)
        : undefined;
    message.signer = object.signer ?? "";
    message.hostConsensusStateProof = object.hostConsensusStateProof ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgConnectionOpenAckAmino): MsgConnectionOpenAck {
    return {
      connectionId: object.connection_id,
      counterpartyConnectionId: object.counterparty_connection_id,
      version: object?.version ? Version.fromAmino(object.version) : undefined,
      clientState: object?.client_state ? Any.fromAmino(object.client_state) : undefined,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined,
      proofTry: object.proof_try,
      proofClient: object.proof_client,
      proofConsensus: object.proof_consensus,
      consensusHeight: object?.consensus_height ? Height.fromAmino(object.consensus_height) : undefined,
      signer: object.signer,
      hostConsensusStateProof: object.host_consensus_state_proof,
    };
  },
  toAmino(message: MsgConnectionOpenAck): MsgConnectionOpenAckAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.counterparty_connection_id = message.counterpartyConnectionId;
    obj.version = message.version ? Version.toAmino(message.version) : undefined;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.proof_try = message.proofTry;
    obj.proof_client = message.proofClient;
    obj.proof_consensus = message.proofConsensus;
    obj.consensus_height = message.consensusHeight ? Height.toAmino(message.consensusHeight) : {};
    obj.signer = message.signer;
    obj.host_consensus_state_proof = message.hostConsensusStateProof;
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenAckAminoMsg): MsgConnectionOpenAck {
    return MsgConnectionOpenAck.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenAck): MsgConnectionOpenAckAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenAck",
      value: MsgConnectionOpenAck.toAmino(message),
    };
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
  fromAmino(_: MsgConnectionOpenAckResponseAmino): MsgConnectionOpenAckResponse {
    return {};
  },
  toAmino(_: MsgConnectionOpenAckResponse): MsgConnectionOpenAckResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenAckResponseAminoMsg): MsgConnectionOpenAckResponse {
    return MsgConnectionOpenAckResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenAckResponse): MsgConnectionOpenAckResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenAckResponse",
      value: MsgConnectionOpenAckResponse.toAmino(message),
    };
  },
};
function createBaseMsgConnectionOpenConfirm(): MsgConnectionOpenConfirm {
  return {
    connectionId: "",
    proofAck: new Uint8Array(),
    proofHeight: undefined,
    signer: "",
  };
}
export const MsgConnectionOpenConfirm = {
  encode(message: MsgConnectionOpenConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(18).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
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
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgConnectionOpenConfirm): unknown {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.proofAck !== undefined &&
      (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConnectionOpenConfirm>, I>>(
    object: I,
  ): MsgConnectionOpenConfirm {
    const message = createBaseMsgConnectionOpenConfirm();
    message.connectionId = object.connectionId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight =
      object.proofHeight !== undefined && object.proofHeight !== null
        ? Height.fromPartial(object.proofHeight)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgConnectionOpenConfirmAmino): MsgConnectionOpenConfirm {
    return {
      connectionId: object.connection_id,
      proofAck: object.proof_ack,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined,
      signer: object.signer,
    };
  },
  toAmino(message: MsgConnectionOpenConfirm): MsgConnectionOpenConfirmAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.proof_ack = message.proofAck;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenConfirmAminoMsg): MsgConnectionOpenConfirm {
    return MsgConnectionOpenConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenConfirm): MsgConnectionOpenConfirmAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenConfirm",
      value: MsgConnectionOpenConfirm.toAmino(message),
    };
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
  fromAmino(_: MsgConnectionOpenConfirmResponseAmino): MsgConnectionOpenConfirmResponse {
    return {};
  },
  toAmino(_: MsgConnectionOpenConfirmResponse): MsgConnectionOpenConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenConfirmResponseAminoMsg): MsgConnectionOpenConfirmResponse {
    return MsgConnectionOpenConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenConfirmResponse): MsgConnectionOpenConfirmResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
      value: MsgConnectionOpenConfirmResponse.toAmino(message),
    };
  },
};
/** Msg defines the ibc/connection Msg service. */
export interface Msg {
  /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  ConnectionOpenInit(request: MsgConnectionOpenInit): Promise<MsgConnectionOpenInitResponse>;
  /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  ConnectionOpenTry(request: MsgConnectionOpenTry): Promise<MsgConnectionOpenTryResponse>;
  /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  ConnectionOpenAck(request: MsgConnectionOpenAck): Promise<MsgConnectionOpenAckResponse>;
  /**
   * ConnectionOpenConfirm defines a rpc handler method for
   * MsgConnectionOpenConfirm.
   */
  ConnectionOpenConfirm(request: MsgConnectionOpenConfirm): Promise<MsgConnectionOpenConfirmResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ConnectionOpenInit = this.ConnectionOpenInit.bind(this);
    this.ConnectionOpenTry = this.ConnectionOpenTry.bind(this);
    this.ConnectionOpenAck = this.ConnectionOpenAck.bind(this);
    this.ConnectionOpenConfirm = this.ConnectionOpenConfirm.bind(this);
  }
  ConnectionOpenInit(request: MsgConnectionOpenInit): Promise<MsgConnectionOpenInitResponse> {
    const data = MsgConnectionOpenInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", data);
    return promise.then((data) => MsgConnectionOpenInitResponse.decode(new _m0.Reader(data)));
  }
  ConnectionOpenTry(request: MsgConnectionOpenTry): Promise<MsgConnectionOpenTryResponse> {
    const data = MsgConnectionOpenTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", data);
    return promise.then((data) => MsgConnectionOpenTryResponse.decode(new _m0.Reader(data)));
  }
  ConnectionOpenAck(request: MsgConnectionOpenAck): Promise<MsgConnectionOpenAckResponse> {
    const data = MsgConnectionOpenAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", data);
    return promise.then((data) => MsgConnectionOpenAckResponse.decode(new _m0.Reader(data)));
  }
  ConnectionOpenConfirm(request: MsgConnectionOpenConfirm): Promise<MsgConnectionOpenConfirmResponse> {
    const data = MsgConnectionOpenConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", data);
    return promise.then((data) => MsgConnectionOpenConfirmResponse.decode(new _m0.Reader(data)));
  }
}
