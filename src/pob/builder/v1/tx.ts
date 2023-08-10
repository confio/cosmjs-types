/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "pob.builder.v1";
/**
 * MsgAuctionBid defines a request type for sending bids to the x/builder
 * module.
 */
export interface MsgAuctionBid {
  /**
   * bidder is the address of the account that is submitting a bid to the
   * auction.
   */
  bidder: string;
  /**
   * bid is the amount of coins that the bidder is bidding to participate in the
   * auction.
   */
  bid?: Coin;
  /**
   * transactions are the bytes of the transactions that the bidder wants to
   * bundle together.
   */
  transactions: Uint8Array[];
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponse {}
/**
 * MsgUpdateParams defines a request type for updating the x/builder module
 * parameters.
 */
export interface MsgUpdateParams {
  /**
   * authority is the address of the account that is authorized to update the
   * x/builder module parameters.
   */
  authority: string;
  /** params is the new parameters for the x/builder module. */
  params?: Params;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
function createBaseMsgAuctionBid(): MsgAuctionBid {
  return {
    bidder: "",
    bid: undefined,
    transactions: [],
  };
}
export const MsgAuctionBid = {
  encode(message: MsgAuctionBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.bid !== undefined) {
      Coin.encode(message.bid, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.transactions) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuctionBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuctionBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.bid = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.transactions.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAuctionBid {
    return {
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      bid: isSet(object.bid) ? Coin.fromJSON(object.bid) : undefined,
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },
  toJSON(message: MsgAuctionBid): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.bid !== undefined && (obj.bid = message.bid ? Coin.toJSON(message.bid) : undefined);
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.transactions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAuctionBid>, I>>(object: I): MsgAuctionBid {
    const message = createBaseMsgAuctionBid();
    message.bidder = object.bidder ?? "";
    message.bid = object.bid !== undefined && object.bid !== null ? Coin.fromPartial(object.bid) : undefined;
    message.transactions = object.transactions?.map((e) => e) || [];
    return message;
  },
};
function createBaseMsgAuctionBidResponse(): MsgAuctionBidResponse {
  return {};
}
export const MsgAuctionBidResponse = {
  encode(_: MsgAuctionBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuctionBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuctionBidResponse();
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
  fromJSON(_: any): MsgAuctionBidResponse {
    return {};
  },
  toJSON(_: MsgAuctionBidResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAuctionBidResponse>, I>>(_: I): MsgAuctionBidResponse {
    const message = createBaseMsgAuctionBidResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined,
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
/** Msg defines the x/builder Msg service. */
export interface Msg {
  /** AuctionBid defines a method for sending bids to the x/builder module. */
  AuctionBid(request: MsgAuctionBid): Promise<MsgAuctionBidResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/builder
   * module parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AuctionBid = this.AuctionBid.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  AuctionBid(request: MsgAuctionBid): Promise<MsgAuctionBidResponse> {
    const data = MsgAuctionBid.encode(request).finish();
    const promise = this.rpc.request("pob.builder.v1.Msg", "AuctionBid", data);
    return promise.then((data) => MsgAuctionBidResponse.decode(new _m0.Reader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pob.builder.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}
