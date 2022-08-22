import { Tx } from "./tx";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { TxResponse, GasInfo, Result } from "../../base/abci/v1beta1/abci";
import { BlockID } from "../../../tendermint/types/types";
import { Block } from "../../../tendermint/types/block";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  SimulateRequest,
  SimulateResponse,
  GetTxRequest,
  GetTxResponse,
  BroadcastTxRequest,
  BroadcastTxResponse,
  GetTxsEventRequest,
  GetTxsEventResponse,
  GetBlockWithTxsRequest,
  GetBlockWithTxsResponse,
} from "./service";

/** Service defines the RPC service */
export interface Service {
  Simulate(request: SimulateRequest): Promise<SimulateResponse>;
  /*Simulate simulates executing a transaction for estimating gas usage.*/

  GetTx(request: GetTxRequest): Promise<GetTxResponse>;
  /*GetTx fetches a tx by hash.*/

  BroadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
  /*BroadcastTx broadcast transaction.*/

  GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
  /*GetTxsEvent fetches txs by event.*/

  GetBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
  /*GetBlockWithTxs fetches a block with decoded txs.
  
  Since: cosmos-sdk 0.45.2*/
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Simulate = this.Simulate.bind(this);
    this.GetTx = this.GetTx.bind(this);
    this.BroadcastTx = this.BroadcastTx.bind(this);
    this.GetTxsEvent = this.GetTxsEvent.bind(this);
    this.GetBlockWithTxs = this.GetBlockWithTxs.bind(this);
  }

  Simulate(request: SimulateRequest): Promise<SimulateResponse> {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then((data) => SimulateResponse.decode(new _m0.Reader(data)));
  }

  GetTx(request: GetTxRequest): Promise<GetTxResponse> {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then((data) => GetTxResponse.decode(new _m0.Reader(data)));
  }

  BroadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse> {
    const data = BroadcastTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
    return promise.then((data) => BroadcastTxResponse.decode(new _m0.Reader(data)));
  }

  GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse> {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then((data) => GetTxsEventResponse.decode(new _m0.Reader(data)));
  }

  GetBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> {
    const data = GetBlockWithTxsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
    return promise.then((data) => GetBlockWithTxsResponse.decode(new _m0.Reader(data)));
  }
}
