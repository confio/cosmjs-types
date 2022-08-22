import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  VerifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
  /*VerifyInvariant defines a method to verify a particular invariance.*/
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.VerifyInvariant = this.VerifyInvariant.bind(this);
  }

  VerifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse> {
    const data = MsgVerifyInvariant.encode(request).finish();
    const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
    return promise.then((data) => MsgVerifyInvariantResponse.decode(new _m0.Reader(data)));
  }
}
