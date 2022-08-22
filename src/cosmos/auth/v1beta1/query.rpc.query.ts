import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params } from "./auth";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryAccountsRequest,
  QueryAccountsResponse,
  QueryAccountRequest,
  QueryAccountResponse,
  QueryParamsRequest,
  QueryParamsResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /*Accounts returns all the existing accounts
  
  Since: cosmos-sdk 0.43*/

  Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /*Account returns account details based on address.*/

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params queries all parameters.*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Accounts = this.Accounts.bind(this);
    this.Account = this.Account.bind(this);
    this.Params = this.Params.bind(this);
  }

  Accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
    return promise.then((data) => QueryAccountsResponse.decode(new _m0.Reader(data)));
  }

  Account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
    return promise.then((data) => QueryAccountResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}
