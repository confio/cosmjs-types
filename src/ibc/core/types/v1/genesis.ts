/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { GenesisState as GenesisState1 } from "../../../../ibc/core/client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../../../ibc/core/connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../../../ibc/core/channel/v1/genesis";

export const protobufPackage = "ibc.core.types.v1";

/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
  /** ICS002 - Clients genesis state */
  clientGenesis?: GenesisState1;
  /** ICS003 - Connections genesis state */
  connectionGenesis?: GenesisState2;
  /** ICS004 - Channel genesis state */
  channelGenesis?: GenesisState3;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientGenesis !== undefined) {
      GenesisState1.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
    }
    if (message.connectionGenesis !== undefined) {
      GenesisState2.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
    }
    if (message.channelGenesis !== undefined) {
      GenesisState3.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientGenesis = GenesisState1.decode(reader, reader.uint32());
          break;
        case 2:
          message.connectionGenesis = GenesisState2.decode(reader, reader.uint32());
          break;
        case 3:
          message.channelGenesis = GenesisState3.decode(reader, reader.uint32());
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
    if (object.clientGenesis !== undefined && object.clientGenesis !== null) {
      message.clientGenesis = GenesisState1.fromJSON(object.clientGenesis);
    } else {
      message.clientGenesis = undefined;
    }
    if (object.connectionGenesis !== undefined && object.connectionGenesis !== null) {
      message.connectionGenesis = GenesisState2.fromJSON(object.connectionGenesis);
    } else {
      message.connectionGenesis = undefined;
    }
    if (object.channelGenesis !== undefined && object.channelGenesis !== null) {
      message.channelGenesis = GenesisState3.fromJSON(object.channelGenesis);
    } else {
      message.channelGenesis = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.clientGenesis !== undefined &&
      (obj.clientGenesis = message.clientGenesis ? GenesisState1.toJSON(message.clientGenesis) : undefined);
    message.connectionGenesis !== undefined &&
      (obj.connectionGenesis = message.connectionGenesis
        ? GenesisState2.toJSON(message.connectionGenesis)
        : undefined);
    message.channelGenesis !== undefined &&
      (obj.channelGenesis = message.channelGenesis
        ? GenesisState3.toJSON(message.channelGenesis)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.clientGenesis !== undefined && object.clientGenesis !== null) {
      message.clientGenesis = GenesisState1.fromPartial(object.clientGenesis);
    } else {
      message.clientGenesis = undefined;
    }
    if (object.connectionGenesis !== undefined && object.connectionGenesis !== null) {
      message.connectionGenesis = GenesisState2.fromPartial(object.connectionGenesis);
    } else {
      message.connectionGenesis = undefined;
    }
    if (object.channelGenesis !== undefined && object.channelGenesis !== null) {
      message.channelGenesis = GenesisState3.fromPartial(object.channelGenesis);
    } else {
      message.channelGenesis = undefined;
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
