import { AccessConfig } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  MsgStoreCode,
  MsgStoreCodeResponse,
  MsgInstantiateContract,
  MsgInstantiateContractResponse,
  MsgExecuteContract,
  MsgExecuteContractResponse,
  MsgMigrateContract,
  MsgMigrateContractResponse,
  MsgUpdateAdmin,
  MsgUpdateAdminResponse,
  MsgClearAdmin,
  MsgClearAdminResponse,
} from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
  /*StoreCode to submit Wasm code to the system*/

  InstantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
  /*Instantiate creates a new smart contract instance for the given code id.*/

  ExecuteContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
  /*Execute submits the given message data to a smart contract*/

  MigrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
  /*Migrate runs a code upgrade/ downgrade for a smart contract*/

  UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
  /*UpdateAdmin sets a new   admin for a smart contract*/

  ClearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
  /*ClearAdmin removes any admin stored for a smart contract*/
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.StoreCode = this.StoreCode.bind(this);
    this.InstantiateContract = this.InstantiateContract.bind(this);
    this.ExecuteContract = this.ExecuteContract.bind(this);
    this.MigrateContract = this.MigrateContract.bind(this);
    this.UpdateAdmin = this.UpdateAdmin.bind(this);
    this.ClearAdmin = this.ClearAdmin.bind(this);
  }

  StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse> {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
    return promise.then((data) => MsgStoreCodeResponse.decode(new _m0.Reader(data)));
  }

  InstantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse> {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
    return promise.then((data) => MsgInstantiateContractResponse.decode(new _m0.Reader(data)));
  }

  ExecuteContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse> {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
    return promise.then((data) => MsgExecuteContractResponse.decode(new _m0.Reader(data)));
  }

  MigrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse> {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
    return promise.then((data) => MsgMigrateContractResponse.decode(new _m0.Reader(data)));
  }

  UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse> {
    const data = MsgUpdateAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
    return promise.then((data) => MsgUpdateAdminResponse.decode(new _m0.Reader(data)));
  }

  ClearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse> {
    const data = MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
    return promise.then((data) => MsgClearAdminResponse.decode(new _m0.Reader(data)));
  }
}
