import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant } from "./feegrant";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryAllowanceRequest,
  QueryAllowanceResponse,
  QueryAllowancesRequest,
  QueryAllowancesResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  Allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
  /*Allowance returns fee granted to the grantee by the granter.*/

  Allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
  /*Allowances returns all the grants for address.*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Allowance = this.Allowance.bind(this);
    this.Allowances = this.Allowances.bind(this);
  }

  Allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse> {
    const data = QueryAllowanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
    return promise.then((data) => QueryAllowanceResponse.decode(new _m0.Reader(data)));
  }

  Allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse> {
    const data = QueryAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
    return promise.then((data) => QueryAllowancesResponse.decode(new _m0.Reader(data)));
  }
}
