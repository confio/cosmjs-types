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
  fee?: Fee;
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
  packetId?: PacketId;
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
    return {
      recvFee: Array.isArray(object?.recvFee) ? object.recvFee.map((e: any) => Coin.fromJSON(e)) : [],
      ackFee: Array.isArray(object?.ackFee) ? object.ackFee.map((e: any) => Coin.fromJSON(e)) : [],
      timeoutFee: Array.isArray(object?.timeoutFee)
        ? object.timeoutFee.map((e: any) => Coin.fromJSON(e))
        : [],
    };
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
  fromAmino(object: FeeAmino): Fee {
    return {
      recvFee: Array.isArray(object?.recv_fee) ? object.recv_fee.map((e: any) => Coin.fromAmino(e)) : [],
      ackFee: Array.isArray(object?.ack_fee) ? object.ack_fee.map((e: any) => Coin.fromAmino(e)) : [],
      timeoutFee: Array.isArray(object?.timeout_fee)
        ? object.timeout_fee.map((e: any) => Coin.fromAmino(e))
        : [],
    };
  },
  toAmino(message: Fee): FeeAmino {
    const obj: any = {};
    if (message.recvFee) {
      obj.recv_fee = message.recvFee.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.recv_fee = [];
    }
    if (message.ackFee) {
      obj.ack_fee = message.ackFee.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.ack_fee = [];
    }
    if (message.timeoutFee) {
      obj.timeout_fee = message.timeoutFee.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.timeout_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: FeeAminoMsg): Fee {
    return Fee.fromAmino(object.value);
  },
  toAminoMsg(message: Fee): FeeAminoMsg {
    return {
      type: "cosmos-sdk/Fee",
      value: Fee.toAmino(message),
    };
  },
};
function createBasePacketFee(): PacketFee {
  return {
    fee: undefined,
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
    return {
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
      refundAddress: isSet(object.refundAddress) ? String(object.refundAddress) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : [],
    };
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
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.refundAddress = object.refundAddress ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: PacketFeeAmino): PacketFee {
    return {
      fee: object?.fee ? Fee.fromAmino(object.fee) : undefined,
      refundAddress: object.refund_address,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : [],
    };
  },
  toAmino(message: PacketFee): PacketFeeAmino {
    const obj: any = {};
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    obj.refund_address = message.refundAddress;
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: PacketFeeAminoMsg): PacketFee {
    return PacketFee.fromAmino(object.value);
  },
  toAminoMsg(message: PacketFee): PacketFeeAminoMsg {
    return {
      type: "cosmos-sdk/PacketFee",
      value: PacketFee.toAmino(message),
    };
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
    return {
      packetFees: Array.isArray(object?.packetFees)
        ? object.packetFees.map((e: any) => PacketFee.fromJSON(e))
        : [],
    };
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
  fromAmino(object: PacketFeesAmino): PacketFees {
    return {
      packetFees: Array.isArray(object?.packet_fees)
        ? object.packet_fees.map((e: any) => PacketFee.fromAmino(e))
        : [],
    };
  },
  toAmino(message: PacketFees): PacketFeesAmino {
    const obj: any = {};
    if (message.packetFees) {
      obj.packet_fees = message.packetFees.map((e) => (e ? PacketFee.toAmino(e) : undefined));
    } else {
      obj.packet_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: PacketFeesAminoMsg): PacketFees {
    return PacketFees.fromAmino(object.value);
  },
  toAminoMsg(message: PacketFees): PacketFeesAminoMsg {
    return {
      type: "cosmos-sdk/PacketFees",
      value: PacketFees.toAmino(message),
    };
  },
};
function createBaseIdentifiedPacketFees(): IdentifiedPacketFees {
  return {
    packetId: undefined,
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
    return {
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
      packetFees: Array.isArray(object?.packetFees)
        ? object.packetFees.map((e: any) => PacketFee.fromJSON(e))
        : [],
    };
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
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromPartial(object.packetId)
        : undefined;
    message.packetFees = object.packetFees?.map((e) => PacketFee.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IdentifiedPacketFeesAmino): IdentifiedPacketFees {
    return {
      packetId: object?.packet_id ? PacketId.fromAmino(object.packet_id) : undefined,
      packetFees: Array.isArray(object?.packet_fees)
        ? object.packet_fees.map((e: any) => PacketFee.fromAmino(e))
        : [],
    };
  },
  toAmino(message: IdentifiedPacketFees): IdentifiedPacketFeesAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    if (message.packetFees) {
      obj.packet_fees = message.packetFees.map((e) => (e ? PacketFee.toAmino(e) : undefined));
    } else {
      obj.packet_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: IdentifiedPacketFeesAminoMsg): IdentifiedPacketFees {
    return IdentifiedPacketFees.fromAmino(object.value);
  },
  toAminoMsg(message: IdentifiedPacketFees): IdentifiedPacketFeesAminoMsg {
    return {
      type: "cosmos-sdk/IdentifiedPacketFees",
      value: IdentifiedPacketFees.toAmino(message),
    };
  },
};
