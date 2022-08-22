import { Coin } from "../../base/v1beta1/coin";
import { Input, Output } from "./bank";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  Send(request: MsgSend): Promise<MsgSendResponse>;
  /*Send defines a method for sending coins from one account to another account.*/

  MultiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
  /*MultiSend defines a method for sending coins from some accounts to other accounts.*/
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Send = this.Send.bind(this);
    this.MultiSend = this.MultiSend.bind(this);
  }

  Send(request: MsgSend): Promise<MsgSendResponse> {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", data);
    return promise.then((data) => MsgSendResponse.decode(new _m0.Reader(data)));
  }

  MultiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse> {
    const data = MsgMultiSend.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", data);
    return promise.then((data) => MsgMultiSendResponse.decode(new _m0.Reader(data)));
  }
}
