import { Any } from "../../../google/protobuf/any";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSubmitEvidence, MsgSubmitEvidenceResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  SubmitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponse>;
  /*SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
  counterfactual signing.*/
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubmitEvidence = this.SubmitEvidence.bind(this);
  }

  SubmitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponse> {
    const data = MsgSubmitEvidence.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Msg", "SubmitEvidence", data);
    return promise.then((data) => MsgSubmitEvidenceResponse.decode(new _m0.Reader(data)));
  }
}
