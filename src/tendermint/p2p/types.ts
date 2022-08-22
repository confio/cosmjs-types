import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export const protobufPackage = "tendermint.p2p";
export interface NetAddress {
  id?: string;
  ip?: string;
  port?: number;
}
export interface ProtocolVersion {
  p2p?: Long;
  block?: Long;
  app?: Long;
}
export interface DefaultNodeInfo {
  protocolVersion?: ProtocolVersion;
  defaultNodeId?: string;
  listenAddr?: string;
  network?: string;
  version?: string;
  channels?: Uint8Array;
  moniker?: string;
  other?: DefaultNodeInfoOther;
}
export interface DefaultNodeInfoOther {
  txIndex?: string;
  rpcAddress?: string;
}

function createBaseNetAddress(): NetAddress {
  return {
    id: undefined,
    ip: undefined,
    port: undefined,
  };
}

export const NetAddress = {
  encode(message: NetAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }

    if (message.ip !== undefined) {
      writer.uint32(18).string(message.ip);
    }

    if (message.port !== undefined) {
      writer.uint32(24).uint32(message.port);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetAddress();

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
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      ip: isSet(object.ip) ? String(object.ip) : undefined,
      port: isSet(object.port) ? Number(object.port) : undefined,
    };
  },

  toJSON(message: NetAddress): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetAddress>, I>>(object: I): NetAddress {
    const message = createBaseNetAddress();
    message.id = object.id ?? undefined;
    message.ip = object.ip ?? undefined;
    message.port = object.port ?? undefined;
    return message;
  },
};

function createBaseProtocolVersion(): ProtocolVersion {
  return {
    p2p: undefined,
    block: undefined,
    app: undefined,
  };
}

export const ProtocolVersion = {
  encode(message: ProtocolVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.p2p !== undefined) {
      writer.uint32(8).uint64(message.p2p);
    }

    if (message.block !== undefined) {
      writer.uint32(16).uint64(message.block);
    }

    if (message.app !== undefined) {
      writer.uint32(24).uint64(message.app);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();

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
    return {
      p2p: isSet(object.p2p) ? Long.fromString(object.p2p) : undefined,
      block: isSet(object.block) ? Long.fromString(object.block) : undefined,
      app: isSet(object.app) ? Long.fromString(object.app) : undefined,
    };
  },

  toJSON(message: ProtocolVersion): unknown {
    const obj: any = {};
    message.p2p !== undefined && (obj.p2p = (message.p2p || undefined).toString());
    message.block !== undefined && (obj.block = (message.block || undefined).toString());
    message.app !== undefined && (obj.app = (message.app || undefined).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProtocolVersion>, I>>(object: I): ProtocolVersion {
    const message = createBaseProtocolVersion();
    message.p2p = object.p2p !== undefined && object.p2p !== null ? Long.fromValue(object.p2p) : undefined;
    message.block =
      object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : undefined;
    message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : undefined;
    return message;
  },
};

function createBaseDefaultNodeInfo(): DefaultNodeInfo {
  return {
    protocolVersion: undefined,
    defaultNodeId: undefined,
    listenAddr: undefined,
    network: undefined,
    version: undefined,
    channels: undefined,
    moniker: undefined,
    other: undefined,
  };
}

export const DefaultNodeInfo = {
  encode(message: DefaultNodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocolVersion !== undefined) {
      ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
    }

    if (message.defaultNodeId !== undefined) {
      writer.uint32(18).string(message.defaultNodeId);
    }

    if (message.listenAddr !== undefined) {
      writer.uint32(26).string(message.listenAddr);
    }

    if (message.network !== undefined) {
      writer.uint32(34).string(message.network);
    }

    if (message.version !== undefined) {
      writer.uint32(42).string(message.version);
    }

    if (message.channels !== undefined) {
      writer.uint32(50).bytes(message.channels);
    }

    if (message.moniker !== undefined) {
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
    const message = createBaseDefaultNodeInfo();

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
    return {
      protocolVersion: isSet(object.protocolVersion)
        ? ProtocolVersion.fromJSON(object.protocolVersion)
        : undefined,
      defaultNodeId: isSet(object.defaultNodeId) ? String(object.defaultNodeId) : undefined,
      listenAddr: isSet(object.listenAddr) ? String(object.listenAddr) : undefined,
      network: isSet(object.network) ? String(object.network) : undefined,
      version: isSet(object.version) ? String(object.version) : undefined,
      channels: isSet(object.channels) ? bytesFromBase64(object.channels) : undefined,
      moniker: isSet(object.moniker) ? String(object.moniker) : undefined,
      other: isSet(object.other) ? DefaultNodeInfoOther.fromJSON(object.other) : undefined,
    };
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
      (obj.channels = message.channels !== undefined ? base64FromBytes(message.channels) : undefined);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.other !== undefined &&
      (obj.other = message.other ? DefaultNodeInfoOther.toJSON(message.other) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefaultNodeInfo>, I>>(object: I): DefaultNodeInfo {
    const message = createBaseDefaultNodeInfo();
    message.protocolVersion =
      object.protocolVersion !== undefined && object.protocolVersion !== null
        ? ProtocolVersion.fromPartial(object.protocolVersion)
        : undefined;
    message.defaultNodeId = object.defaultNodeId ?? undefined;
    message.listenAddr = object.listenAddr ?? undefined;
    message.network = object.network ?? undefined;
    message.version = object.version ?? undefined;
    message.channels = object.channels ?? undefined;
    message.moniker = object.moniker ?? undefined;
    message.other =
      object.other !== undefined && object.other !== null
        ? DefaultNodeInfoOther.fromPartial(object.other)
        : undefined;
    return message;
  },
};

function createBaseDefaultNodeInfoOther(): DefaultNodeInfoOther {
  return {
    txIndex: undefined,
    rpcAddress: undefined,
  };
}

export const DefaultNodeInfoOther = {
  encode(message: DefaultNodeInfoOther, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txIndex !== undefined) {
      writer.uint32(10).string(message.txIndex);
    }

    if (message.rpcAddress !== undefined) {
      writer.uint32(18).string(message.rpcAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfoOther {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultNodeInfoOther();

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
    return {
      txIndex: isSet(object.txIndex) ? String(object.txIndex) : undefined,
      rpcAddress: isSet(object.rpcAddress) ? String(object.rpcAddress) : undefined,
    };
  },

  toJSON(message: DefaultNodeInfoOther): unknown {
    const obj: any = {};
    message.txIndex !== undefined && (obj.txIndex = message.txIndex);
    message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DefaultNodeInfoOther>, I>>(object: I): DefaultNodeInfoOther {
    const message = createBaseDefaultNodeInfoOther();
    message.txIndex = object.txIndex ?? undefined;
    message.rpcAddress = object.rpcAddress ?? undefined;
    return message;
  },
};
