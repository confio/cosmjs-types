/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tendermint.p2p";

export interface NetAddress {
  id: string;
  ip: string;
  port: number;
}

export interface ProtocolVersion {
  p2p: Long;
  block: Long;
  app: Long;
}

export interface DefaultNodeInfo {
  protocolVersion?: ProtocolVersion;
  defaultNodeId: string;
  listenAddr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other?: DefaultNodeInfoOther;
}

export interface DefaultNodeInfoOther {
  txIndex: string;
  rpcAddress: string;
}

const baseNetAddress: object = { id: "", ip: "", port: 0 };

export const NetAddress = {
  encode(message: NetAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNetAddress } as NetAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.ip = reader.string();
          break;
        case 3:
          message.port = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetAddress {
    const message = { ...baseNetAddress } as NetAddress;
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.ip = object.ip !== undefined && object.ip !== null ? String(object.ip) : "";
    message.port = object.port !== undefined && object.port !== null ? Number(object.port) : 0;
    return message;
  },

  toJSON(message: NetAddress): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = message.port);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetAddress>, I>>(object: I): NetAddress {
    const message = { ...baseNetAddress } as NetAddress;
    message.id = object.id ?? "";
    message.ip = object.ip ?? "";
    message.port = object.port ?? 0;
    return message;
  },
};

const baseProtocolVersion: object = { p2p: Long.UZERO, block: Long.UZERO, app: Long.UZERO };

export const ProtocolVersion = {
  encode(message: ProtocolVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.p2p.isZero()) {
      writer.uint32(8).uint64(message.p2p);
    }
    if (!message.block.isZero()) {
      writer.uint32(16).uint64(message.block);
    }
    if (!message.app.isZero()) {
      writer.uint32(24).uint64(message.app);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProtocolVersion } as ProtocolVersion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = reader.uint64() as Long;
          break;
        case 2:
          message.block = reader.uint64() as Long;
          break;
        case 3:
          message.app = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProtocolVersion {
    const message = { ...baseProtocolVersion } as ProtocolVersion;
    message.p2p = object.p2p !== undefined && object.p2p !== null ? Long.fromString(object.p2p) : Long.UZERO;
    message.block =
      object.block !== undefined && object.block !== null ? Long.fromString(object.block) : Long.UZERO;
    message.app = object.app !== undefined && object.app !== null ? Long.fromString(object.app) : Long.UZERO;
    return message;
  },

  toJSON(message: ProtocolVersion): unknown {
    const obj: any = {};
    message.p2p !== undefined && (obj.p2p = (message.p2p || Long.UZERO).toString());
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    message.app !== undefined && (obj.app = (message.app || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProtocolVersion>, I>>(object: I): ProtocolVersion {
    const message = { ...baseProtocolVersion } as ProtocolVersion;
    message.p2p = object.p2p !== undefined && object.p2p !== null ? Long.fromValue(object.p2p) : Long.UZERO;
    message.block =
      object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : Long.UZERO;
    return message;
  },
};

const baseDefaultNodeInfo: object = {
  defaultNodeId: "",
  listenAddr: "",
  network: "",
  version: "",
  moniker: "",
};

export const DefaultNodeInfo = {
  encode(message: DefaultNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocolVersion !== undefined) {
      ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultNodeId !== "") {
      writer.uint32(18).string(message.defaultNodeId);
    }
    if (message.listenAddr !== "") {
      writer.uint32(26).string(message.listenAddr);
    }
    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }
    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }
    if (message.other !== undefined) {
      DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDefaultNodeInfo } as DefaultNodeInfo;
    message.channels = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32());
          break;
        case 2:
          message.defaultNodeId = reader.string();
          break;
        case 3:
          message.listenAddr = reader.string();
          break;
        case 4:
          message.network = reader.string();
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.channels = reader.bytes();
          break;
        case 7:
          message.moniker = reader.string();
          break;
        case 8:
          message.other = DefaultNodeInfoOther.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DefaultNodeInfo {
    const message = { ...baseDefaultNodeInfo } as DefaultNodeInfo;
    message.protocolVersion =
      object.protocolVersion !== undefined && object.protocolVersion !== null
        ? ProtocolVersion.fromJSON(object.protocolVersion)
        : undefined;
    message.defaultNodeId =
      object.defaultNodeId !== undefined && object.defaultNodeId !== null ? String(object.defaultNodeId) : "";
    message.listenAddr =
      object.listenAddr !== undefined && object.listenAddr !== null ? String(object.listenAddr) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.version = object.version !== undefined && object.version !== null ? String(object.version) : "";
    message.channels =
      object.channels !== undefined && object.channels !== null
        ? bytesFromBase64(object.channels)
        : new Uint8Array();
    message.moniker = object.moniker !== undefined && object.moniker !== null ? String(object.moniker) : "";
    message.other =
      object.other !== undefined && object.other !== null
        ? DefaultNodeInfoOther.fromJSON(object.other)
        : undefined;
    return message;
  },

  toJSON(message: DefaultNodeInfo): unknown {
    const obj: any = {};
    message.protocolVersion !== undefined &&
      (obj.protocolVersion = message.protocolVersion
        ? ProtocolVersion.toJSON(message.protocolVersion)
        : undefined);
    message.defaultNodeId !== undefined && (obj.defaultNodeId = message.defaultNodeId);
    message.listenAddr !== undefined && (obj.listenAddr = message.listenAddr);
    message.network !== undefined && (obj.network = message.network);
    message.version !== undefined && (obj.version = message.version);
    message.channels !== undefined &&
      (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined &&
      (obj.other = message.other ? DefaultNodeInfoOther.toJSON(message.other) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefaultNodeInfo>, I>>(object: I): DefaultNodeInfo {
    const message = { ...baseDefaultNodeInfo } as DefaultNodeInfo;
    message.protocolVersion =
      object.protocolVersion !== undefined && object.protocolVersion !== null
        ? ProtocolVersion.fromPartial(object.protocolVersion)
        : undefined;
    message.defaultNodeId = object.defaultNodeId ?? "";
    message.listenAddr = object.listenAddr ?? "";
    message.network = object.network ?? "";
    message.version = object.version ?? "";
    message.channels = object.channels ?? new Uint8Array();
    message.moniker = object.moniker ?? "";
    message.other =
      object.other !== undefined && object.other !== null
        ? DefaultNodeInfoOther.fromPartial(object.other)
        : undefined;
    return message;
  },
};

const baseDefaultNodeInfoOther: object = { txIndex: "", rpcAddress: "" };

export const DefaultNodeInfoOther = {
  encode(message: DefaultNodeInfoOther, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txIndex !== "") {
      writer.uint32(10).string(message.txIndex);
    }
    if (message.rpcAddress !== "") {
      writer.uint32(18).string(message.rpcAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfoOther {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDefaultNodeInfoOther } as DefaultNodeInfoOther;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txIndex = reader.string();
          break;
        case 2:
          message.rpcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DefaultNodeInfoOther {
    const message = { ...baseDefaultNodeInfoOther } as DefaultNodeInfoOther;
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? String(object.txIndex) : "";
    message.rpcAddress =
      object.rpcAddress !== undefined && object.rpcAddress !== null ? String(object.rpcAddress) : "";
    return message;
  },

  toJSON(message: DefaultNodeInfoOther): unknown {
    const obj: any = {};
    message.txIndex !== undefined && (obj.txIndex = message.txIndex);
    message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefaultNodeInfoOther>, I>>(object: I): DefaultNodeInfoOther {
    const message = { ...baseDefaultNodeInfoOther } as DefaultNodeInfoOther;
    message.txIndex = object.txIndex ?? "";
    message.rpcAddress = object.rpcAddress ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
