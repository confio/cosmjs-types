/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact, isSet, Rpc } from "../../../../helpers";
export const protobufPackage = "cosmos.base.node.v1beta1";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
  minimumGasPrice: string;
}
function createBaseConfigRequest(): ConfigRequest {
  return {};
}
export const ConfigRequest = {
  encode(_: ConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigRequest();
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
  fromJSON(_: any): ConfigRequest {
    return {};
  },
  toJSON(_: ConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConfigRequest>, I>>(_: I): ConfigRequest {
    const message = createBaseConfigRequest();
    return message;
  },
};
function createBaseConfigResponse(): ConfigResponse {
  return {
    minimumGasPrice: "",
  };
}
export const ConfigResponse = {
  encode(message: ConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimumGasPrice !== "") {
      writer.uint32(10).string(message.minimumGasPrice);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConfigResponse {
    return {
      minimumGasPrice: isSet(object.minimumGasPrice) ? String(object.minimumGasPrice) : "",
    };
  },
  toJSON(message: ConfigResponse): unknown {
    const obj: any = {};
    message.minimumGasPrice !== undefined && (obj.minimumGasPrice = message.minimumGasPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConfigResponse>, I>>(object: I): ConfigResponse {
    const message = createBaseConfigResponse();
    message.minimumGasPrice = object.minimumGasPrice ?? "";
    return message;
  },
};
/** Service defines the gRPC querier service for node related queries. */
export interface Service {
  /** Config queries for the operator configuration. */
  Config(request?: ConfigRequest): Promise<ConfigResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Config = this.Config.bind(this);
  }
  Config(request: ConfigRequest = {}): Promise<ConfigResponse> {
    const data = ConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Config", data);
    return promise.then((data) => ConfigResponse.decode(new _m0.Reader(data)));
  }
}
