/* eslint-disable */
import { Params, CodeInfo, ContractInfo, Model, ContractCodeHistoryEntry } from "./types";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmwasm.wasm.v1";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
  params?: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  codeId: Long;
  codeInfo?: CodeInfo;
  codeBytes: Uint8Array;
  /** Pinned to wasmvm cache */
  pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractAddress: string;
  contractInfo?: ContractInfo;
  contractState: Model[];
  contractCodeHistory: ContractCodeHistoryEntry[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
  idKey: Uint8Array;
  value: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    codes: [],
    contracts: [],
    sequences: [],
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
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
        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
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
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromJSON(e)) : [],
      contracts: Array.isArray(object?.contracts)
        ? object.contracts.map((e: any) => Contract.fromJSON(e))
        : [],
      sequences: Array.isArray(object?.sequences)
        ? object.sequences.map((e: any) => Sequence.fromJSON(e))
        : [],
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.codes) {
      obj.codes = message.codes.map((e) => (e ? Code.toJSON(e) : undefined));
    } else {
      obj.codes = [];
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => (e ? Contract.toJSON(e) : undefined));
    } else {
      obj.contracts = [];
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => (e ? Sequence.toJSON(e) : undefined));
    } else {
      obj.sequences = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.codes = object.codes?.map((e) => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map((e) => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map((e) => Sequence.fromPartial(e)) || [];
    return message;
  },
};
function createBaseCode(): Code {
  return {
    codeId: Long.UZERO,
    codeInfo: undefined,
    codeBytes: new Uint8Array(),
    pinned: false,
  };
}
export const Code = {
  encode(message: Code, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }
    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Code {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64() as Long;
          break;
        case 2:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.codeBytes = reader.bytes();
          break;
        case 4:
          message.pinned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Code {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      codeInfo: isSet(object.codeInfo) ? CodeInfo.fromJSON(object.codeInfo) : undefined,
      codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array(),
      pinned: isSet(object.pinned) ? Boolean(object.pinned) : false,
    };
  },
  toJSON(message: Code): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.codeInfo !== undefined &&
      (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined &&
      (obj.codeBytes = base64FromBytes(
        message.codeBytes !== undefined ? message.codeBytes : new Uint8Array(),
      ));
    message.pinned !== undefined && (obj.pinned = message.pinned);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Code>, I>>(object: I): Code {
    const message = createBaseCode();
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.codeInfo =
      object.codeInfo !== undefined && object.codeInfo !== null
        ? CodeInfo.fromPartial(object.codeInfo)
        : undefined;
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    return message;
  },
};
function createBaseContract(): Contract {
  return {
    contractAddress: "",
    contractInfo: undefined,
    contractState: [],
    contractCodeHistory: [],
  };
}
export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contractState) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.contractCodeHistory) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.contractState.push(Model.decode(reader, reader.uint32()));
          break;
        case 4:
          message.contractCodeHistory.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Contract {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
      contractState: Array.isArray(object?.contractState)
        ? object.contractState.map((e: any) => Model.fromJSON(e))
        : [],
      contractCodeHistory: Array.isArray(object?.contractCodeHistory)
        ? object.contractCodeHistory.map((e: any) => ContractCodeHistoryEntry.fromJSON(e))
        : [],
    };
  },
  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractInfo !== undefined &&
      (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
    if (message.contractState) {
      obj.contractState = message.contractState.map((e) => (e ? Model.toJSON(e) : undefined));
    } else {
      obj.contractState = [];
    }
    if (message.contractCodeHistory) {
      obj.contractCodeHistory = message.contractCodeHistory.map((e) =>
        e ? ContractCodeHistoryEntry.toJSON(e) : undefined,
      );
    } else {
      obj.contractCodeHistory = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Contract>, I>>(object: I): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? "";
    message.contractInfo =
      object.contractInfo !== undefined && object.contractInfo !== null
        ? ContractInfo.fromPartial(object.contractInfo)
        : undefined;
    message.contractState = object.contractState?.map((e) => Model.fromPartial(e)) || [];
    message.contractCodeHistory =
      object.contractCodeHistory?.map((e) => ContractCodeHistoryEntry.fromPartial(e)) || [];
    return message;
  },
};
function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: Long.UZERO,
  };
}
export const Sequence = {
  encode(message: Sequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;
        case 2:
          message.value = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Sequence {
    return {
      idKey: isSet(object.idKey) ? bytesFromBase64(object.idKey) : new Uint8Array(),
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO,
    };
  },
  toJSON(message: Sequence): unknown {
    const obj: any = {};
    message.idKey !== undefined &&
      (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Sequence>, I>>(object: I): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    message.value =
      object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  },
};
