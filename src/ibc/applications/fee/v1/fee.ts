/* eslint-disable */
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.fee.v1";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
  /** the packet receive fee */
  recvFee: Coin[];
  /** the packet acknowledgement fee */
  ackFee: Coin[];
  /** the packet timeout fee */
  timeoutFee: Coin[];
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee: Fee;
  /** the refund address for unspent fees */
  refundAddress: string;
  /** optional list of relayers permitted to receive fees */
  relayers: string[];
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFees {
  /** list of packet fees */
  packetFees: PacketFee[];
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFees {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId: PacketId;
  /** list of packet fees */
  packetFees: PacketFee[];
}
function createBaseFee(): Fee {
  return {
    recvFee: [],
    ackFee: [],
    timeoutFee: [],
  };
}
export const Fee = {
  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.recvFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ackFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.timeoutFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Fee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.ackFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timeoutFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Fee {
    const obj = createBaseFee();
    if (Array.isArray(object?.recvFee)) obj.recvFee = object.recvFee.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.ackFee)) obj.ackFee = object.ackFee.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.timeoutFee))
      obj.timeoutFee = object.timeoutFee.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Fee): unknown {
    const obj: any = {};
    if (message.recvFee) {
      obj.recvFee = message.recvFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.recvFee = [];
    }
    if (message.ackFee) {
      obj.ackFee = message.ackFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.ackFee = [];
    }
    if (message.timeoutFee) {
      obj.timeoutFee = message.timeoutFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.timeoutFee = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Fee>, I>>(object: I): Fee {
    const message = createBaseFee();
    message.recvFee = object.recvFee?.map((e) => Coin.fromPartial(e)) || [];
    message.ackFee = object.ackFee?.map((e) => Coin.fromPartial(e)) || [];
    message.timeoutFee = object.timeoutFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBasePacketFee(): PacketFee {
  return {
    fee: Fee.fromPartial({}),
    refundAddress: "",
    relayers: [],
  };
}
export const PacketFee = {
  encode(message: PacketFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.refundAddress !== "") {
      writer.uint32(18).string(message.refundAddress);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PacketFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.refundAddress = reader.string();
          break;
        case 3:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketFee {
    const obj = createBasePacketFee();
    if (isSet(object.fee)) obj.fee = Fee.fromJSON(object.fee);
    if (isSet(object.refundAddress)) obj.refundAddress = String(object.refundAddress);
    if (Array.isArray(object?.relayers)) obj.relayers = object.relayers.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: PacketFee): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.refundAddress !== undefined && (obj.refundAddress = message.refundAddress);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PacketFee>, I>>(object: I): PacketFee {
    const message = createBasePacketFee();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromPartial(object.fee);
    }
    message.refundAddress = object.refundAddress ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
};
function createBasePacketFees(): PacketFees {
  return {
    packetFees: [],
  };
}
export const PacketFees = {
  encode(message: PacketFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.packetFees) {
      PacketFee.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PacketFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketFees {
    const obj = createBasePacketFees();
    if (Array.isArray(object?.packetFees))
      obj.packetFees = object.packetFees.map((e: any) => PacketFee.fromJSON(e));
    return obj;
  },
  toJSON(message: PacketFees): unknown {
    const obj: any = {};
    if (message.packetFees) {
      obj.packetFees = message.packetFees.map((e) => (e ? PacketFee.toJSON(e) : undefined));
    } else {
      obj.packetFees = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PacketFees>, I>>(object: I): PacketFees {
    const message = createBasePacketFees();
    message.packetFees = object.packetFees?.map((e) => PacketFee.fromPartial(e)) || [];
    return message;
  },
};
function createBaseIdentifiedPacketFees(): IdentifiedPacketFees {
  return {
    packetId: PacketId.fromPartial({}),
    packetFees: [],
  };
}
export const IdentifiedPacketFees = {
  encode(message: IdentifiedPacketFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.packetFees) {
      PacketFee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedPacketFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedPacketFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFees.push(PacketFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IdentifiedPacketFees {
    const obj = createBaseIdentifiedPacketFees();
    if (isSet(object.packetId)) obj.packetId = PacketId.fromJSON(object.packetId);
    if (Array.isArray(object?.packetFees))
      obj.packetFees = object.packetFees.map((e: any) => PacketFee.fromJSON(e));
    return obj;
  },
  toJSON(message: IdentifiedPacketFees): unknown {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    if (message.packetFees) {
      obj.packetFees = message.packetFees.map((e) => (e ? PacketFee.toJSON(e) : undefined));
    } else {
      obj.packetFees = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IdentifiedPacketFees>, I>>(object: I): IdentifiedPacketFees {
    const message = createBaseIdentifiedPacketFees();
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    }
    message.packetFees = object.packetFees?.map((e) => PacketFee.fromPartial(e)) || [];
    return message;
  },
};
