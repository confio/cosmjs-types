import { ParamChange } from "./params";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params queries a specific parameter of a module, given its subspace and
  key.*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.params.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}
