/* eslint-disable */
import { IdentifiedPacketFees } from "./fee";
import { PacketId } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.fee.v1";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
  /** list of identified packet fees */
  identifiedFees: IdentifiedPacketFees[];
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** list of registered payees */
  registeredPayees: RegisteredPayee[];
  /** list of registered counterparty payees */
  registeredCounterpartyPayees: RegisteredCounterpartyPayee[];
  /** list of forward relayer addresses */
  forwardRelayers: ForwardRelayerAddress[];
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
  /** the forward relayer address */
  address: string;
  /** unique packet identifer comprised of the channel ID, port ID and sequence */
  packetId?: PacketId;
}
function createBaseGenesisState(): GenesisState {
  return {
    identifiedFees: [],
    feeEnabledChannels: [],
    registeredPayees: [],
    registeredCounterpartyPayees: [],
    forwardRelayers: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.identifiedFees) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.registeredPayees) {
      RegisteredPayee.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.registeredCounterpartyPayees) {
      RegisteredCounterpartyPayee.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forwardRelayers) {
      ForwardRelayerAddress.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifiedFees.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.registeredPayees.push(RegisteredPayee.decode(reader, reader.uint32()));
          break;
        case 4:
          message.registeredCounterpartyPayees.push(
            RegisteredCounterpartyPayee.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.forwardRelayers.push(ForwardRelayerAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      identifiedFees: Array.isArray(object?.identifiedFees)
        ? object.identifiedFees.map((e: any) => IdentifiedPacketFees.fromJSON(e))
        : [],
      feeEnabledChannels: Array.isArray(object?.feeEnabledChannels)
        ? object.feeEnabledChannels.map((e: any) => FeeEnabledChannel.fromJSON(e))
        : [],
      registeredPayees: Array.isArray(object?.registeredPayees)
        ? object.registeredPayees.map((e: any) => RegisteredPayee.fromJSON(e))
        : [],
      registeredCounterpartyPayees: Array.isArray(object?.registeredCounterpartyPayees)
        ? object.registeredCounterpartyPayees.map((e: any) => RegisteredCounterpartyPayee.fromJSON(e))
        : [],
      forwardRelayers: Array.isArray(object?.forwardRelayers)
        ? object.forwardRelayers.map((e: any) => ForwardRelayerAddress.fromJSON(e))
        : [],
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.identifiedFees) {
      obj.identifiedFees = message.identifiedFees.map((e) =>
        e ? IdentifiedPacketFees.toJSON(e) : undefined,
      );
    } else {
      obj.identifiedFees = [];
    }
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map((e) =>
        e ? FeeEnabledChannel.toJSON(e) : undefined,
      );
    } else {
      obj.feeEnabledChannels = [];
    }
    if (message.registeredPayees) {
      obj.registeredPayees = message.registeredPayees.map((e) => (e ? RegisteredPayee.toJSON(e) : undefined));
    } else {
      obj.registeredPayees = [];
    }
    if (message.registeredCounterpartyPayees) {
      obj.registeredCounterpartyPayees = message.registeredCounterpartyPayees.map((e) =>
        e ? RegisteredCounterpartyPayee.toJSON(e) : undefined,
      );
    } else {
      obj.registeredCounterpartyPayees = [];
    }
    if (message.forwardRelayers) {
      obj.forwardRelayers = message.forwardRelayers.map((e) =>
        e ? ForwardRelayerAddress.toJSON(e) : undefined,
      );
    } else {
      obj.forwardRelayers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.identifiedFees = object.identifiedFees?.map((e) => IdentifiedPacketFees.fromPartial(e)) || [];
    message.feeEnabledChannels =
      object.feeEnabledChannels?.map((e) => FeeEnabledChannel.fromPartial(e)) || [];
    message.registeredPayees = object.registeredPayees?.map((e) => RegisteredPayee.fromPartial(e)) || [];
    message.registeredCounterpartyPayees =
      object.registeredCounterpartyPayees?.map((e) => RegisteredCounterpartyPayee.fromPartial(e)) || [];
    message.forwardRelayers = object.forwardRelayers?.map((e) => ForwardRelayerAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      identifiedFees: Array.isArray(object?.identified_fees)
        ? object.identified_fees.map((e: any) => IdentifiedPacketFees.fromAmino(e))
        : [],
      feeEnabledChannels: Array.isArray(object?.fee_enabled_channels)
        ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromAmino(e))
        : [],
      registeredPayees: Array.isArray(object?.registered_payees)
        ? object.registered_payees.map((e: any) => RegisteredPayee.fromAmino(e))
        : [],
      registeredCounterpartyPayees: Array.isArray(object?.registered_counterparty_payees)
        ? object.registered_counterparty_payees.map((e: any) => RegisteredCounterpartyPayee.fromAmino(e))
        : [],
      forwardRelayers: Array.isArray(object?.forward_relayers)
        ? object.forward_relayers.map((e: any) => ForwardRelayerAddress.fromAmino(e))
        : [],
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.identifiedFees) {
      obj.identified_fees = message.identifiedFees.map((e) =>
        e ? IdentifiedPacketFees.toAmino(e) : undefined,
      );
    } else {
      obj.identified_fees = [];
    }
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map((e) =>
        e ? FeeEnabledChannel.toAmino(e) : undefined,
      );
    } else {
      obj.fee_enabled_channels = [];
    }
    if (message.registeredPayees) {
      obj.registered_payees = message.registeredPayees.map((e) =>
        e ? RegisteredPayee.toAmino(e) : undefined,
      );
    } else {
      obj.registered_payees = [];
    }
    if (message.registeredCounterpartyPayees) {
      obj.registered_counterparty_payees = message.registeredCounterpartyPayees.map((e) =>
        e ? RegisteredCounterpartyPayee.toAmino(e) : undefined,
      );
    } else {
      obj.registered_counterparty_payees = [];
    }
    if (message.forwardRelayers) {
      obj.forward_relayers = message.forwardRelayers.map((e) =>
        e ? ForwardRelayerAddress.toAmino(e) : undefined,
      );
    } else {
      obj.forward_relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message),
    };
  },
};
function createBaseFeeEnabledChannel(): FeeEnabledChannel {
  return {
    portId: "",
    channelId: "",
  };
}
export const FeeEnabledChannel = {
  encode(message: FeeEnabledChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FeeEnabledChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeEnabledChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeeEnabledChannel {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
    };
  },
  toJSON(message: FeeEnabledChannel): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FeeEnabledChannel>, I>>(object: I): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: FeeEnabledChannelAmino): FeeEnabledChannel {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
    };
  },
  toAmino(message: FeeEnabledChannel): FeeEnabledChannelAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: FeeEnabledChannelAminoMsg): FeeEnabledChannel {
    return FeeEnabledChannel.fromAmino(object.value);
  },
  toAminoMsg(message: FeeEnabledChannel): FeeEnabledChannelAminoMsg {
    return {
      type: "cosmos-sdk/FeeEnabledChannel",
      value: FeeEnabledChannel.toAmino(message),
    };
  },
};
function createBaseRegisteredPayee(): RegisteredPayee {
  return {
    channelId: "",
    relayer: "",
    payee: "",
  };
}
export const RegisteredPayee = {
  encode(message: RegisteredPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(26).string(message.payee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredPayee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredPayee {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : "",
    };
  },
  toJSON(message: RegisteredPayee): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.payee !== undefined && (obj.payee = message.payee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredPayee>, I>>(object: I): RegisteredPayee {
    const message = createBaseRegisteredPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
  fromAmino(object: RegisteredPayeeAmino): RegisteredPayee {
    return {
      channelId: object.channel_id,
      relayer: object.relayer,
      payee: object.payee,
    };
  },
  toAmino(message: RegisteredPayee): RegisteredPayeeAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.payee = message.payee;
    return obj;
  },
  fromAminoMsg(object: RegisteredPayeeAminoMsg): RegisteredPayee {
    return RegisteredPayee.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredPayee): RegisteredPayeeAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredPayee",
      value: RegisteredPayee.toAmino(message),
    };
  },
};
function createBaseRegisteredCounterpartyPayee(): RegisteredCounterpartyPayee {
  return {
    channelId: "",
    relayer: "",
    counterpartyPayee: "",
  };
}
export const RegisteredCounterpartyPayee = {
  encode(message: RegisteredCounterpartyPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(26).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredCounterpartyPayee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredCounterpartyPayee {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : "",
    };
  },
  toJSON(message: RegisteredCounterpartyPayee): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredCounterpartyPayee>, I>>(
    object: I,
  ): RegisteredCounterpartyPayee {
    const message = createBaseRegisteredCounterpartyPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromAmino(object: RegisteredCounterpartyPayeeAmino): RegisteredCounterpartyPayee {
    return {
      channelId: object.channel_id,
      relayer: object.relayer,
      counterpartyPayee: object.counterparty_payee,
    };
  },
  toAmino(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: RegisteredCounterpartyPayeeAminoMsg): RegisteredCounterpartyPayee {
    return RegisteredCounterpartyPayee.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredCounterpartyPayee",
      value: RegisteredCounterpartyPayee.toAmino(message),
    };
  },
};
function createBaseForwardRelayerAddress(): ForwardRelayerAddress {
  return {
    address: "",
    packetId: undefined,
  };
}
export const ForwardRelayerAddress = {
  encode(message: ForwardRelayerAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ForwardRelayerAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardRelayerAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ForwardRelayerAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined,
    };
  },
  toJSON(message: ForwardRelayerAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ForwardRelayerAddress>, I>>(object: I): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    message.address = object.address ?? "";
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromPartial(object.packetId)
        : undefined;
    return message;
  },
  fromAmino(object: ForwardRelayerAddressAmino): ForwardRelayerAddress {
    return {
      address: object.address,
      packetId: object?.packet_id ? PacketId.fromAmino(object.packet_id) : undefined,
    };
  },
  toAmino(message: ForwardRelayerAddress): ForwardRelayerAddressAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: ForwardRelayerAddressAminoMsg): ForwardRelayerAddress {
    return ForwardRelayerAddress.fromAmino(object.value);
  },
  toAminoMsg(message: ForwardRelayerAddress): ForwardRelayerAddressAminoMsg {
    return {
      type: "cosmos-sdk/ForwardRelayerAddress",
      value: ForwardRelayerAddress.toAmino(message),
    };
  },
};
