import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block } from "../../../../tendermint/types/block";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  GetNodeInfoRequest,
  GetNodeInfoResponse,
  GetSyncingRequest,
  GetSyncingResponse,
  GetLatestBlockRequest,
  GetLatestBlockResponse,
  GetBlockByHeightRequest,
  GetBlockByHeightResponse,
  GetLatestValidatorSetRequest,
  GetLatestValidatorSetResponse,
  GetValidatorSetByHeightRequest,
  GetValidatorSetByHeightResponse,
} from "./query";

/** Service defines the RPC service */
export interface Service {
  GetNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
  /*GetNodeInfo queries the current node info.*/

  GetSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse>;
  /*GetSyncing queries node syncing.*/

  GetLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
  /*GetLatestBlock returns the latest block.*/

  GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
  /*GetBlockByHeight queries block for given height.*/

  GetLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
  /*GetLatestValidatorSet queries latest validator-set.*/

  GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
  /*GetValidatorSetByHeight queries validator-set at a given height.*/
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetNodeInfo = this.GetNodeInfo.bind(this);
    this.GetSyncing = this.GetSyncing.bind(this);
    this.GetLatestBlock = this.GetLatestBlock.bind(this);
    this.GetBlockByHeight = this.GetBlockByHeight.bind(this);
    this.GetLatestValidatorSet = this.GetLatestValidatorSet.bind(this);
    this.GetValidatorSetByHeight = this.GetValidatorSetByHeight.bind(this);
  }

  GetNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse> {
    const data = GetNodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
    return promise.then((data) => GetNodeInfoResponse.decode(new _m0.Reader(data)));
  }

  GetSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse> {
    const data = GetSyncingRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
    return promise.then((data) => GetSyncingResponse.decode(new _m0.Reader(data)));
  }

  GetLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse> {
    const data = GetLatestBlockRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
    return promise.then((data) => GetLatestBlockResponse.decode(new _m0.Reader(data)));
  }

  GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse> {
    const data = GetBlockByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
    return promise.then((data) => GetBlockByHeightResponse.decode(new _m0.Reader(data)));
  }

  GetLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse> {
    const data = GetLatestValidatorSetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
    return promise.then((data) => GetLatestValidatorSetResponse.decode(new _m0.Reader(data)));
  }

  GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse> {
    const data = GetValidatorSetByHeightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetValidatorSetByHeight",
      data,
    );
    return promise.then((data) => GetValidatorSetByHeightResponse.decode(new _m0.Reader(data)));
  }
}
