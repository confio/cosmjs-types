/* eslint-disable */
import { Duration } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "cosmos.group.module.v1";
/** Module is the config object of the group module. */
export interface Module {
  /**
   * max_execution_period defines the max duration after a proposal's voting period ends that members can send a MsgExec
   * to execute the proposal.
   */
  maxExecutionPeriod: Duration;
  /**
   * max_metadata_len defines the max length of the metadata bytes field for various entities within the group module.
   * Defaults to 255 if not explicitly set.
   */
  maxMetadataLen: bigint;
}
function createBaseModule(): Module {
  return {
    maxExecutionPeriod: Duration.fromPartial({}),
    maxMetadataLen: BigInt(0),
  };
}
export const Module = {
  typeUrl: "/cosmos.group.module.v1.Module",
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxExecutionPeriod !== undefined) {
      Duration.encode(message.maxExecutionPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxMetadataLen !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxMetadataLen);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxExecutionPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxMetadataLen = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    const obj = createBaseModule();
    if (isSet(object.maxExecutionPeriod))
      obj.maxExecutionPeriod = Duration.fromJSON(object.maxExecutionPeriod);
    if (isSet(object.maxMetadataLen)) obj.maxMetadataLen = BigInt(object.maxMetadataLen.toString());
    return obj;
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.maxExecutionPeriod !== undefined &&
      (obj.maxExecutionPeriod = message.maxExecutionPeriod
        ? Duration.toJSON(message.maxExecutionPeriod)
        : undefined);
    message.maxMetadataLen !== undefined &&
      (obj.maxMetadataLen = (message.maxMetadataLen || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    if (object.maxExecutionPeriod !== undefined && object.maxExecutionPeriod !== null) {
      message.maxExecutionPeriod = Duration.fromPartial(object.maxExecutionPeriod);
    }
    if (object.maxMetadataLen !== undefined && object.maxMetadataLen !== null) {
      message.maxMetadataLen = BigInt(object.maxMetadataLen.toString());
    }
    return message;
  },
};
