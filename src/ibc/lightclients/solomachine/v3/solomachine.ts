/* eslint-disable */
import { Any } from "../../../../google/protobuf/any";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "ibc.lightclients.solomachine.v3";
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
  /** latest sequence of the client state */
  sequence: Long;
  /** frozen sequence of the solo machine */
  isFrozen: boolean;
  consensusState: ConsensusState;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
  /** public key of the solo machine */
  publicKey: Any;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */
  diversifier: string;
  timestamp: Long;
}
/** Header defines a solo machine consensus header */
export interface Header {
  timestamp: Long;
  signature: Uint8Array;
  newPublicKey: Any;
  newDiversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
  sequence: Long;
  signatureOne: SignatureAndData;
  signatureTwo: SignatureAndData;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
  signature: Uint8Array;
  path: Uint8Array;
  data: Uint8Array;
  timestamp: Long;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
  signatureData: Uint8Array;
  timestamp: Long;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
  /** the sequence number */
  sequence: Long;
  /** the proof timestamp */
  timestamp: Long;
  /** the public key diversifier */
  diversifier: string;
  /** the standardised path bytes */
  path: Uint8Array;
  /** the marshaled data bytes */
  data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
  /** header public key */
  newPubKey: Any;
  /** header diversifier */
  newDiversifier: string;
}
function createBaseClientState(): ClientState {
  return {
    sequence: Long.UZERO,
    isFrozen: false,
    consensusState: ConsensusState.fromPartial({}),
  };
}
export const ClientState = {
  encode(message: ClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.isFrozen === true) {
      writer.uint32(16).bool(message.isFrozen);
    }
    if (message.consensusState !== undefined) {
      ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64() as Long;
          break;
        case 2:
          message.isFrozen = reader.bool();
          break;
        case 3:
          message.consensusState = ConsensusState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    const obj = createBaseClientState();
    if (isSet(object.sequence)) obj.sequence = Long.fromValue(object.sequence);
    if (isSet(object.isFrozen)) obj.isFrozen = Boolean(object.isFrozen);
    if (isSet(object.consensusState)) obj.consensusState = ConsensusState.fromJSON(object.consensusState);
    return obj;
  },
  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.isFrozen !== undefined && (obj.isFrozen = message.isFrozen);
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? ConsensusState.toJSON(message.consensusState)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClientState>, I>>(object: I): ClientState {
    const message = createBaseClientState();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromValue(object.sequence);
    }
    message.isFrozen = object.isFrozen ?? false;
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = ConsensusState.fromPartial(object.consensusState);
    }
    return message;
  },
};
function createBaseConsensusState(): ConsensusState {
  return {
    publicKey: Any.fromPartial({}),
    diversifier: "",
    timestamp: Long.UZERO,
  };
}
export const ConsensusState = {
  encode(message: ConsensusState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.diversifier !== "") {
      writer.uint32(18).string(message.diversifier);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.diversifier = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusState {
    const obj = createBaseConsensusState();
    if (isSet(object.publicKey)) obj.publicKey = Any.fromJSON(object.publicKey);
    if (isSet(object.diversifier)) obj.diversifier = String(object.diversifier);
    if (isSet(object.timestamp)) obj.timestamp = Long.fromValue(object.timestamp);
    return obj;
  },
  toJSON(message: ConsensusState): unknown {
    const obj: any = {};
    message.publicKey !== undefined &&
      (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsensusState>, I>>(object: I): ConsensusState {
    const message = createBaseConsensusState();
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = Any.fromPartial(object.publicKey);
    }
    message.diversifier = object.diversifier ?? "";
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromValue(object.timestamp);
    }
    return message;
  },
};
function createBaseHeader(): Header {
  return {
    timestamp: Long.UZERO,
    signature: new Uint8Array(),
    newPublicKey: Any.fromPartial({}),
    newDiversifier: "",
  };
}
export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.timestamp.isZero()) {
      writer.uint32(8).uint64(message.timestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.newPublicKey !== undefined) {
      Any.encode(message.newPublicKey, writer.uint32(26).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(34).string(message.newDiversifier);
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
          message.timestamp = reader.uint64() as Long;
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        case 3:
          message.newPublicKey = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.newDiversifier = reader.string();
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
    if (isSet(object.timestamp)) obj.timestamp = Long.fromValue(object.timestamp);
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    if (isSet(object.newPublicKey)) obj.newPublicKey = Any.fromJSON(object.newPublicKey);
    if (isSet(object.newDiversifier)) obj.newDiversifier = String(object.newDiversifier);
    return obj;
  },
  toJSON(message: Header): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.newPublicKey !== undefined &&
      (obj.newPublicKey = message.newPublicKey ? Any.toJSON(message.newPublicKey) : undefined);
    message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Header>, I>>(object: I): Header {
    const message = createBaseHeader();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromValue(object.timestamp);
    }
    message.signature = object.signature ?? new Uint8Array();
    if (object.newPublicKey !== undefined && object.newPublicKey !== null) {
      message.newPublicKey = Any.fromPartial(object.newPublicKey);
    }
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
};
function createBaseMisbehaviour(): Misbehaviour {
  return {
    sequence: Long.UZERO,
    signatureOne: SignatureAndData.fromPartial({}),
    signatureTwo: SignatureAndData.fromPartial({}),
  };
}
export const Misbehaviour = {
  encode(message: Misbehaviour, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.signatureOne !== undefined) {
      SignatureAndData.encode(message.signatureOne, writer.uint32(18).fork()).ldelim();
    }
    if (message.signatureTwo !== undefined) {
      SignatureAndData.encode(message.signatureTwo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64() as Long;
          break;
        case 2:
          message.signatureOne = SignatureAndData.decode(reader, reader.uint32());
          break;
        case 3:
          message.signatureTwo = SignatureAndData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Misbehaviour {
    const obj = createBaseMisbehaviour();
    if (isSet(object.sequence)) obj.sequence = Long.fromValue(object.sequence);
    if (isSet(object.signatureOne)) obj.signatureOne = SignatureAndData.fromJSON(object.signatureOne);
    if (isSet(object.signatureTwo)) obj.signatureTwo = SignatureAndData.fromJSON(object.signatureTwo);
    return obj;
  },
  toJSON(message: Misbehaviour): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.signatureOne !== undefined &&
      (obj.signatureOne = message.signatureOne ? SignatureAndData.toJSON(message.signatureOne) : undefined);
    message.signatureTwo !== undefined &&
      (obj.signatureTwo = message.signatureTwo ? SignatureAndData.toJSON(message.signatureTwo) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Misbehaviour>, I>>(object: I): Misbehaviour {
    const message = createBaseMisbehaviour();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromValue(object.sequence);
    }
    if (object.signatureOne !== undefined && object.signatureOne !== null) {
      message.signatureOne = SignatureAndData.fromPartial(object.signatureOne);
    }
    if (object.signatureTwo !== undefined && object.signatureTwo !== null) {
      message.signatureTwo = SignatureAndData.fromPartial(object.signatureTwo);
    }
    return message;
  },
};
function createBaseSignatureAndData(): SignatureAndData {
  return {
    signature: new Uint8Array(),
    path: new Uint8Array(),
    data: new Uint8Array(),
    timestamp: Long.UZERO,
  };
}
export const SignatureAndData = {
  encode(message: SignatureAndData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.path.length !== 0) {
      writer.uint32(18).bytes(message.path);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(32).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureAndData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureAndData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;
        case 2:
          message.path = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.timestamp = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignatureAndData {
    const obj = createBaseSignatureAndData();
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.timestamp)) obj.timestamp = Long.fromValue(object.timestamp);
    return obj;
  },
  toJSON(message: SignatureAndData): unknown {
    const obj: any = {};
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.path !== undefined &&
      (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SignatureAndData>, I>>(object: I): SignatureAndData {
    const message = createBaseSignatureAndData();
    message.signature = object.signature ?? new Uint8Array();
    message.path = object.path ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromValue(object.timestamp);
    }
    return message;
  },
};
function createBaseTimestampedSignatureData(): TimestampedSignatureData {
  return {
    signatureData: new Uint8Array(),
    timestamp: Long.UZERO,
  };
}
export const TimestampedSignatureData = {
  encode(message: TimestampedSignatureData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TimestampedSignatureData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampedSignatureData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatureData = reader.bytes();
          break;
        case 2:
          message.timestamp = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimestampedSignatureData {
    const obj = createBaseTimestampedSignatureData();
    if (isSet(object.signatureData)) obj.signatureData = bytesFromBase64(object.signatureData);
    if (isSet(object.timestamp)) obj.timestamp = Long.fromValue(object.timestamp);
    return obj;
  },
  toJSON(message: TimestampedSignatureData): unknown {
    const obj: any = {};
    message.signatureData !== undefined &&
      (obj.signatureData = base64FromBytes(
        message.signatureData !== undefined ? message.signatureData : new Uint8Array(),
      ));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TimestampedSignatureData>, I>>(
    object: I,
  ): TimestampedSignatureData {
    const message = createBaseTimestampedSignatureData();
    message.signatureData = object.signatureData ?? new Uint8Array();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromValue(object.timestamp);
    }
    return message;
  },
};
function createBaseSignBytes(): SignBytes {
  return {
    sequence: Long.UZERO,
    timestamp: Long.UZERO,
    diversifier: "",
    path: new Uint8Array(),
    data: new Uint8Array(),
  };
}
export const SignBytes = {
  encode(message: SignBytes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.diversifier !== "") {
      writer.uint32(26).string(message.diversifier);
    }
    if (message.path.length !== 0) {
      writer.uint32(34).bytes(message.path);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SignBytes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignBytes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64() as Long;
          break;
        case 2:
          message.timestamp = reader.uint64() as Long;
          break;
        case 3:
          message.diversifier = reader.string();
          break;
        case 4:
          message.path = reader.bytes();
          break;
        case 5:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignBytes {
    const obj = createBaseSignBytes();
    if (isSet(object.sequence)) obj.sequence = Long.fromValue(object.sequence);
    if (isSet(object.timestamp)) obj.timestamp = Long.fromValue(object.timestamp);
    if (isSet(object.diversifier)) obj.diversifier = String(object.diversifier);
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: SignBytes): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.path !== undefined &&
      (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SignBytes>, I>>(object: I): SignBytes {
    const message = createBaseSignBytes();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromValue(object.sequence);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Long.fromValue(object.timestamp);
    }
    message.diversifier = object.diversifier ?? "";
    message.path = object.path ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
function createBaseHeaderData(): HeaderData {
  return {
    newPubKey: Any.fromPartial({}),
    newDiversifier: "",
  };
}
export const HeaderData = {
  encode(message: HeaderData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newPubKey !== undefined) {
      Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(18).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newPubKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.newDiversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HeaderData {
    const obj = createBaseHeaderData();
    if (isSet(object.newPubKey)) obj.newPubKey = Any.fromJSON(object.newPubKey);
    if (isSet(object.newDiversifier)) obj.newDiversifier = String(object.newDiversifier);
    return obj;
  },
  toJSON(message: HeaderData): unknown {
    const obj: any = {};
    message.newPubKey !== undefined &&
      (obj.newPubKey = message.newPubKey ? Any.toJSON(message.newPubKey) : undefined);
    message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<HeaderData>, I>>(object: I): HeaderData {
    const message = createBaseHeaderData();
    if (object.newPubKey !== undefined && object.newPubKey !== null) {
      message.newPubKey = Any.fromPartial(object.newPubKey);
    }
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
};
