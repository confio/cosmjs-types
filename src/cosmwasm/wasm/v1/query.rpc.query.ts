import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractCodeHistoryEntry, Model } from "./types";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryContractInfoRequest,
  QueryContractInfoResponse,
  QueryContractHistoryRequest,
  QueryContractHistoryResponse,
  QueryContractsByCodeRequest,
  QueryContractsByCodeResponse,
  QueryAllContractStateRequest,
  QueryAllContractStateResponse,
  QueryRawContractStateRequest,
  QueryRawContractStateResponse,
  QuerySmartContractStateRequest,
  QuerySmartContractStateResponse,
  QueryCodeRequest,
  QueryCodeResponse,
  QueryCodesRequest,
  QueryCodesResponse,
  QueryPinnedCodesRequest,
  QueryPinnedCodesResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  ContractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
  /*ContractInfo gets the contract meta data*/

  ContractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
  /*ContractHistory gets the contract code history*/

  ContractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
  /*ContractsByCode lists all smart contracts for a code id*/

  AllContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
  /*AllContractState gets all raw store data for a single contract*/

  RawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
  /*RawContractState gets single key from the raw store data of a contract*/

  SmartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
  /*SmartContractState get smart query result from the contract*/

  Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /*Code gets the binary code and metadata for a singe wasm code*/

  Codes(request: QueryCodesRequest): Promise<QueryCodesResponse>;
  /*Codes gets the metadata for all stored wasm codes*/

  PinnedCodes(request: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
  /*PinnedCodes gets the pinned code ids*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ContractInfo = this.ContractInfo.bind(this);
    this.ContractHistory = this.ContractHistory.bind(this);
    this.ContractsByCode = this.ContractsByCode.bind(this);
    this.AllContractState = this.AllContractState.bind(this);
    this.RawContractState = this.RawContractState.bind(this);
    this.SmartContractState = this.SmartContractState.bind(this);
    this.Code = this.Code.bind(this);
    this.Codes = this.Codes.bind(this);
    this.PinnedCodes = this.PinnedCodes.bind(this);
  }

  ContractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse> {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
    return promise.then((data) => QueryContractInfoResponse.decode(new _m0.Reader(data)));
  }

  ContractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> {
    const data = QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
    return promise.then((data) => QueryContractHistoryResponse.decode(new _m0.Reader(data)));
  }

  ContractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
    return promise.then((data) => QueryContractsByCodeResponse.decode(new _m0.Reader(data)));
  }

  AllContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
    return promise.then((data) => QueryAllContractStateResponse.decode(new _m0.Reader(data)));
  }

  RawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
    return promise.then((data) => QueryRawContractStateResponse.decode(new _m0.Reader(data)));
  }

  SmartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> {
    const data = QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
    return promise.then((data) => QuerySmartContractStateResponse.decode(new _m0.Reader(data)));
  }

  Code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
    return promise.then((data) => QueryCodeResponse.decode(new _m0.Reader(data)));
  }

  Codes(request: QueryCodesRequest): Promise<QueryCodesResponse> {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
    return promise.then((data) => QueryCodesResponse.decode(new _m0.Reader(data)));
  }

  PinnedCodes(request: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse> {
    const data = QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
    return promise.then((data) => QueryPinnedCodesResponse.decode(new _m0.Reader(data)));
  }
}
