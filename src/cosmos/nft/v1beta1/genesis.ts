/* eslint-disable */
import { Class, NFT } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet } from "../../../helpers";
export const protobufPackage = "cosmos.nft.v1beta1";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
  /** class defines the class of the nft type. */
  classes: Class[];
  /** entry defines all nft owned by a person. */
  entries: Entry[];
}
/** Entry Defines all nft owned by a person */
export interface Entry {
  /** owner is the owner address of the following nft */
  owner: string;
  /** nfts is a group of nfts of the same owner */
  nfts: NFT[];
}
function createBaseGenesisState(): GenesisState {
  return {
    classes: [],
    entries: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      Entry.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 2:
          message.entries.push(Entry.decode(reader, reader.uint32()));
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
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Entry.fromJSON(e)) : [],
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map((e) => (e ? Class.toJSON(e) : undefined));
    } else {
      obj.classes = [];
    }
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? Entry.toJSON(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.classes = object.classes?.map((e) => Class.fromPartial(e)) || [];
    message.entries = object.entries?.map((e) => Entry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromAmino(e)) : [],
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Entry.fromAmino(e)) : [],
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map((e) => (e ? Class.toAmino(e) : undefined));
    } else {
      obj.classes = [];
    }
    if (message.entries) {
      obj.entries = message.entries.map((e) => (e ? Entry.toAmino(e) : undefined));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message),
    };
  },
};
function createBaseEntry(): Entry {
  return {
    owner: "",
    nfts: [],
  };
}
export const Entry = {
  encode(message: Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Entry {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromJSON(e)) : [],
    };
  },
  toJSON(message: Entry): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Entry>, I>>(object: I): Entry {
    const message = createBaseEntry();
    message.owner = object.owner ?? "";
    message.nfts = object.nfts?.map((e) => NFT.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EntryAmino): Entry {
    return {
      owner: object.owner,
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromAmino(e)) : [],
    };
  },
  toAmino(message: Entry): EntryAmino {
    const obj: any = {};
    obj.owner = message.owner;
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? NFT.toAmino(e) : undefined));
    } else {
      obj.nfts = [];
    }
    return obj;
  },
  fromAminoMsg(object: EntryAminoMsg): Entry {
    return Entry.fromAmino(object.value);
  },
  toAminoMsg(message: Entry): EntryAminoMsg {
    return {
      type: "cosmos-sdk/Entry",
      value: Entry.toAmino(message),
    };
  },
};
