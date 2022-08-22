import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Params, Metadata } from "./bank";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryBalanceRequest,
  QueryBalanceResponse,
  QueryAllBalancesRequest,
  QueryAllBalancesResponse,
  QuerySpendableBalancesRequest,
  QuerySpendableBalancesResponse,
  QueryTotalSupplyRequest,
  QueryTotalSupplyResponse,
  QuerySupplyOfRequest,
  QuerySupplyOfResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryDenomMetadataRequest,
  QueryDenomMetadataResponse,
  QueryDenomsMetadataRequest,
  QueryDenomsMetadataResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /*Balance queries the balance of a single coin for a single account.*/

  AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
  /*AllBalances queries the balance of all coins for a single account.*/

  SpendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
  /*SpendableBalances queries the spenable balance of all coins for a single
  account.*/

  TotalSupply(request: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /*TotalSupply queries the total supply of all coins.*/

  SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /*SupplyOf queries the supply of a single coin.*/

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params queries the parameters of x/bank module.*/

  DenomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
  /*DenomsMetadata queries the client metadata of a given coin denomination.*/

  DenomsMetadata(request: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
  /*DenomsMetadata queries the client metadata for all registered coin denominations.*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.AllBalances = this.AllBalances.bind(this);
    this.SpendableBalances = this.SpendableBalances.bind(this);
    this.TotalSupply = this.TotalSupply.bind(this);
    this.SupplyOf = this.SupplyOf.bind(this);
    this.Params = this.Params.bind(this);
    this.DenomMetadata = this.DenomMetadata.bind(this);
    this.DenomsMetadata = this.DenomsMetadata.bind(this);
  }

  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
    return promise.then((data) => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }

  AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
    return promise.then((data) => QueryAllBalancesResponse.decode(new _m0.Reader(data)));
  }

  SpendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
    const data = QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
    return promise.then((data) => QuerySpendableBalancesResponse.decode(new _m0.Reader(data)));
  }

  TotalSupply(request: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
    return promise.then((data) => QueryTotalSupplyResponse.decode(new _m0.Reader(data)));
  }

  SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
    return promise.then((data) => QuerySupplyOfResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  DenomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
    const data = QueryDenomMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
    return promise.then((data) => QueryDenomMetadataResponse.decode(new _m0.Reader(data)));
  }

  DenomsMetadata(request: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse> {
    const data = QueryDenomsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
    return promise.then((data) => QueryDenomsMetadataResponse.decode(new _m0.Reader(data)));
  }
}
