import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "@osmonauts/helpers";
export const protobufPackage = "ibc.applications.transfer.v2";

/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
  /** the token denomination to be transferred */
  denom?: string;

  /** the token amount to be transferred */
  amount?: string;

  /** the sender address */
  sender?: string;

  /** the recipient address on the destination chain */
  receiver?: string;
}

function createBaseFungibleTokenPacketData(): FungibleTokenPacketData {
  return {
    denom: undefined,
    amount: undefined,
    sender: undefined,
    receiver: undefined,
  };
}

export const FungibleTokenPacketData = {
  encode(message: FungibleTokenPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      writer.uint32(10).string(message.denom);
    }

    if (message.amount !== undefined) {
      writer.uint32(18).string(message.amount);
    }

    if (message.sender !== undefined) {
      writer.uint32(26).string(message.sender);
    }

    if (message.receiver !== undefined) {
      writer.uint32(34).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FungibleTokenPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFungibleTokenPacketData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.sender = reader.string();
          break;

        case 4:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FungibleTokenPacketData {
    return {
      denom: isSet(object.denom) ? String(object.denom) : undefined,
      amount: isSet(object.amount) ? String(object.amount) : undefined,
      sender: isSet(object.sender) ? String(object.sender) : undefined,
      receiver: isSet(object.receiver) ? String(object.receiver) : undefined,
    };
  },

  toJSON(message: FungibleTokenPacketData): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FungibleTokenPacketData>, I>>(object: I): FungibleTokenPacketData {
    const message = createBaseFungibleTokenPacketData();
    message.denom = object.denom ?? undefined;
    message.amount = object.amount ?? undefined;
    message.sender = object.sender ?? undefined;
    message.receiver = object.receiver ?? undefined;
    return message;
  },
};
