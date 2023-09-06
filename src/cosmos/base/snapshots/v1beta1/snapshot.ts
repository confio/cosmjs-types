/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.base.snapshots.v1beta1";
/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Metadata;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
  /** SHA-256 chunk hashes */
  chunkHashes: Uint8Array[];
}
/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotItem {
  store?: SnapshotStoreItem;
  iavl?: SnapshotIAVLItem;
  extension?: SnapshotExtensionMeta;
  extensionPayload?: SnapshotExtensionPayload;
  /** @deprecated */
  kv?: SnapshotKVItem;
  /** @deprecated */
  schema?: SnapshotSchema;
}
/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotStoreItem {
  name: string;
}
/**
 * SnapshotIAVLItem is an exported IAVL node.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotIAVLItem {
  key: Uint8Array;
  value: Uint8Array;
  /** version is block height */
  version: Long;
  /** height is depth of the tree. */
  height: number;
}
/**
 * SnapshotExtensionMeta contains metadata about an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionMeta {
  name: string;
  format: number;
}
/**
 * SnapshotExtensionPayload contains payloads of an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 */
export interface SnapshotExtensionPayload {
  payload: Uint8Array;
}
/**
 * SnapshotKVItem is an exported Key/Value Pair
 *
 * Since: cosmos-sdk 0.46
 * Deprecated: This message was part of store/v2alpha1 which has been deleted from v0.47.
 */
/** @deprecated */
export interface SnapshotKVItem {
  key: Uint8Array;
  value: Uint8Array;
}
/**
 * SnapshotSchema is an exported schema of smt store
 *
 * Since: cosmos-sdk 0.46
 * Deprecated: This message was part of store/v2alpha1 which has been deleted from v0.47.
 */
/** @deprecated */
export interface SnapshotSchema {
  keys: Uint8Array[];
}
function createBaseSnapshot(): Snapshot {
  return {
    height: Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: Metadata.fromPartial({}),
  };
}
export const Snapshot = {
  encode(message: Snapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64() as Long;
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Snapshot {
    const obj = createBaseSnapshot();
    if (isSet(object.height)) obj.height = Long.fromValue(object.height);
    if (isSet(object.format)) obj.format = Number(object.format);
    if (isSet(object.chunks)) obj.chunks = Number(object.chunks);
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    if (isSet(object.metadata)) obj.metadata = Metadata.fromJSON(object.metadata);
    return obj;
  },
  toJSON(message: Snapshot): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot {
    const message = createBaseSnapshot();
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromValue(object.height);
    }
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    }
    return message;
  },
};
function createBaseMetadata(): Metadata {
  return {
    chunkHashes: [],
  };
}
export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chunkHashes) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunkHashes.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Metadata {
    const obj = createBaseMetadata();
    if (Array.isArray(object?.chunkHashes))
      obj.chunkHashes = object.chunkHashes.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: Metadata): unknown {
    const obj: any = {};
    if (message.chunkHashes) {
      obj.chunkHashes = message.chunkHashes.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.chunkHashes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.chunkHashes = object.chunkHashes?.map((e) => e) || [];
    return message;
  },
};
function createBaseSnapshotItem(): SnapshotItem {
  return {
    store: undefined,
    iavl: undefined,
    extension: undefined,
    extensionPayload: undefined,
    kv: undefined,
    schema: undefined,
  };
}
export const SnapshotItem = {
  encode(message: SnapshotItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.store !== undefined) {
      SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
    }
    if (message.iavl !== undefined) {
      SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
    }
    if (message.extension !== undefined) {
      SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
    }
    if (message.extensionPayload !== undefined) {
      SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
    }
    if (message.kv !== undefined) {
      SnapshotKVItem.encode(message.kv, writer.uint32(42).fork()).ldelim();
    }
    if (message.schema !== undefined) {
      SnapshotSchema.encode(message.schema, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.store = SnapshotStoreItem.decode(reader, reader.uint32());
          break;
        case 2:
          message.iavl = SnapshotIAVLItem.decode(reader, reader.uint32());
          break;
        case 3:
          message.extension = SnapshotExtensionMeta.decode(reader, reader.uint32());
          break;
        case 4:
          message.extensionPayload = SnapshotExtensionPayload.decode(reader, reader.uint32());
          break;
        case 5:
          message.kv = SnapshotKVItem.decode(reader, reader.uint32());
          break;
        case 6:
          message.schema = SnapshotSchema.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotItem {
    const obj = createBaseSnapshotItem();
    if (isSet(object.store)) obj.store = SnapshotStoreItem.fromJSON(object.store);
    if (isSet(object.iavl)) obj.iavl = SnapshotIAVLItem.fromJSON(object.iavl);
    if (isSet(object.extension)) obj.extension = SnapshotExtensionMeta.fromJSON(object.extension);
    if (isSet(object.extensionPayload))
      obj.extensionPayload = SnapshotExtensionPayload.fromJSON(object.extensionPayload);
    if (isSet(object.kv)) obj.kv = SnapshotKVItem.fromJSON(object.kv);
    if (isSet(object.schema)) obj.schema = SnapshotSchema.fromJSON(object.schema);
    return obj;
  },
  toJSON(message: SnapshotItem): unknown {
    const obj: any = {};
    message.store !== undefined &&
      (obj.store = message.store ? SnapshotStoreItem.toJSON(message.store) : undefined);
    message.iavl !== undefined &&
      (obj.iavl = message.iavl ? SnapshotIAVLItem.toJSON(message.iavl) : undefined);
    message.extension !== undefined &&
      (obj.extension = message.extension ? SnapshotExtensionMeta.toJSON(message.extension) : undefined);
    message.extensionPayload !== undefined &&
      (obj.extensionPayload = message.extensionPayload
        ? SnapshotExtensionPayload.toJSON(message.extensionPayload)
        : undefined);
    message.kv !== undefined && (obj.kv = message.kv ? SnapshotKVItem.toJSON(message.kv) : undefined);
    message.schema !== undefined &&
      (obj.schema = message.schema ? SnapshotSchema.toJSON(message.schema) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotItem>, I>>(object: I): SnapshotItem {
    const message = createBaseSnapshotItem();
    if (object.store !== undefined && object.store !== null) {
      message.store = SnapshotStoreItem.fromPartial(object.store);
    }
    if (object.iavl !== undefined && object.iavl !== null) {
      message.iavl = SnapshotIAVLItem.fromPartial(object.iavl);
    }
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = SnapshotExtensionMeta.fromPartial(object.extension);
    }
    if (object.extensionPayload !== undefined && object.extensionPayload !== null) {
      message.extensionPayload = SnapshotExtensionPayload.fromPartial(object.extensionPayload);
    }
    if (object.kv !== undefined && object.kv !== null) {
      message.kv = SnapshotKVItem.fromPartial(object.kv);
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = SnapshotSchema.fromPartial(object.schema);
    }
    return message;
  },
};
function createBaseSnapshotStoreItem(): SnapshotStoreItem {
  return {
    name: "",
  };
}
export const SnapshotStoreItem = {
  encode(message: SnapshotStoreItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotStoreItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotStoreItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotStoreItem {
    const obj = createBaseSnapshotStoreItem();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: SnapshotStoreItem): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotStoreItem>, I>>(object: I): SnapshotStoreItem {
    const message = createBaseSnapshotStoreItem();
    message.name = object.name ?? "";
    return message;
  },
};
function createBaseSnapshotIAVLItem(): SnapshotIAVLItem {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    version: Long.ZERO,
    height: 0,
  };
}
export const SnapshotIAVLItem = {
  encode(message: SnapshotIAVLItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (!message.version.isZero()) {
      writer.uint32(24).int64(message.version);
    }
    if (message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotIAVLItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotIAVLItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.version = reader.int64() as Long;
          break;
        case 4:
          message.height = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotIAVLItem {
    const obj = createBaseSnapshotIAVLItem();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    if (isSet(object.version)) obj.version = Long.fromValue(object.version);
    if (isSet(object.height)) obj.height = Number(object.height);
    return obj;
  },
  toJSON(message: SnapshotIAVLItem): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotIAVLItem>, I>>(object: I): SnapshotIAVLItem {
    const message = createBaseSnapshotIAVLItem();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromValue(object.version);
    }
    message.height = object.height ?? 0;
    return message;
  },
};
function createBaseSnapshotExtensionMeta(): SnapshotExtensionMeta {
  return {
    name: "",
    format: 0,
  };
}
export const SnapshotExtensionMeta = {
  encode(message: SnapshotExtensionMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotExtensionMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotExtensionMeta {
    const obj = createBaseSnapshotExtensionMeta();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.format)) obj.format = Number(object.format);
    return obj;
  },
  toJSON(message: SnapshotExtensionMeta): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.format !== undefined && (obj.format = Math.round(message.format));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotExtensionMeta>, I>>(object: I): SnapshotExtensionMeta {
    const message = createBaseSnapshotExtensionMeta();
    message.name = object.name ?? "";
    message.format = object.format ?? 0;
    return message;
  },
};
function createBaseSnapshotExtensionPayload(): SnapshotExtensionPayload {
  return {
    payload: new Uint8Array(),
  };
}
export const SnapshotExtensionPayload = {
  encode(message: SnapshotExtensionPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotExtensionPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotExtensionPayload {
    const obj = createBaseSnapshotExtensionPayload();
    if (isSet(object.payload)) obj.payload = bytesFromBase64(object.payload);
    return obj;
  },
  toJSON(message: SnapshotExtensionPayload): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotExtensionPayload>, I>>(
    object: I,
  ): SnapshotExtensionPayload {
    const message = createBaseSnapshotExtensionPayload();
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};
function createBaseSnapshotKVItem(): SnapshotKVItem {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
  };
}
export const SnapshotKVItem = {
  encode(message: SnapshotKVItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotKVItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotKVItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotKVItem {
    const obj = createBaseSnapshotKVItem();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    return obj;
  },
  toJSON(message: SnapshotKVItem): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotKVItem>, I>>(object: I): SnapshotKVItem {
    const message = createBaseSnapshotKVItem();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};
function createBaseSnapshotSchema(): SnapshotSchema {
  return {
    keys: [],
  };
}
export const SnapshotSchema = {
  encode(message: SnapshotSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotSchema {
    const obj = createBaseSnapshotSchema();
    if (Array.isArray(object?.keys)) obj.keys = object.keys.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: SnapshotSchema): unknown {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SnapshotSchema>, I>>(object: I): SnapshotSchema {
    const message = createBaseSnapshotSchema();
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};
