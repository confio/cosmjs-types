/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "pob.builder.v1";
/** GenesisState defines the genesis state of the x/builder module. */
export interface GenesisState {
  /** GenesisState defines the genesis state of the x/builder module. */
  params?: Params;
}
/** Params defines the parameters of the x/builder module. */
export interface Params {
  /**
   * max_bundle_size is the maximum number of transactions that can be bundled
   * in a single bundle.
   */
  maxBundleSize: number;
  /**
   * escrow_account_address is the address of the account that will receive a
   * portion of the bid proceeds.
   */
  escrowAccountAddress: Uint8Array;
  /** reserve_fee specifies the bid floor for the auction. */
  reserveFee?: Coin;
  /**
   * min_bid_increment specifies the minimum amount that the next bid must be
   * greater than the previous bid.
   */
  minBidIncrement?: Coin;
  /**
   * front_running_protection specifies whether front running and sandwich
   * attack protection is enabled.
   */
  frontRunningProtection: boolean;
  /**
   * proposer_fee defines the portion of the winning bid that goes to the block
   * proposer that proposed the block.
   */
  proposerFee: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
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
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};
function createBaseParams(): Params {
  return {
    maxBundleSize: 0,
    escrowAccountAddress: new Uint8Array(),
    reserveFee: undefined,
    minBidIncrement: undefined,
    frontRunningProtection: false,
    proposerFee: "",
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxBundleSize !== 0) {
      writer.uint32(8).uint32(message.maxBundleSize);
    }
    if (message.escrowAccountAddress.length !== 0) {
      writer.uint32(18).bytes(message.escrowAccountAddress);
    }
    if (message.reserveFee !== undefined) {
      Coin.encode(message.reserveFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.minBidIncrement !== undefined) {
      Coin.encode(message.minBidIncrement, writer.uint32(34).fork()).ldelim();
    }
    if (message.frontRunningProtection === true) {
      writer.uint32(40).bool(message.frontRunningProtection);
    }
    if (message.proposerFee !== "") {
      writer.uint32(50).string(message.proposerFee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBundleSize = reader.uint32();
          break;
        case 2:
          message.escrowAccountAddress = reader.bytes();
          break;
        case 3:
          message.reserveFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.minBidIncrement = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.frontRunningProtection = reader.bool();
          break;
        case 6:
          message.proposerFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      maxBundleSize: isSet(object.maxBundleSize) ? Number(object.maxBundleSize) : 0,
      escrowAccountAddress: isSet(object.escrowAccountAddress)
        ? bytesFromBase64(object.escrowAccountAddress)
        : new Uint8Array(),
      reserveFee: isSet(object.reserveFee) ? Coin.fromJSON(object.reserveFee) : undefined,
      minBidIncrement: isSet(object.minBidIncrement) ? Coin.fromJSON(object.minBidIncrement) : undefined,
      frontRunningProtection: isSet(object.frontRunningProtection)
        ? Boolean(object.frontRunningProtection)
        : false,
      proposerFee: isSet(object.proposerFee) ? String(object.proposerFee) : "",
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxBundleSize !== undefined && (obj.maxBundleSize = Math.round(message.maxBundleSize));
    message.escrowAccountAddress !== undefined &&
      (obj.escrowAccountAddress = base64FromBytes(
        message.escrowAccountAddress !== undefined ? message.escrowAccountAddress : new Uint8Array(),
      ));
    message.reserveFee !== undefined &&
      (obj.reserveFee = message.reserveFee ? Coin.toJSON(message.reserveFee) : undefined);
    message.minBidIncrement !== undefined &&
      (obj.minBidIncrement = message.minBidIncrement ? Coin.toJSON(message.minBidIncrement) : undefined);
    message.frontRunningProtection !== undefined &&
      (obj.frontRunningProtection = message.frontRunningProtection);
    message.proposerFee !== undefined && (obj.proposerFee = message.proposerFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxBundleSize = object.maxBundleSize ?? 0;
    message.escrowAccountAddress = object.escrowAccountAddress ?? new Uint8Array();
    message.reserveFee =
      object.reserveFee !== undefined && object.reserveFee !== null
        ? Coin.fromPartial(object.reserveFee)
        : undefined;
    message.minBidIncrement =
      object.minBidIncrement !== undefined && object.minBidIncrement !== null
        ? Coin.fromPartial(object.minBidIncrement)
        : undefined;
    message.frontRunningProtection = object.frontRunningProtection ?? false;
    message.proposerFee = object.proposerFee ?? "";
    return message;
  },
};
