/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "pob.abci.v1";
/**
 * AuctionInfo contains information about the top of block auction
 * that was run in PrepareProposal using vote extensions.
 */
export interface AuctionInfo {
  /** extended_commit_info contains the vote extensions that were used to run the auction. */
  extendedCommitInfo: Uint8Array;
  /** max_tx_bytes is the maximum number of bytes that were allowed for the proposal. */
  maxTxBytes: Long;
  /** num_txs is the number of transactions that were included in the proposal. */
  numTxs: Long;
}
function createBaseAuctionInfo(): AuctionInfo {
  return {
    extendedCommitInfo: new Uint8Array(),
    maxTxBytes: Long.ZERO,
    numTxs: Long.UZERO,
  };
}
export const AuctionInfo = {
  encode(message: AuctionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.extendedCommitInfo.length !== 0) {
      writer.uint32(10).bytes(message.extendedCommitInfo);
    }
    if (!message.maxTxBytes.isZero()) {
      writer.uint32(16).int64(message.maxTxBytes);
    }
    if (!message.numTxs.isZero()) {
      writer.uint32(24).uint64(message.numTxs);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AuctionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extendedCommitInfo = reader.bytes();
          break;
        case 2:
          message.maxTxBytes = reader.int64() as Long;
          break;
        case 3:
          message.numTxs = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuctionInfo {
    return {
      extendedCommitInfo: isSet(object.extendedCommitInfo)
        ? bytesFromBase64(object.extendedCommitInfo)
        : new Uint8Array(),
      maxTxBytes: isSet(object.maxTxBytes) ? Long.fromValue(object.maxTxBytes) : Long.ZERO,
      numTxs: isSet(object.numTxs) ? Long.fromValue(object.numTxs) : Long.UZERO,
    };
  },
  toJSON(message: AuctionInfo): unknown {
    const obj: any = {};
    message.extendedCommitInfo !== undefined &&
      (obj.extendedCommitInfo = base64FromBytes(
        message.extendedCommitInfo !== undefined ? message.extendedCommitInfo : new Uint8Array(),
      ));
    message.maxTxBytes !== undefined && (obj.maxTxBytes = (message.maxTxBytes || Long.ZERO).toString());
    message.numTxs !== undefined && (obj.numTxs = (message.numTxs || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AuctionInfo>, I>>(object: I): AuctionInfo {
    const message = createBaseAuctionInfo();
    message.extendedCommitInfo = object.extendedCommitInfo ?? new Uint8Array();
    message.maxTxBytes =
      object.maxTxBytes !== undefined && object.maxTxBytes !== null
        ? Long.fromValue(object.maxTxBytes)
        : Long.ZERO;
    message.numTxs =
      object.numTxs !== undefined && object.numTxs !== null ? Long.fromValue(object.numTxs) : Long.UZERO;
    return message;
  },
};
