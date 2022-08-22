import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import {
  Validator,
  DelegationResponse,
  UnbondingDelegation,
  RedelegationResponse,
  HistoricalInfo,
  Pool,
  Params,
} from "./staking";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryValidatorsRequest,
  QueryValidatorsResponse,
  QueryValidatorRequest,
  QueryValidatorResponse,
  QueryValidatorDelegationsRequest,
  QueryValidatorDelegationsResponse,
  QueryValidatorUnbondingDelegationsRequest,
  QueryValidatorUnbondingDelegationsResponse,
  QueryDelegationRequest,
  QueryDelegationResponse,
  QueryUnbondingDelegationRequest,
  QueryUnbondingDelegationResponse,
  QueryDelegatorDelegationsRequest,
  QueryDelegatorDelegationsResponse,
  QueryDelegatorUnbondingDelegationsRequest,
  QueryDelegatorUnbondingDelegationsResponse,
  QueryRedelegationsRequest,
  QueryRedelegationsResponse,
  QueryDelegatorValidatorsRequest,
  QueryDelegatorValidatorsResponse,
  QueryDelegatorValidatorRequest,
  QueryDelegatorValidatorResponse,
  QueryHistoricalInfoRequest,
  QueryHistoricalInfoResponse,
  QueryPoolRequest,
  QueryPoolResponse,
  QueryParamsRequest,
  QueryParamsResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
  /*Validators queries all validators that match the given status.*/

  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
  /*Validator queries validator info for given validator address.*/

  ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
  /*ValidatorDelegations queries delegate info for given validator.*/

  ValidatorUnbondingDelegations(
    request: QueryValidatorUnbondingDelegationsRequest,
  ): Promise<QueryValidatorUnbondingDelegationsResponse>;
  /*ValidatorUnbondingDelegations queries unbonding delegations of a validator.*/

  Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
  /*Delegation queries delegate info for given validator delegator pair.*/

  UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
  /*UnbondingDelegation queries unbonding info for given validator delegator
  pair.*/

  DelegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
  /*DelegatorDelegations queries all delegations of a given delegator address.*/

  DelegatorUnbondingDelegations(
    request: QueryDelegatorUnbondingDelegationsRequest,
  ): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  /*DelegatorUnbondingDelegations queries all unbonding delegations of a given
  delegator address.*/

  Redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
  /*Redelegations queries redelegations of given address.*/

  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /*DelegatorValidators queries all validators info for given delegator
  address.*/

  DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
  /*DelegatorValidator queries validator info for given delegator validator
  pair.*/

  HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
  /*HistoricalInfo queries the historical info for given height.*/

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /*Pool queries the pool info.*/

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Parameters queries the staking parameters.*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Validators = this.Validators.bind(this);
    this.Validator = this.Validator.bind(this);
    this.ValidatorDelegations = this.ValidatorDelegations.bind(this);
    this.ValidatorUnbondingDelegations = this.ValidatorUnbondingDelegations.bind(this);
    this.Delegation = this.Delegation.bind(this);
    this.UnbondingDelegation = this.UnbondingDelegation.bind(this);
    this.DelegatorDelegations = this.DelegatorDelegations.bind(this);
    this.DelegatorUnbondingDelegations = this.DelegatorUnbondingDelegations.bind(this);
    this.Redelegations = this.Redelegations.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorValidator = this.DelegatorValidator.bind(this);
    this.HistoricalInfo = this.HistoricalInfo.bind(this);
    this.Pool = this.Pool.bind(this);
    this.Params = this.Params.bind(this);
  }

  Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then((data) => QueryValidatorsResponse.decode(new _m0.Reader(data)));
  }

  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then((data) => QueryValidatorResponse.decode(new _m0.Reader(data)));
  }

  ValidatorDelegations(
    request: QueryValidatorDelegationsRequest,
  ): Promise<QueryValidatorDelegationsResponse> {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then((data) => QueryValidatorDelegationsResponse.decode(new _m0.Reader(data)));
  }

  ValidatorUnbondingDelegations(
    request: QueryValidatorUnbondingDelegationsRequest,
  ): Promise<QueryValidatorUnbondingDelegationsResponse> {
    const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
    return promise.then((data) => QueryValidatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }

  Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse> {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then((data) => QueryDelegationResponse.decode(new _m0.Reader(data)));
  }

  UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then((data) => QueryUnbondingDelegationResponse.decode(new _m0.Reader(data)));
  }

  DelegatorDelegations(
    request: QueryDelegatorDelegationsRequest,
  ): Promise<QueryDelegatorDelegationsResponse> {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
    return promise.then((data) => QueryDelegatorDelegationsResponse.decode(new _m0.Reader(data)));
  }

  DelegatorUnbondingDelegations(
    request: QueryDelegatorUnbondingDelegationsRequest,
  ): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
    return promise.then((data) => QueryDelegatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }

  Redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
    return promise.then((data) => QueryRedelegationsResponse.decode(new _m0.Reader(data)));
  }

  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
    return promise.then((data) => QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
  }

  DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
    return promise.then((data) => QueryDelegatorValidatorResponse.decode(new _m0.Reader(data)));
  }

  HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then((data) => QueryHistoricalInfoResponse.decode(new _m0.Reader(data)));
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then((data) => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}
