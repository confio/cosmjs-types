/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "cosmos.feegrant.module.v1";
/** Module is the config object of the feegrant module. */
export interface Module {}
function createBaseModule(): Module {
  return {};
}
export const Module = {
  typeUrl: "/cosmos.feegrant.module.v1.Module",
  encode(_: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
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
  fromJSON(_: any): Module {
    const obj = createBaseModule();
    return obj;
  },
  toJSON(_: Module): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(_: I): Module {
    const message = createBaseModule();
    return message;
  },
};
