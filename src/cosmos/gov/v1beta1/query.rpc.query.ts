import {
  ProposalStatus,
  Proposal,
  Vote,
  VotingParams,
  DepositParams,
  TallyParams,
  Deposit,
  TallyResult,
} from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryProposalRequest,
  QueryProposalResponse,
  QueryProposalsRequest,
  QueryProposalsResponse,
  QueryVoteRequest,
  QueryVoteResponse,
  QueryVotesRequest,
  QueryVotesResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryDepositRequest,
  QueryDepositResponse,
  QueryDepositsRequest,
  QueryDepositsResponse,
  QueryTallyResultRequest,
  QueryTallyResultResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /*Proposal queries proposal details based on ProposalID.*/

  Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
  /*Proposals queries all proposals based on given status.*/

  Vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
  /*Vote queries voted information based on proposalID, voterAddr.*/

  Votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
  /*Votes queries votes of a given proposal.*/

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params queries all parameters of the gov module.*/

  Deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
  /*Deposit queries single deposit information based proposalID, depositAddr.*/

  Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
  /*Deposits queries all deposits of a single proposal.*/

  TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
  /*TallyResult queries the tally of a proposal vote.*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Proposal = this.Proposal.bind(this);
    this.Proposals = this.Proposals.bind(this);
    this.Vote = this.Vote.bind(this);
    this.Votes = this.Votes.bind(this);
    this.Params = this.Params.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Deposits = this.Deposits.bind(this);
    this.TallyResult = this.TallyResult.bind(this);
  }

  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
    return promise.then((data) => QueryProposalResponse.decode(new _m0.Reader(data)));
  }

  Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse> {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
    return promise.then((data) => QueryProposalsResponse.decode(new _m0.Reader(data)));
  }

  Vote(request: QueryVoteRequest): Promise<QueryVoteResponse> {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
    return promise.then((data) => QueryVoteResponse.decode(new _m0.Reader(data)));
  }

  Votes(request: QueryVotesRequest): Promise<QueryVotesResponse> {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
    return promise.then((data) => QueryVotesResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Deposit(request: QueryDepositRequest): Promise<QueryDepositResponse> {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
    return promise.then((data) => QueryDepositResponse.decode(new _m0.Reader(data)));
  }

  Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
    return promise.then((data) => QueryDepositsResponse.decode(new _m0.Reader(data)));
  }

  TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
    return promise.then((data) => QueryTallyResultResponse.decode(new _m0.Reader(data)));
  }
}
