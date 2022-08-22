import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, Params } from "./transfer";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryDenomTraceRequest,
  QueryDenomTraceResponse,
  QueryDenomTracesRequest,
  QueryDenomTracesResponse,
  QueryParamsRequest,
  QueryParamsResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
  /*DenomTrace queries a denomination trace information.*/

  DenomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
  /*DenomTraces queries all denomination traces.*/

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params queries all parameters of the ibc-transfer module.*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DenomTrace = this.DenomTrace.bind(this);
    this.DenomTraces = this.DenomTraces.bind(this);
    this.Params = this.Params.bind(this);
  }

  DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
    return promise.then((data) => QueryDenomTraceResponse.decode(new _m0.Reader(data)));
  }

  DenomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse> {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
    return promise.then((data) => QueryDenomTracesResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}
