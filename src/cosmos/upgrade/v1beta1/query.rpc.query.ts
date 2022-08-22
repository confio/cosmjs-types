import { Plan, ModuleVersion } from "./upgrade";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryCurrentPlanRequest,
  QueryCurrentPlanResponse,
  QueryAppliedPlanRequest,
  QueryAppliedPlanResponse,
  QueryUpgradedConsensusStateRequest,
  QueryUpgradedConsensusStateResponse,
  QueryModuleVersionsRequest,
  QueryModuleVersionsResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  CurrentPlan(request: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
  /*CurrentPlan queries the current upgrade plan.*/

  AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
  /*AppliedPlan queries a previously applied upgrade plan by its name.*/

  UpgradedConsensusState(
    request: QueryUpgradedConsensusStateRequest,
  ): Promise<QueryUpgradedConsensusStateResponse>;
  /*UpgradedConsensusState queries the consensus state that will serve
  as a trusted kernel for the next version of this chain. It will only be
  stored at the last height of this chain.
  UpgradedConsensusState RPC not supported with legacy querier
  This rpc is deprecated now that IBC has its own replacement
  (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)*/

  ModuleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
  /*ModuleVersions queries the list of module versions from state.
  
  Since: cosmos-sdk 0.43*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CurrentPlan = this.CurrentPlan.bind(this);
    this.AppliedPlan = this.AppliedPlan.bind(this);
    this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
    this.ModuleVersions = this.ModuleVersions.bind(this);
  }

  CurrentPlan(request: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse> {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
    return promise.then((data) => QueryCurrentPlanResponse.decode(new _m0.Reader(data)));
  }

  AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
    return promise.then((data) => QueryAppliedPlanResponse.decode(new _m0.Reader(data)));
  }

  UpgradedConsensusState(
    request: QueryUpgradedConsensusStateRequest,
  ): Promise<QueryUpgradedConsensusStateResponse> {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
    return promise.then((data) => QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
  }

  ModuleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse> {
    const data = QueryModuleVersionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
    return promise.then((data) => QueryModuleVersionsResponse.decode(new _m0.Reader(data)));
  }
}
