/* eslint-disable */
import { Config } from "./config";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.app.v1alpha1";
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
  /** config is the current app config. */
  config?: Config;
}
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}
export const QueryConfigRequest = {
  encode(_: QueryConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
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
  fromJSON(_: any): QueryConfigRequest {
    return {};
  },
  toJSON(_: QueryConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConfigRequest>, I>>(_: I): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  fromAmino(_: QueryConfigRequestAmino): QueryConfigRequest {
    return {};
  },
  toAmino(_: QueryConfigRequest): QueryConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryConfigRequestAminoMsg): QueryConfigRequest {
    return QueryConfigRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConfigRequest): QueryConfigRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConfigRequest",
      value: QueryConfigRequest.toAmino(message),
    };
  },
};
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: undefined,
  };
}
export const QueryConfigResponse = {
  encode(message: QueryConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConfigResponse {
    return {
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined,
    };
  },
  toJSON(message: QueryConfigResponse): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConfigResponse>, I>>(object: I): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config =
      object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
    return message;
  },
  fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse {
    return {
      config: object?.config ? Config.fromAmino(object.config) : undefined,
    };
  },
  toAmino(message: QueryConfigResponse): QueryConfigResponseAmino {
    const obj: any = {};
    obj.config = message.config ? Config.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConfigResponseAminoMsg): QueryConfigResponse {
    return QueryConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConfigResponse): QueryConfigResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConfigResponse",
      value: QueryConfigResponse.toAmino(message),
    };
  },
};
/** Query is the app module query service. */
export interface Query {
  /** Config returns the current app config. */
  Config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
  }
  Config(request: QueryConfigRequest = {}): Promise<QueryConfigResponse> {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.app.v1alpha1.Query", "Config", data);
    return promise.then((data) => QueryConfigResponse.decode(new _m0.Reader(data)));
  }
}
