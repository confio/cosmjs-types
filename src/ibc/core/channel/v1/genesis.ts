/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IdentifiedChannel, PacketState } from "../../../../ibc/core/channel/v1/channel";

export const protobufPackage = "ibc.core.channel.v1";

/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisState {
  channels: IdentifiedChannel[];
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  sendSequences: PacketSequence[];
  recvSequences: PacketSequence[];
  ackSequences: PacketSequence[];
  /** the sequence for the next generated channel identifier */
  nextChannelSequence: Long;
}

/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
  portId: string;
  channelId: string;
  sequence: Long;
}

const baseGenesisState: object = { nextChannelSequence: Long.UZERO };

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      PacketState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sendSequences) {
      PacketSequence.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.recvSequences) {
      PacketSequence.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.ackSequences) {
      PacketSequence.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (!message.nextChannelSequence.isZero()) {
      writer.uint32(64).uint64(message.nextChannelSequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.channels = [];
    message.acknowledgements = [];
    message.commitments = [];
    message.receipts = [];
    message.sendSequences = [];
    message.recvSequences = [];
    message.ackSequences = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.receipts.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 6:
          message.recvSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 7:
          message.ackSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 8:
          message.nextChannelSequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.channels = [];
    message.acknowledgements = [];
    message.commitments = [];
    message.receipts = [];
    message.sendSequences = [];
    message.recvSequences = [];
    message.ackSequences = [];
    if (object.channels !== undefined && object.channels !== null) {
      for (const e of object.channels) {
        message.channels.push(IdentifiedChannel.fromJSON(e));
      }
    }
    if (object.acknowledgements !== undefined && object.acknowledgements !== null) {
      for (const e of object.acknowledgements) {
        message.acknowledgements.push(PacketState.fromJSON(e));
      }
    }
    if (object.commitments !== undefined && object.commitments !== null) {
      for (const e of object.commitments) {
        message.commitments.push(PacketState.fromJSON(e));
      }
    }
    if (object.receipts !== undefined && object.receipts !== null) {
      for (const e of object.receipts) {
        message.receipts.push(PacketState.fromJSON(e));
      }
    }
    if (object.sendSequences !== undefined && object.sendSequences !== null) {
      for (const e of object.sendSequences) {
        message.sendSequences.push(PacketSequence.fromJSON(e));
      }
    }
    if (object.recvSequences !== undefined && object.recvSequences !== null) {
      for (const e of object.recvSequences) {
        message.recvSequences.push(PacketSequence.fromJSON(e));
      }
    }
    if (object.ackSequences !== undefined && object.ackSequences !== null) {
      for (const e of object.ackSequences) {
        message.ackSequences.push(PacketSequence.fromJSON(e));
      }
    }
    if (object.nextChannelSequence !== undefined && object.nextChannelSequence !== null) {
      message.nextChannelSequence = Long.fromString(object.nextChannelSequence);
    } else {
      message.nextChannelSequence = Long.UZERO;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map((e) => (e ? IdentifiedChannel.toJSON(e) : undefined));
    } else {
      obj.channels = [];
    }
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map((e) => (e ? PacketState.toJSON(e) : undefined));
    } else {
      obj.acknowledgements = [];
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map((e) => (e ? PacketState.toJSON(e) : undefined));
    } else {
      obj.commitments = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map((e) => (e ? PacketState.toJSON(e) : undefined));
    } else {
      obj.receipts = [];
    }
    if (message.sendSequences) {
      obj.sendSequences = message.sendSequences.map((e) => (e ? PacketSequence.toJSON(e) : undefined));
    } else {
      obj.sendSequences = [];
    }
    if (message.recvSequences) {
      obj.recvSequences = message.recvSequences.map((e) => (e ? PacketSequence.toJSON(e) : undefined));
    } else {
      obj.recvSequences = [];
    }
    if (message.ackSequences) {
      obj.ackSequences = message.ackSequences.map((e) => (e ? PacketSequence.toJSON(e) : undefined));
    } else {
      obj.ackSequences = [];
    }
    message.nextChannelSequence !== undefined &&
      (obj.nextChannelSequence = (message.nextChannelSequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.channels = [];
    if (object.channels !== undefined && object.channels !== null) {
      for (const e of object.channels) {
        message.channels.push(IdentifiedChannel.fromPartial(e));
      }
    }
    message.acknowledgements = [];
    if (object.acknowledgements !== undefined && object.acknowledgements !== null) {
      for (const e of object.acknowledgements) {
        message.acknowledgements.push(PacketState.fromPartial(e));
      }
    }
    message.commitments = [];
    if (object.commitments !== undefined && object.commitments !== null) {
      for (const e of object.commitments) {
        message.commitments.push(PacketState.fromPartial(e));
      }
    }
    message.receipts = [];
    if (object.receipts !== undefined && object.receipts !== null) {
      for (const e of object.receipts) {
        message.receipts.push(PacketState.fromPartial(e));
      }
    }
    message.sendSequences = [];
    if (object.sendSequences !== undefined && object.sendSequences !== null) {
      for (const e of object.sendSequences) {
        message.sendSequences.push(PacketSequence.fromPartial(e));
      }
    }
    message.recvSequences = [];
    if (object.recvSequences !== undefined && object.recvSequences !== null) {
      for (const e of object.recvSequences) {
        message.recvSequences.push(PacketSequence.fromPartial(e));
      }
    }
    message.ackSequences = [];
    if (object.ackSequences !== undefined && object.ackSequences !== null) {
      for (const e of object.ackSequences) {
        message.ackSequences.push(PacketSequence.fromPartial(e));
      }
    }
    if (object.nextChannelSequence !== undefined && object.nextChannelSequence !== null) {
      message.nextChannelSequence = object.nextChannelSequence as Long;
    } else {
      message.nextChannelSequence = Long.UZERO;
    }
    return message;
  },
};

const basePacketSequence: object = { portId: "", channelId: "", sequence: Long.UZERO };

export const PacketSequence = {
  encode(message: PacketSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePacketSequence } as PacketSequence;
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
          message.sequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PacketSequence {
    const message = { ...basePacketSequence } as PacketSequence;
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    if (object.channelId !== undefined && object.channelId !== null) {
      message.channelId = String(object.channelId);
    } else {
      message.channelId = "";
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    } else {
      message.sequence = Long.UZERO;
    }
    return message;
  },

  toJSON(message: PacketSequence): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<PacketSequence>): PacketSequence {
    const message = { ...basePacketSequence } as PacketSequence;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence as Long;
    } else {
      message.sequence = Long.UZERO;
    }
    return message;
  },
};

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
