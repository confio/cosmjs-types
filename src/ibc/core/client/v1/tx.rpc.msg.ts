import { Any } from "../../../../google/protobuf/any";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  MsgCreateClient,
  MsgCreateClientResponse,
  MsgUpdateClient,
  MsgUpdateClientResponse,
  MsgUpgradeClient,
  MsgUpgradeClientResponse,
  MsgSubmitMisbehaviour,
  MsgSubmitMisbehaviourResponse,
} from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  CreateClient(request: MsgCreateClient): Promise<MsgCreateClientResponse>;
  /*CreateClient defines a rpc handler method for MsgCreateClient.*/

  UpdateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse>;
  /*UpdateClient defines a rpc handler method for MsgUpdateClient.*/

  UpgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse>;
  /*UpgradeClient defines a rpc handler method for MsgUpgradeClient.*/

  SubmitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponse>;
  /*SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.*/
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateClient = this.CreateClient.bind(this);
    this.UpdateClient = this.UpdateClient.bind(this);
    this.UpgradeClient = this.UpgradeClient.bind(this);
    this.SubmitMisbehaviour = this.SubmitMisbehaviour.bind(this);
  }

  CreateClient(request: MsgCreateClient): Promise<MsgCreateClientResponse> {
    const data = MsgCreateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
    return promise.then((data) => MsgCreateClientResponse.decode(new _m0.Reader(data)));
  }

  UpdateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse> {
    const data = MsgUpdateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
    return promise.then((data) => MsgUpdateClientResponse.decode(new _m0.Reader(data)));
  }

  UpgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse> {
    const data = MsgUpgradeClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
    return promise.then((data) => MsgUpgradeClientResponse.decode(new _m0.Reader(data)));
  }

  SubmitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponse> {
    const data = MsgSubmitMisbehaviour.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
    return promise.then((data) => MsgSubmitMisbehaviourResponse.decode(new _m0.Reader(data)));
  }
}
