/* eslint-disable */
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import {
  Params,
  ValidatorOutstandingRewards,
  ValidatorAccumulatedCommission,
  ValidatorSlashEvent,
  DelegationDelegatorReward,
} from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.distribution.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/** QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
/** QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoResponse {
  /** operator_address defines the validator operator address. */
  operatorAddress: string;
  /** self_bond_rewards defines the self delegations rewards. */
  selfBondRewards: DecCoin[];
  /** commission defines the commission the validator received. */
  commission: DecCoin[];
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
  rewards: ValidatorOutstandingRewards;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
  /** commission defines the commission the validator received. */
  commission: ValidatorAccumulatedCommission;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
  /** starting_height defines the optional starting height to query the slashes. */
  startingHeight: bigint;
  /** starting_height defines the optional ending height to query the slashes. */
  endingHeight: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
  /** slashes defines the slashes the validator received. */
  slashes: ValidatorSlashEvent[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
  /** rewards defines the rewards accrued by a delegation. */
  rewards: DecCoin[];
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators a delegator is delegating for. */
  validators: string[];
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdrawAddress: string;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryValidatorDistributionInfoRequest(): QueryValidatorDistributionInfoRequest {
  return {
    validatorAddress: "",
  };
}
export const QueryValidatorDistributionInfoRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest",
  encode(
    message: QueryValidatorDistributionInfoRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDistributionInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorDistributionInfoRequest {
    const obj = createBaseQueryValidatorDistributionInfoRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: QueryValidatorDistributionInfoRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorDistributionInfoRequest>, I>>(
    object: I,
  ): QueryValidatorDistributionInfoRequest {
    const message = createBaseQueryValidatorDistributionInfoRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};
function createBaseQueryValidatorDistributionInfoResponse(): QueryValidatorDistributionInfoResponse {
  return {
    operatorAddress: "",
    selfBondRewards: [],
    commission: [],
  };
}
export const QueryValidatorDistributionInfoResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse",
  encode(
    message: QueryValidatorDistributionInfoResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    for (const v of message.selfBondRewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDistributionInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.selfBondRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorDistributionInfoResponse {
    const obj = createBaseQueryValidatorDistributionInfoResponse();
    if (isSet(object.operatorAddress)) obj.operatorAddress = String(object.operatorAddress);
    if (Array.isArray(object?.selfBondRewards))
      obj.selfBondRewards = object.selfBondRewards.map((e: any) => DecCoin.fromJSON(e));
    if (Array.isArray(object?.commission))
      obj.commission = object.commission.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryValidatorDistributionInfoResponse): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    if (message.selfBondRewards) {
      obj.selfBondRewards = message.selfBondRewards.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.selfBondRewards = [];
    }
    if (message.commission) {
      obj.commission = message.commission.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorDistributionInfoResponse>, I>>(
    object: I,
  ): QueryValidatorDistributionInfoResponse {
    const message = createBaseQueryValidatorDistributionInfoResponse();
    message.operatorAddress = object.operatorAddress ?? "";
    message.selfBondRewards = object.selfBondRewards?.map((e) => DecCoin.fromPartial(e)) || [];
    message.commission = object.commission?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryValidatorOutstandingRewardsRequest(): QueryValidatorOutstandingRewardsRequest {
  return {
    validatorAddress: "",
  };
}
export const QueryValidatorOutstandingRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
  encode(
    message: QueryValidatorOutstandingRewardsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorOutstandingRewardsRequest {
    const obj = createBaseQueryValidatorOutstandingRewardsRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorOutstandingRewardsRequest>, I>>(
    object: I,
  ): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};
function createBaseQueryValidatorOutstandingRewardsResponse(): QueryValidatorOutstandingRewardsResponse {
  return {
    rewards: ValidatorOutstandingRewards.fromPartial({}),
  };
}
export const QueryValidatorOutstandingRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
  encode(
    message: QueryValidatorOutstandingRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorOutstandingRewardsResponse {
    const obj = createBaseQueryValidatorOutstandingRewardsResponse();
    if (isSet(object.rewards)) obj.rewards = ValidatorOutstandingRewards.fromJSON(object.rewards);
    return obj;
  },
  toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown {
    const obj: any = {};
    message.rewards !== undefined &&
      (obj.rewards = message.rewards ? ValidatorOutstandingRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorOutstandingRewardsResponse>, I>>(
    object: I,
  ): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorOutstandingRewards.fromPartial(object.rewards);
    }
    return message;
  },
};
function createBaseQueryValidatorCommissionRequest(): QueryValidatorCommissionRequest {
  return {
    validatorAddress: "",
  };
}
export const QueryValidatorCommissionRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
  encode(
    message: QueryValidatorCommissionRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorCommissionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorCommissionRequest {
    const obj = createBaseQueryValidatorCommissionRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: QueryValidatorCommissionRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorCommissionRequest>, I>>(
    object: I,
  ): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};
function createBaseQueryValidatorCommissionResponse(): QueryValidatorCommissionResponse {
  return {
    commission: ValidatorAccumulatedCommission.fromPartial({}),
  };
}
export const QueryValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
  encode(
    message: QueryValidatorCommissionResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorCommissionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorCommissionResponse {
    const obj = createBaseQueryValidatorCommissionResponse();
    if (isSet(object.commission)) obj.commission = ValidatorAccumulatedCommission.fromJSON(object.commission);
    return obj;
  },
  toJSON(message: QueryValidatorCommissionResponse): unknown {
    const obj: any = {};
    message.commission !== undefined &&
      (obj.commission = message.commission
        ? ValidatorAccumulatedCommission.toJSON(message.commission)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorCommissionResponse>, I>>(
    object: I,
  ): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = ValidatorAccumulatedCommission.fromPartial(object.commission);
    }
    return message;
  },
};
function createBaseQueryValidatorSlashesRequest(): QueryValidatorSlashesRequest {
  return {
    validatorAddress: "",
    startingHeight: BigInt(0),
    endingHeight: BigInt(0),
    pagination: undefined,
  };
}
export const QueryValidatorSlashesRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
  encode(message: QueryValidatorSlashesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.startingHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingHeight);
    }
    if (message.endingHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.endingHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorSlashesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.startingHeight = reader.uint64();
          break;
        case 3:
          message.endingHeight = reader.uint64();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorSlashesRequest {
    const obj = createBaseQueryValidatorSlashesRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.startingHeight)) obj.startingHeight = BigInt(object.startingHeight.toString());
    if (isSet(object.endingHeight)) obj.endingHeight = BigInt(object.endingHeight.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorSlashesRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.startingHeight !== undefined &&
      (obj.startingHeight = (message.startingHeight || BigInt(0)).toString());
    message.endingHeight !== undefined && (obj.endingHeight = (message.endingHeight || BigInt(0)).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorSlashesRequest>, I>>(
    object: I,
  ): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.startingHeight !== undefined && object.startingHeight !== null) {
      message.startingHeight = BigInt(object.startingHeight.toString());
    }
    if (object.endingHeight !== undefined && object.endingHeight !== null) {
      message.endingHeight = BigInt(object.endingHeight.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryValidatorSlashesResponse(): QueryValidatorSlashesResponse {
  return {
    slashes: [],
    pagination: undefined,
  };
}
export const QueryValidatorSlashesResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
  encode(message: QueryValidatorSlashesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorSlashesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorSlashesResponse {
    const obj = createBaseQueryValidatorSlashesResponse();
    if (Array.isArray(object?.slashes))
      obj.slashes = object.slashes.map((e: any) => ValidatorSlashEvent.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorSlashesResponse): unknown {
    const obj: any = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map((e) => (e ? ValidatorSlashEvent.toJSON(e) : undefined));
    } else {
      obj.slashes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorSlashesResponse>, I>>(
    object: I,
  ): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map((e) => ValidatorSlashEvent.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryDelegationRewardsRequest(): QueryDelegationRewardsRequest {
  return {
    delegatorAddress: "",
    validatorAddress: "",
  };
}
export const QueryDelegationRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
  encode(message: QueryDelegationRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationRewardsRequest {
    const obj = createBaseQueryDelegationRewardsRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegationRewardsRequest>, I>>(
    object: I,
  ): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};
function createBaseQueryDelegationRewardsResponse(): QueryDelegationRewardsResponse {
  return {
    rewards: [],
  };
}
export const QueryDelegationRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
  encode(
    message: QueryDelegationRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationRewardsResponse {
    const obj = createBaseQueryDelegationRewardsResponse();
    if (Array.isArray(object?.rewards)) obj.rewards = object.rewards.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegationRewardsResponse>, I>>(
    object: I,
  ): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryDelegationTotalRewardsRequest(): QueryDelegationTotalRewardsRequest {
  return {
    delegatorAddress: "",
  };
}
export const QueryDelegationTotalRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
  encode(
    message: QueryDelegationTotalRewardsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationTotalRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationTotalRewardsRequest {
    const obj = createBaseQueryDelegationTotalRewardsRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegationTotalRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegationTotalRewardsRequest>, I>>(
    object: I,
  ): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseQueryDelegationTotalRewardsResponse(): QueryDelegationTotalRewardsResponse {
  return {
    rewards: [],
    total: [],
  };
}
export const QueryDelegationTotalRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
  encode(
    message: QueryDelegationTotalRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationTotalRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationTotalRewardsResponse {
    const obj = createBaseQueryDelegationTotalRewardsResponse();
    if (Array.isArray(object?.rewards))
      obj.rewards = object.rewards.map((e: any) => DelegationDelegatorReward.fromJSON(e));
    if (Array.isArray(object?.total)) obj.total = object.total.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryDelegationTotalRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? DelegationDelegatorReward.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegationTotalRewardsResponse>, I>>(
    object: I,
  ): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map((e) => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegatorAddress: "",
  };
}
export const QueryDelegatorValidatorsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
  encode(
    message: QueryDelegatorValidatorsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    const obj = createBaseQueryDelegatorValidatorsRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsRequest>, I>>(
    object: I,
  ): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: [],
  };
}
export const QueryDelegatorValidatorsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
  encode(
    message: QueryDelegatorValidatorsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    const obj = createBaseQueryDelegatorValidatorsResponse();
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsResponse>, I>>(
    object: I,
  ): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => e) || [];
    return message;
  },
};
function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
  return {
    delegatorAddress: "",
  };
}
export const QueryDelegatorWithdrawAddressRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
  encode(
    message: QueryDelegatorWithdrawAddressRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorWithdrawAddressRequest {
    const obj = createBaseQueryDelegatorWithdrawAddressRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressRequest>, I>>(
    object: I,
  ): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};
function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
  return {
    withdrawAddress: "",
  };
}
export const QueryDelegatorWithdrawAddressResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
  encode(
    message: QueryDelegatorWithdrawAddressResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorWithdrawAddressResponse {
    const obj = createBaseQueryDelegatorWithdrawAddressResponse();
    if (isSet(object.withdrawAddress)) obj.withdrawAddress = String(object.withdrawAddress);
    return obj;
  },
  toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown {
    const obj: any = {};
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDelegatorWithdrawAddressResponse>, I>>(
    object: I,
  ): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
};
function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return {};
}
export const QueryCommunityPoolRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
  encode(_: QueryCommunityPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();
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
  fromJSON(_: any): QueryCommunityPoolRequest {
    const obj = createBaseQueryCommunityPoolRequest();
    return obj;
  },
  toJSON(_: QueryCommunityPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCommunityPoolRequest>, I>>(_: I): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
};
function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return {
    pool: [],
  };
}
export const QueryCommunityPoolResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
  encode(message: QueryCommunityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCommunityPoolResponse {
    const obj = createBaseQueryCommunityPoolResponse();
    if (Array.isArray(object?.pool)) obj.pool = object.pool.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryCommunityPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.pool = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCommunityPoolResponse>, I>>(
    object: I,
  ): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
  /** Params queries params of the distribution module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
  ValidatorDistributionInfo(
    request: QueryValidatorDistributionInfoRequest,
  ): Promise<QueryValidatorDistributionInfoResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  ValidatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
  ): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */
  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  DelegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
  ): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */
  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  DelegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
  ): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */
  CommunityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ValidatorDistributionInfo = this.ValidatorDistributionInfo.bind(this);
    this.ValidatorOutstandingRewards = this.ValidatorOutstandingRewards.bind(this);
    this.ValidatorCommission = this.ValidatorCommission.bind(this);
    this.ValidatorSlashes = this.ValidatorSlashes.bind(this);
    this.DelegationRewards = this.DelegationRewards.bind(this);
    this.DelegationTotalRewards = this.DelegationTotalRewards.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorWithdrawAddress = this.DelegatorWithdrawAddress.bind(this);
    this.CommunityPool = this.CommunityPool.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  ValidatorDistributionInfo(
    request: QueryValidatorDistributionInfoRequest,
  ): Promise<QueryValidatorDistributionInfoResponse> {
    const data = QueryValidatorDistributionInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorDistributionInfo", data);
    return promise.then((data) => QueryValidatorDistributionInfoResponse.decode(new BinaryReader(data)));
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
    return promise.then((data) => QueryValidatorOutstandingRewardsResponse.decode(new BinaryReader(data)));
  }
  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then((data) => QueryValidatorCommissionResponse.decode(new BinaryReader(data)));
  }
  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then((data) => QueryValidatorSlashesResponse.decode(new BinaryReader(data)));
  }
  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then((data) => QueryDelegationRewardsResponse.decode(new BinaryReader(data)));
  }
  DelegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
  ): Promise<QueryDelegationTotalRewardsResponse> {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then((data) => QueryDelegationTotalRewardsResponse.decode(new BinaryReader(data)));
  }
  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then((data) => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data)));
  }
  DelegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
  ): Promise<QueryDelegatorWithdrawAddressResponse> {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then((data) => QueryDelegatorWithdrawAddressResponse.decode(new BinaryReader(data)));
  }
  CommunityPool(request: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then((data) => QueryCommunityPoolResponse.decode(new BinaryReader(data)));
  }
}
