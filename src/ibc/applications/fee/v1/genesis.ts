/* eslint-disable */
import { IdentifiedPacketFees } from "./fee";
import { PacketId } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../../../helpers";
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

  fromPartial<I extends Exact<DeepPartial<FeeEnabledChannel>, I>>(object: I): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
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

  fromPartial<I extends Exact<DeepPartial<RegisteredPayee>, I>>(object: I): RegisteredPayee {
    const message = createBaseRegisteredPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
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

  fromPartial<I extends Exact<DeepPartial<RegisteredCounterpartyPayee>, I>>(
    object: I,
  ): RegisteredCounterpartyPayee {
    const message = createBaseRegisteredCounterpartyPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
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

  fromPartial<I extends Exact<DeepPartial<ForwardRelayerAddress>, I>>(object: I): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    message.address = object.address ?? "";
    message.packetId =
      object.packetId !== undefined && object.packetId !== null
        ? PacketId.fromPartial(object.packetId)
        : undefined;
    return message;
  },
};
