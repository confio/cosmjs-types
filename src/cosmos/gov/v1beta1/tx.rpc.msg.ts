import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption } from "./gov";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  MsgSubmitProposal,
  MsgSubmitProposalResponse,
  MsgVote,
  MsgVoteResponse,
  MsgVoteWeighted,
  MsgVoteWeightedResponse,
  MsgDeposit,
  MsgDepositResponse,
} from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  /*SubmitProposal defines a method to create new proposal given a content.*/

  Vote(request: MsgVote): Promise<MsgVoteResponse>;
  /*Vote defines a method to add a vote on a specific proposal.*/

  VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
  /*VoteWeighted defines a method to add a weighted vote on a specific proposal.
  
  Since: cosmos-sdk 0.43*/

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /*Deposit defines a method to add deposit on a specific proposal.*/
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubmitProposal = this.SubmitProposal.bind(this);
    this.Vote = this.Vote.bind(this);
    this.VoteWeighted = this.VoteWeighted.bind(this);
    this.Deposit = this.Deposit.bind(this);
  }

  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "SubmitProposal", data);
    return promise.then((data) => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
  }

  Vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Vote", data);
    return promise.then((data) => MsgVoteResponse.decode(new _m0.Reader(data)));
  }

  VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse> {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "VoteWeighted", data);
    return promise.then((data) => MsgVoteWeightedResponse.decode(new _m0.Reader(data)));
  }

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Deposit", data);
    return promise.then((data) => MsgDepositResponse.decode(new _m0.Reader(data)));
  }
}
