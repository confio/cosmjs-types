import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import {
  Params,
  ValidatorOutstandingRewards,
  ValidatorAccumulatedCommission,
  ValidatorSlashEvent,
  DelegationDelegatorReward,
} from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryValidatorOutstandingRewardsRequest,
  QueryValidatorOutstandingRewardsResponse,
  QueryValidatorCommissionRequest,
  QueryValidatorCommissionResponse,
  QueryValidatorSlashesRequest,
  QueryValidatorSlashesResponse,
  QueryDelegationRewardsRequest,
  QueryDelegationRewardsResponse,
  QueryDelegationTotalRewardsRequest,
  QueryDelegationTotalRewardsResponse,
  QueryDelegatorValidatorsRequest,
  QueryDelegatorValidatorsResponse,
  QueryDelegatorWithdrawAddressRequest,
  QueryDelegatorWithdrawAddressResponse,
  QueryCommunityPoolRequest,
  QueryCommunityPoolResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params queries params of the distribution module.*/

  ValidatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
  ): Promise<QueryValidatorOutstandingRewardsResponse>;
  /*ValidatorOutstandingRewards queries rewards of a validator address.*/

  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
  /*ValidatorCommission queries accumulated commission for a validator.*/

  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
  /*ValidatorSlashes queries slash events of a validator.*/

  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
  /*DelegationRewards queries the total rewards accrued by a delegation.*/

  DelegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
  ): Promise<QueryDelegationTotalRewardsResponse>;
  /*DelegationTotalRewards queries the total rewards accrued by a each
  validator.*/

  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /*DelegatorValidators queries the validators of a delegator.*/

  DelegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
  ): Promise<QueryDelegatorWithdrawAddressResponse>;
  /*DelegatorWithdrawAddress queries withdraw address of a delegator.*/

  CommunityPool(request: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
  /*CommunityPool queries the community pool coins.*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ValidatorOutstandingRewards = this.ValidatorOutstandingRewards.bind(this);
    this.ValidatorCommission = this.ValidatorCommission.bind(this);
    this.ValidatorSlashes = this.ValidatorSlashes.bind(this);
    this.DelegationRewards = this.DelegationRewards.bind(this);
    this.DelegationTotalRewards = this.DelegationTotalRewards.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorWithdrawAddress = this.DelegatorWithdrawAddress.bind(this);
    this.CommunityPool = this.CommunityPool.bind(this);
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  ValidatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
  ): Promise<QueryValidatorOutstandingRewardsResponse> {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.distribution.v1beta1.Query",
      "ValidatorOutstandingRewards",
      data,
    );
    return promise.then((data) => QueryValidatorOutstandingRewardsResponse.decode(new _m0.Reader(data)));
  }

  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then((data) => QueryValidatorCommissionResponse.decode(new _m0.Reader(data)));
  }

  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then((data) => QueryValidatorSlashesResponse.decode(new _m0.Reader(data)));
  }

  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then((data) => QueryDelegationRewardsResponse.decode(new _m0.Reader(data)));
  }

  DelegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
  ): Promise<QueryDelegationTotalRewardsResponse> {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then((data) => QueryDelegationTotalRewardsResponse.decode(new _m0.Reader(data)));
  }

  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then((data) => QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
  }

  DelegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
  ): Promise<QueryDelegatorWithdrawAddressResponse> {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then((data) => QueryDelegatorWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }

  CommunityPool(request: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then((data) => QueryCommunityPoolResponse.decode(new _m0.Reader(data)));
  }
}
