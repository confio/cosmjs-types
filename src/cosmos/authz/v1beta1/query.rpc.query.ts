import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAuthorization } from "./authz";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryGrantsRequest,
  QueryGrantsResponse,
  QueryGranterGrantsRequest,
  QueryGranterGrantsResponse,
  QueryGranteeGrantsRequest,
  QueryGranteeGrantsResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  Grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
  /*Returns list of `Authorization`, granted to the grantee by the granter.*/

  GranterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
  /*GranterGrants returns list of `GrantAuthorization`, granted by granter.
  
  Since: cosmos-sdk 0.45.2*/

  GranteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
  /*GranteeGrants returns a list of `GrantAuthorization` by grantee.
  
  Since: cosmos-sdk 0.45.2*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Grants = this.Grants.bind(this);
    this.GranterGrants = this.GranterGrants.bind(this);
    this.GranteeGrants = this.GranteeGrants.bind(this);
  }

  Grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse> {
    const data = QueryGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
    return promise.then((data) => QueryGrantsResponse.decode(new _m0.Reader(data)));
  }

  GranterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse> {
    const data = QueryGranterGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
    return promise.then((data) => QueryGranterGrantsResponse.decode(new _m0.Reader(data)));
  }

  GranteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse> {
    const data = QueryGranteeGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
    return promise.then((data) => QueryGranteeGrantsResponse.decode(new _m0.Reader(data)));
  }
}
