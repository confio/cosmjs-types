import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "@osmonauts/helpers";
export const protobufPackage = "cosmwasm.wasm.v1";

/** MsgIBCSend */
export interface MsgIBCSend {
  /** the channel by which the packet will be sent */
  channel?: string;

  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight?: Long;

  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp?: Long;

  /**
   * Data is the payload to transfer. We must not make assumption what format or
   * content is in here.
   */
  data?: Uint8Array;
}

/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
  channel?: string;
}

function createBaseMsgIBCSend(): MsgIBCSend {
  return {
    channel: undefined,
    timeoutHeight: undefined,
    timeoutTimestamp: undefined,
    data: undefined,
  };
}

export const MsgIBCSend = {
  encode(message: MsgIBCSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== undefined) {
      writer.uint32(18).string(message.channel);
    }

    if (message.timeoutHeight !== undefined) {
      writer.uint32(32).uint64(message.timeoutHeight);
    }

    if (message.timeoutTimestamp !== undefined) {
      writer.uint32(40).uint64(message.timeoutTimestamp);
    }

    if (message.data !== undefined) {
      writer.uint32(50).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;

        case 4:
          message.timeoutHeight = reader.uint64() as Long;
          break;

        case 5:
          message.timeoutTimestamp = reader.uint64() as Long;
          break;

        case 6:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgIBCSend {
    return {
      channel: isSet(object.channel) ? String(object.channel) : undefined,
      timeoutHeight: isSet(object.timeoutHeight) ? Long.fromString(object.timeoutHeight) : undefined,
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Long.fromString(object.timeoutTimestamp) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : undefined,
    };
  },

  toJSON(message: MsgIBCSend): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    message.timeoutHeight !== undefined &&
      (obj.timeoutHeight = (message.timeoutHeight || undefined).toString());
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = (message.timeoutTimestamp || undefined).toString());
    message.data !== undefined &&
      (obj.data = message.data !== undefined ? base64FromBytes(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIBCSend>, I>>(object: I): MsgIBCSend {
    const message = createBaseMsgIBCSend();
    message.channel = object.channel ?? undefined;
    message.timeoutHeight =
      object.timeoutHeight !== undefined && object.timeoutHeight !== null
        ? Long.fromValue(object.timeoutHeight)
        : undefined;
    message.timeoutTimestamp =
      object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null
        ? Long.fromValue(object.timeoutTimestamp)
        : undefined;
    message.data = object.data ?? undefined;
    return message;
  },
};

function createBaseMsgIBCCloseChannel(): MsgIBCCloseChannel {
  return {
    channel: undefined,
  };
}

export const MsgIBCCloseChannel = {
  encode(message: MsgIBCCloseChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== undefined) {
      writer.uint32(18).string(message.channel);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCCloseChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCCloseChannel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgIBCCloseChannel {
    return {
      channel: isSet(object.channel) ? String(object.channel) : undefined,
    };
  },

  toJSON(message: MsgIBCCloseChannel): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIBCCloseChannel>, I>>(object: I): MsgIBCCloseChannel {
    const message = createBaseMsgIBCCloseChannel();
    message.channel = object.channel ?? undefined;
    return message;
  },
};
