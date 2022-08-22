import { Params } from "./mint";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryInflationRequest,
  QueryInflationResponse,
  QueryAnnualProvisionsRequest,
  QueryAnnualProvisionsResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params returns the total set of minting parameters.*/

  Inflation(request: QueryInflationRequest): Promise<QueryInflationResponse>;
  /*Inflation returns the current minting inflation value.*/

  AnnualProvisions(request: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
  /*AnnualProvisions current minting annual provisions value.*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Inflation = this.Inflation.bind(this);
    this.AnnualProvisions = this.AnnualProvisions.bind(this);
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Inflation(request: QueryInflationRequest): Promise<QueryInflationResponse> {
    const data = QueryInflationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Inflation", data);
    return promise.then((data) => QueryInflationResponse.decode(new _m0.Reader(data)));
  }

  AnnualProvisions(request: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse> {
    const data = QueryAnnualProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "AnnualProvisions", data);
    return promise.then((data) => QueryAnnualProvisionsResponse.decode(new _m0.Reader(data)));
  }
}
