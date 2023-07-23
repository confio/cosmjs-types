/* eslint-disable */
import { PageRequest, PageResponse } from "../../../base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import {
  Long,
  isSet,
  DeepPartial,
  Exact,
  bytesFromBase64,
  fromJsonTimestamp,
  base64FromBytes,
  fromTimestamp,
  Rpc,
} from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.orm.query.v1alpha1";
/** GetRequest is the Query/Get request type. */
export interface GetRequest {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  messageName: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed. If it is non-empty, it must
   * refer to an unique index.
   */
  index: string;
  /**
   * values are the values of the fields corresponding to the requested index.
   * There must be as many values provided as there are fields in the index and
   * these values must correspond to the index field types.
   */
  values: IndexValue[];
}
/** GetResponse is the Query/Get response type. */
export interface GetResponse {
  /**
   * result is the result of the get query. If no value is found, the gRPC
   * status code NOT_FOUND will be returned.
   */
  result?: Any;
}
/** ListRequest is the Query/List request type. */
export interface ListRequest {
  /** message_name is the fully-qualified message name of the ORM table being queried. */
  messageName: string;
  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed.
   */
  index: string;
  /** prefix defines a prefix query. */
  prefix?: ListRequest_Prefix;
  /** range defines a range query. */
  range?: ListRequest_Range;
  /** pagination is the pagination request. */
  pagination?: PageRequest;
}
/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_Prefix {
  /**
   * values specifies the index values for the prefix query.
   * It is valid to special a partial prefix with fewer values than
   * the number of fields in the index.
   */
  values: IndexValue[];
}
/** Range specifies the arguments to a range query. */
export interface ListRequest_Range {
  /**
   * start specifies the starting index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  start: IndexValue[];
  /**
   * end specifies the inclusive ending index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   */
  end: IndexValue[];
}
/** ListResponse is the Query/List response type. */
export interface ListResponse {
  /** results are the results of the query. */
  results: Any[];
  /** pagination is the pagination response. */
  pagination?: PageResponse;
}
/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValue {
  /**
   * uint specifies a value for an uint32, fixed32, uint64, or fixed64
   * index field.
   */
  uint?: Long;
  /**
   * int64 specifies a value for an int32, sfixed32, int64, or sfixed64
   * index field.
   */
  int?: Long;
  /** str specifies a value for a string index field. */
  str?: string;
  /** bytes specifies a value for a bytes index field. */
  bytes?: Uint8Array;
  /** enum specifies a value for an enum index field. */
  enum?: string;
  /** bool specifies a value for a bool index field. */
  bool?: boolean;
  /** timestamp specifies a value for a timestamp index field. */
  timestamp?: Timestamp;
  /** duration specifies a value for a duration index field. */
  duration?: Duration;
}
function createBaseGetRequest(): GetRequest {
  return {
    messageName: "",
    index: "",
    values: [],
  };
}
export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.values) {
      IndexValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetRequest {
    return {
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      index: isSet(object.index) ? String(object.index) : "",
      values: Array.isArray(object?.values) ? object.values.map((e: any) => IndexValue.fromJSON(e)) : [],
    };
  },
  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    message.messageName !== undefined && (obj.messageName = message.messageName);
    message.index !== undefined && (obj.index = message.index);
    if (message.values) {
      obj.values = message.values.map((e) => (e ? IndexValue.toJSON(e) : undefined));
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetRequest>, I>>(object: I): GetRequest {
    const message = createBaseGetRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.values = object.values?.map((e) => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GetRequestAmino): GetRequest {
    return {
      messageName: object.message_name,
      index: object.index,
      values: Array.isArray(object?.values) ? object.values.map((e: any) => IndexValue.fromAmino(e)) : [],
    };
  },
  toAmino(message: GetRequest): GetRequestAmino {
    const obj: any = {};
    obj.message_name = message.messageName;
    obj.index = message.index;
    if (message.values) {
      obj.values = message.values.map((e) => (e ? IndexValue.toAmino(e) : undefined));
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromAminoMsg(object: GetRequestAminoMsg): GetRequest {
    return GetRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetRequest): GetRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetRequest",
      value: GetRequest.toAmino(message),
    };
  },
};
function createBaseGetResponse(): GetResponse {
  return {
    result: undefined,
  };
}
export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetResponse {
    return {
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined,
    };
  },
  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? Any.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.result =
      object.result !== undefined && object.result !== null ? Any.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: GetResponseAmino): GetResponse {
    return {
      result: object?.result ? Any.fromAmino(object.result) : undefined,
    };
  },
  toAmino(message: GetResponse): GetResponseAmino {
    const obj: any = {};
    obj.result = message.result ? Any.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetResponseAminoMsg): GetResponse {
    return GetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetResponse): GetResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetResponse",
      value: GetResponse.toAmino(message),
    };
  },
};
function createBaseListRequest(): ListRequest {
  return {
    messageName: "",
    index: "",
    prefix: undefined,
    range: undefined,
    pagination: undefined,
  };
}
export const ListRequest = {
  encode(message: ListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.prefix !== undefined) {
      ListRequest_Prefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    if (message.range !== undefined) {
      ListRequest_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.prefix = ListRequest_Prefix.decode(reader, reader.uint32());
          break;
        case 4:
          message.range = ListRequest_Range.decode(reader, reader.uint32());
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListRequest {
    return {
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      index: isSet(object.index) ? String(object.index) : "",
      prefix: isSet(object.prefix) ? ListRequest_Prefix.fromJSON(object.prefix) : undefined,
      range: isSet(object.range) ? ListRequest_Range.fromJSON(object.range) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },
  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    message.messageName !== undefined && (obj.messageName = message.messageName);
    message.index !== undefined && (obj.index = message.index);
    message.prefix !== undefined &&
      (obj.prefix = message.prefix ? ListRequest_Prefix.toJSON(message.prefix) : undefined);
    message.range !== undefined &&
      (obj.range = message.range ? ListRequest_Range.toJSON(message.range) : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListRequest>, I>>(object: I): ListRequest {
    const message = createBaseListRequest();
    message.messageName = object.messageName ?? "";
    message.index = object.index ?? "";
    message.prefix =
      object.prefix !== undefined && object.prefix !== null
        ? ListRequest_Prefix.fromPartial(object.prefix)
        : undefined;
    message.range =
      object.range !== undefined && object.range !== null
        ? ListRequest_Range.fromPartial(object.range)
        : undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: ListRequestAmino): ListRequest {
    return {
      messageName: object.message_name,
      index: object.index,
      prefix: object?.prefix ? ListRequest_Prefix.fromAmino(object.prefix) : undefined,
      range: object?.range ? ListRequest_Range.fromAmino(object.range) : undefined,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
    };
  },
  toAmino(message: ListRequest): ListRequestAmino {
    const obj: any = {};
    obj.message_name = message.messageName;
    obj.index = message.index;
    obj.prefix = message.prefix ? ListRequest_Prefix.toAmino(message.prefix) : undefined;
    obj.range = message.range ? ListRequest_Range.toAmino(message.range) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListRequestAminoMsg): ListRequest {
    return ListRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListRequest): ListRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListRequest",
      value: ListRequest.toAmino(message),
    };
  },
};
function createBaseListRequest_Prefix(): ListRequest_Prefix {
  return {
    values: [],
  };
}
export const ListRequest_Prefix = {
  encode(message: ListRequest_Prefix, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      IndexValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest_Prefix {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Prefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListRequest_Prefix {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => IndexValue.fromJSON(e)) : [],
    };
  },
  toJSON(message: ListRequest_Prefix): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => (e ? IndexValue.toJSON(e) : undefined));
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListRequest_Prefix>, I>>(object: I): ListRequest_Prefix {
    const message = createBaseListRequest_Prefix();
    message.values = object.values?.map((e) => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListRequest_PrefixAmino): ListRequest_Prefix {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => IndexValue.fromAmino(e)) : [],
    };
  },
  toAmino(message: ListRequest_Prefix): ListRequest_PrefixAmino {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => (e ? IndexValue.toAmino(e) : undefined));
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListRequest_PrefixAminoMsg): ListRequest_Prefix {
    return ListRequest_Prefix.fromAmino(object.value);
  },
  toAminoMsg(message: ListRequest_Prefix): ListRequest_PrefixAminoMsg {
    return {
      type: "cosmos-sdk/Prefix",
      value: ListRequest_Prefix.toAmino(message),
    };
  },
};
function createBaseListRequest_Range(): ListRequest_Range {
  return {
    start: [],
    end: [],
  };
}
export const ListRequest_Range = {
  encode(message: ListRequest_Range, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.start) {
      IndexValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.end) {
      IndexValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest_Range {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest_Range();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start.push(IndexValue.decode(reader, reader.uint32()));
          break;
        case 2:
          message.end.push(IndexValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListRequest_Range {
    return {
      start: Array.isArray(object?.start) ? object.start.map((e: any) => IndexValue.fromJSON(e)) : [],
      end: Array.isArray(object?.end) ? object.end.map((e: any) => IndexValue.fromJSON(e)) : [],
    };
  },
  toJSON(message: ListRequest_Range): unknown {
    const obj: any = {};
    if (message.start) {
      obj.start = message.start.map((e) => (e ? IndexValue.toJSON(e) : undefined));
    } else {
      obj.start = [];
    }
    if (message.end) {
      obj.end = message.end.map((e) => (e ? IndexValue.toJSON(e) : undefined));
    } else {
      obj.end = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListRequest_Range>, I>>(object: I): ListRequest_Range {
    const message = createBaseListRequest_Range();
    message.start = object.start?.map((e) => IndexValue.fromPartial(e)) || [];
    message.end = object.end?.map((e) => IndexValue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListRequest_RangeAmino): ListRequest_Range {
    return {
      start: Array.isArray(object?.start) ? object.start.map((e: any) => IndexValue.fromAmino(e)) : [],
      end: Array.isArray(object?.end) ? object.end.map((e: any) => IndexValue.fromAmino(e)) : [],
    };
  },
  toAmino(message: ListRequest_Range): ListRequest_RangeAmino {
    const obj: any = {};
    if (message.start) {
      obj.start = message.start.map((e) => (e ? IndexValue.toAmino(e) : undefined));
    } else {
      obj.start = [];
    }
    if (message.end) {
      obj.end = message.end.map((e) => (e ? IndexValue.toAmino(e) : undefined));
    } else {
      obj.end = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListRequest_RangeAminoMsg): ListRequest_Range {
    return ListRequest_Range.fromAmino(object.value);
  },
  toAminoMsg(message: ListRequest_Range): ListRequest_RangeAminoMsg {
    return {
      type: "cosmos-sdk/Range",
      value: ListRequest_Range.toAmino(message),
    };
  },
};
function createBaseListResponse(): ListResponse {
  return {
    results: [],
    pagination: undefined,
  };
}
export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },
  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.results = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListResponse>, I>>(object: I): ListResponse {
    const message = createBaseListResponse();
    message.results = object.results?.map((e) => Any.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: ListResponseAmino): ListResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Any.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
    };
  },
  toAmino(message: ListResponse): ListResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => (e ? Any.toAmino(e) : undefined));
    } else {
      obj.results = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListResponseAminoMsg): ListResponse {
    return ListResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListResponse): ListResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListResponse",
      value: ListResponse.toAmino(message),
    };
  },
};
function createBaseIndexValue(): IndexValue {
  return {
    uint: undefined,
    int: undefined,
    str: undefined,
    bytes: undefined,
    enum: undefined,
    bool: undefined,
    timestamp: undefined,
    duration: undefined,
  };
}
export const IndexValue = {
  encode(message: IndexValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uint !== undefined) {
      writer.uint32(8).uint64(message.uint);
    }
    if (message.int !== undefined) {
      writer.uint32(16).int64(message.int);
    }
    if (message.str !== undefined) {
      writer.uint32(26).string(message.str);
    }
    if (message.bytes !== undefined) {
      writer.uint32(34).bytes(message.bytes);
    }
    if (message.enum !== undefined) {
      writer.uint32(42).string(message.enum);
    }
    if (message.bool !== undefined) {
      writer.uint32(48).bool(message.bool);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IndexValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uint = reader.uint64() as Long;
          break;
        case 2:
          message.int = reader.int64() as Long;
          break;
        case 3:
          message.str = reader.string();
          break;
        case 4:
          message.bytes = reader.bytes();
          break;
        case 5:
          message.enum = reader.string();
          break;
        case 6:
          message.bool = reader.bool();
          break;
        case 7:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IndexValue {
    return {
      uint: isSet(object.uint) ? Long.fromValue(object.uint) : undefined,
      int: isSet(object.int) ? Long.fromValue(object.int) : undefined,
      str: isSet(object.str) ? String(object.str) : undefined,
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : undefined,
      enum: isSet(object.enum) ? String(object.enum) : undefined,
      bool: isSet(object.bool) ? Boolean(object.bool) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
    };
  },
  toJSON(message: IndexValue): unknown {
    const obj: any = {};
    message.uint !== undefined && (obj.uint = (message.uint || undefined).toString());
    message.int !== undefined && (obj.int = (message.int || undefined).toString());
    message.str !== undefined && (obj.str = message.str);
    message.bytes !== undefined &&
      (obj.bytes = message.bytes !== undefined ? base64FromBytes(message.bytes) : undefined);
    message.enum !== undefined && (obj.enum = message.enum);
    message.bool !== undefined && (obj.bool = message.bool);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.duration !== undefined &&
      (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IndexValue>, I>>(object: I): IndexValue {
    const message = createBaseIndexValue();
    message.uint =
      object.uint !== undefined && object.uint !== null ? Long.fromValue(object.uint) : undefined;
    message.int = object.int !== undefined && object.int !== null ? Long.fromValue(object.int) : undefined;
    message.str = object.str ?? undefined;
    message.bytes = object.bytes ?? undefined;
    message.enum = object.enum ?? undefined;
    message.bool = object.bool ?? undefined;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Timestamp.fromPartial(object.timestamp)
        : undefined;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    return message;
  },
  fromAmino(object: IndexValueAmino): IndexValue {
    return {
      uint: object?.uint ? Long.fromString(object.uint) : undefined,
      int: object?.int ? Long.fromString(object.int) : undefined,
      str: object?.str,
      bytes: object?.bytes,
      enum: object?.enum,
      bool: object?.bool,
      timestamp: object?.timestamp ? Timestamp.fromAmino(object.timestamp) : undefined,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
    };
  },
  toAmino(message: IndexValue): IndexValueAmino {
    const obj: any = {};
    obj.uint = message.uint ? message.uint.toString() : undefined;
    obj.int = message.int ? message.int.toString() : undefined;
    obj.str = message.str;
    obj.bytes = message.bytes;
    obj.enum = message.enum;
    obj.bool = message.bool;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: IndexValueAminoMsg): IndexValue {
    return IndexValue.fromAmino(object.value);
  },
  toAminoMsg(message: IndexValue): IndexValueAminoMsg {
    return {
      type: "cosmos-sdk/IndexValue",
      value: IndexValue.toAmino(message),
    };
  },
};
/** Query is a generic gRPC service for querying ORM data. */
export interface Query {
  /** Get queries an ORM table against an unique index. */
  Get(request: GetRequest): Promise<GetResponse>;
  /** List queries an ORM table against an index. */
  List(request: ListRequest): Promise<ListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Get = this.Get.bind(this);
    this.List = this.List.bind(this);
  }
  Get(request: GetRequest): Promise<GetResponse> {
    const data = GetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "Get", data);
    return promise.then((data) => GetResponse.decode(new _m0.Reader(data)));
  }
  List(request: ListRequest): Promise<ListResponse> {
    const data = ListRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "List", data);
    return promise.then((data) => ListResponse.decode(new _m0.Reader(data)));
  }
}
