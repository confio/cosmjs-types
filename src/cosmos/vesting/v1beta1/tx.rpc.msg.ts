import { Coin } from "../../base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  CreateVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
  /*CreateVestingAccount defines a method that enables creating a vesting
  account.*/
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateVestingAccount = this.CreateVestingAccount.bind(this);
  }

  CreateVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
    return promise.then((data) => MsgCreateVestingAccountResponse.decode(new _m0.Reader(data)));
  }
}
