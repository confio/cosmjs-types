/* eslint-disable */
import { Fee, PacketFee } from "./fee";
import { PacketId } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../../../helpers";
export const protobufPackage = "ibc.applications.fee.v1";
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponse {}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponse {}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee?: Fee;
  /** the source port unique identifier */
  sourcePortId: string;
  /** the source channel unique identifer */
  sourceChannelId: string;
  /** account address to refund fee if necessary */
  signer: string;
  /** optional list of relayers permitted to the receive packet fees */
  relayers: string[];
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId?: PacketId;
  /** the packet fee associated with a particular IBC packet */
  packetFee?: PacketFee;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {}
function createBaseMsgRegisterPayee(): MsgRegisterPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    payee: "",
  };
}
export const MsgRegisterPayee = {
  encode(message: MsgRegisterPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(34).string(message.payee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPayee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterPayee {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : "",
    };
  },
  toJSON(message: MsgRegisterPayee): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.payee !== undefined && (obj.payee = message.payee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterPayee>, I>>(object: I): MsgRegisterPayee {
    const message = createBaseMsgRegisterPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterPayeeAmino): MsgRegisterPayee {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      relayer: object.relayer,
      payee: object.payee,
    };
  },
  toAmino(message: MsgRegisterPayee): MsgRegisterPayeeAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.payee = message.payee;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPayeeAminoMsg): MsgRegisterPayee {
    return MsgRegisterPayee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterPayee): MsgRegisterPayeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterPayee",
      value: MsgRegisterPayee.toAmino(message),
    };
  },
};
function createBaseMsgRegisterPayeeResponse(): MsgRegisterPayeeResponse {
  return {};
}
export const MsgRegisterPayeeResponse = {
  encode(_: MsgRegisterPayeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayeeResponse();
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
  fromJSON(_: any): MsgRegisterPayeeResponse {
    return {};
  },
  toJSON(_: MsgRegisterPayeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterPayeeResponse>, I>>(_: I): MsgRegisterPayeeResponse {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
  fromAmino(_: MsgRegisterPayeeResponseAmino): MsgRegisterPayeeResponse {
    return {};
  },
  toAmino(_: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPayeeResponseAminoMsg): MsgRegisterPayeeResponse {
    return MsgRegisterPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterPayeeResponse",
      value: MsgRegisterPayeeResponse.toAmino(message),
    };
  },
};
function createBaseMsgRegisterCounterpartyPayee(): MsgRegisterCounterpartyPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    counterpartyPayee: "",
  };
}
export const MsgRegisterCounterpartyPayee = {
  encode(message: MsgRegisterCounterpartyPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(34).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyPayee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterCounterpartyPayee {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : "",
    };
  },
  toJSON(message: MsgRegisterCounterpartyPayee): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterpartyPayee>, I>>(
    object: I,
  ): MsgRegisterCounterpartyPayee {
    const message = createBaseMsgRegisterCounterpartyPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterCounterpartyPayeeAmino): MsgRegisterCounterpartyPayee {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      relayer: object.relayer,
      counterpartyPayee: object.counterparty_payee,
    };
  },
  toAmino(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyPayeeAminoMsg): MsgRegisterCounterpartyPayee {
    return MsgRegisterCounterpartyPayee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayee",
      value: MsgRegisterCounterpartyPayee.toAmino(message),
    };
  },
};
function createBaseMsgRegisterCounterpartyPayeeResponse(): MsgRegisterCounterpartyPayeeResponse {
  return {};
}
export const MsgRegisterCounterpartyPayeeResponse = {
  encode(_: MsgRegisterCounterpartyPayeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
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
  fromJSON(_: any): MsgRegisterCounterpartyPayeeResponse {
    return {};
  },
  toJSON(_: MsgRegisterCounterpartyPayeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterpartyPayeeResponse>, I>>(
    _: I,
  ): MsgRegisterCounterpartyPayeeResponse {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
  fromAmino(_: MsgRegisterCounterpartyPayeeResponseAmino): MsgRegisterCounterpartyPayeeResponse {
    return {};
  },
  toAmino(_: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyPayeeResponseAminoMsg): MsgRegisterCounterpartyPayeeResponse {
    return MsgRegisterCounterpartyPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayeeResponse",
      value: MsgRegisterCounterpartyPayeeResponse.toAmino(message),
    };
  },
};
function createBaseMsgPayPacketFee(): MsgPayPacketFee {
  return {
    fee: undefined,
    sourcePortId: "",
    sourceChannelId: "",
    signer: "",
    relayers: [],
  };
}
export const MsgPayPacketFee = {
  encode(message: MsgPayPacketFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.sourcePortId !== "") {
      writer.uint32(18).string(message.sourcePortId);
    }
    if (message.sourceChannelId !== "") {
      writer.uint32(26).string(message.sourceChannelId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.sourcePortId = reader.string();
          break;
        case 3:
          message.sourceChannelId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPayPacketFee {
    return {
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      sourcePortId: isSet(object.sourcePortId) ? String(object.sourcePortId) : "",
      sourceChannelId: isSet(object.sourceChannelId) ? String(object.sourceChannelId) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
    };
  },
  toJSON(message: MsgPayPacketFee): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.sourcePortId !== undefined && (obj.sourcePortId = message.sourcePortId);
    message.sourceChannelId !== undefined && (obj.sourceChannelId = message.sourceChannelId);
    message.signer !== undefined && (obj.signer = message.signer);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFee>, I>>(object: I): MsgPayPacketFee {
    const message = createBaseMsgPayPacketFee();
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.sourcePortId = object.sourcePortId ?? "";
    message.sourceChannelId = object.sourceChannelId ?? "";
    message.signer = object.signer ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: MsgPayPacketFeeAmino): MsgPayPacketFee {
    return {
      fee: object?.fee ? Fee.fromAmino(object.fee) : undefined,
      sourcePortId: object.source_port_id,
      sourceChannelId: object.source_channel_id,
      signer: object.signer,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : [],
    };
  },
  toAmino(message: MsgPayPacketFee): MsgPayPacketFeeAmino {
    const obj: any = {};
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    obj.source_port_id = message.sourcePortId;
    obj.source_channel_id = message.sourceChannelId;
    obj.signer = message.signer;
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAminoMsg): MsgPayPacketFee {
    return MsgPayPacketFee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFee): MsgPayPacketFeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFee",
      value: MsgPayPacketFee.toAmino(message),
    };
  },
};
function createBaseMsgPayPacketFeeResponse(): MsgPayPacketFeeResponse {
  return {};
}
export const MsgPayPacketFeeResponse = {
  encode(_: MsgPayPacketFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeResponse();
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
  fromJSON(_: any): MsgPayPacketFeeResponse {
    return {};
  },
  toJSON(_: MsgPayPacketFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeResponse>, I>>(_: I): MsgPayPacketFeeResponse {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
  fromAmino(_: MsgPayPacketFeeResponseAmino): MsgPayPacketFeeResponse {
    return {};
  },
  toAmino(_: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeResponseAminoMsg): MsgPayPacketFeeResponse {
    return MsgPayPacketFeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeResponse",
      value: MsgPayPacketFeeResponse.toAmino(message),
    };
  },
};
function createBaseMsgPayPacketFeeAsync(): MsgPayPacketFeeAsync {
  return {
    packetId: undefined,
    packetFee: undefined,
  };
}
export const MsgPayPacketFeeAsync = {
  encode(message: MsgPayPacketFeeAsync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetFee !== undefined) {
      PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsync {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFee = PacketFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPayPacketFeeAsync {
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
      packetFee: isSet(object.packetFee) ? PacketFee.fromJSON(object.packetFee) : undefined,
    };
  },
  toJSON(message: MsgPayPacketFeeAsync): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    message.packetFee !== undefined &&
      (obj.packetFee = message.packetFee ? PacketFee.toJSON(message.packetFee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeAsync>, I>>(object: I): MsgPayPacketFeeAsync {
    const message = createBaseMsgPayPacketFeeAsync();
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromPartial(object.packetId)
        : undefined;
    message.packetFee =
      object.packetFee !== undefined && object.packetFee !== null
        ? PacketFee.fromPartial(object.packetFee)
        : undefined;
    return message;
  },
  fromAmino(object: MsgPayPacketFeeAsyncAmino): MsgPayPacketFeeAsync {
    return {
      packetId: object?.packet_id ? PacketId.fromAmino(object.packet_id) : undefined,
      packetFee: object?.packet_fee ? PacketFee.fromAmino(object.packet_fee) : undefined,
    };
  },
  toAmino(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    obj.packet_fee = message.packetFee ? PacketFee.toAmino(message.packetFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAsyncAminoMsg): MsgPayPacketFeeAsync {
    return MsgPayPacketFeeAsync.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsync",
      value: MsgPayPacketFeeAsync.toAmino(message),
    };
  },
};
function createBaseMsgPayPacketFeeAsyncResponse(): MsgPayPacketFeeAsyncResponse {
  return {};
}
export const MsgPayPacketFeeAsyncResponse = {
  encode(_: MsgPayPacketFeeAsyncResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsyncResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsyncResponse();
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
  fromJSON(_: any): MsgPayPacketFeeAsyncResponse {
    return {};
  },
  toJSON(_: MsgPayPacketFeeAsyncResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeAsyncResponse>, I>>(
    _: I,
  ): MsgPayPacketFeeAsyncResponse {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
  fromAmino(_: MsgPayPacketFeeAsyncResponseAmino): MsgPayPacketFeeAsyncResponse {
    return {};
  },
  toAmino(_: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAsyncResponseAminoMsg): MsgPayPacketFeeAsyncResponse {
    return MsgPayPacketFeeAsyncResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsyncResponse",
      value: MsgPayPacketFeeAsyncResponse.toAmino(message),
    };
  },
};
/** Msg defines the ICS29 Msg service. */
export interface Msg {
  /**
   * RegisterPayee defines a rpc handler method for MsgRegisterPayee
   * RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
   * payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
   * the source chain from which packets originate as this is where fee distribution takes place. This function may be
   * called more than once by a relayer, in which case, the latest payee is always used.
   */
  RegisterPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse>;
  /**
   * RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
   * RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
   * payee address before relaying. This ensures they will be properly compensated for forward relaying since
   * the destination chain must include the registered counterparty payee address in the acknowledgement. This function
   * may be called more than once by a relayer, in which case, the latest counterparty payee address is always used.
   */
  RegisterCounterpartyPayee(
    request: MsgRegisterCounterpartyPayee,
  ): Promise<MsgRegisterCounterpartyPayeeResponse>;
  /**
   * PayPacketFee defines a rpc handler method for MsgPayPacketFee
   * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
   * incentivize the relaying of the packet at the next sequence
   * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
   * initiates the lifecycle of the incentivized packet
   */
  PayPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse>;
  /**
   * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
   * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
   * incentivize the relaying of a known packet (i.e. at a particular sequence)
   */
  PayPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterPayee = this.RegisterPayee.bind(this);
    this.RegisterCounterpartyPayee = this.RegisterCounterpartyPayee.bind(this);
    this.PayPacketFee = this.PayPacketFee.bind(this);
    this.PayPacketFeeAsync = this.PayPacketFeeAsync.bind(this);
  }
  RegisterPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse> {
    const data = MsgRegisterPayee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterPayee", data);
    return promise.then((data) => MsgRegisterPayeeResponse.decode(new _m0.Reader(data)));
  }
  RegisterCounterpartyPayee(
    request: MsgRegisterCounterpartyPayee,
  ): Promise<MsgRegisterCounterpartyPayeeResponse> {
    const data = MsgRegisterCounterpartyPayee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterCounterpartyPayee", data);
    return promise.then((data) => MsgRegisterCounterpartyPayeeResponse.decode(new _m0.Reader(data)));
  }
  PayPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse> {
    const data = MsgPayPacketFee.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFee", data);
    return promise.then((data) => MsgPayPacketFeeResponse.decode(new _m0.Reader(data)));
  }
  PayPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse> {
    const data = MsgPayPacketFeeAsync.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFeeAsync", data);
    return promise.then((data) => MsgPayPacketFeeAsyncResponse.decode(new _m0.Reader(data)));
  }
}
