/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmos.gov.v1beta1";

/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}

export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}

export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    default:
      return "UNKNOWN";
  }
}

/** ProposalStatus enumerates the valid statuses of a proposal. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = 3,
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = 4,
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = 5,
  UNRECOGNIZED = -1,
}

export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}

export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    default:
      return "UNKNOWN";
  }
}

/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposal {
  title: string;
  description: string;
}

/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  proposalId: Long;
  depositor: string;
  amount: Coin[];
}

/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  proposalId: Long;
  content?: Any;
  status: ProposalStatus;
  finalTallyResult?: TallyResult;
  submitTime?: Date;
  depositEndTime?: Date;
  totalDeposit: Coin[];
  votingStartTime?: Date;
  votingEndTime?: Date;
}

/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  yes: string;
  abstain: string;
  no: string;
  noWithVeto: string;
}

/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  proposalId: Long;
  voter: string;
  option: VoteOption;
}

/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   *  months.
   */
  maxDepositPeriod?: Duration;
}

/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
  /** Length of the voting period. */
  votingPeriod?: Duration;
}

/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */
  quorum: Uint8Array;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: Uint8Array;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */
  vetoThreshold: Uint8Array;
}

const baseTextProposal: object = { title: "", description: "" };

export const TextProposal = {
  encode(message: TextProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTextProposal } as TextProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TextProposal {
    const message = { ...baseTextProposal } as TextProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: TextProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<TextProposal>): TextProposal {
    const message = { ...baseTextProposal } as TextProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

const baseDeposit: object = { proposalId: Long.UZERO, depositor: "" };

export const Deposit = {
  encode(message: Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeposit } as Deposit;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Deposit {
    const message = { ...baseDeposit } as Deposit;
    message.amount = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor);
    } else {
      message.depositor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Deposit>): Deposit {
    const message = { ...baseDeposit } as Deposit;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    message.depositor = object.depositor ?? "";
    message.amount = [];
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseProposal: object = { proposalId: Long.UZERO, status: 0 };

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.depositEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.depositEndTime), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.votingStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votingStartTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.votingEndTime), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProposal } as Proposal;
    message.totalDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.content = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.depositEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.votingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    const message = { ...baseProposal } as Proposal;
    message.totalDeposit = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromJSON(object.content);
    } else {
      message.content = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = proposalStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.finalTallyResult !== undefined && object.finalTallyResult !== null) {
      message.finalTallyResult = TallyResult.fromJSON(object.finalTallyResult);
    } else {
      message.finalTallyResult = undefined;
    }
    if (object.submitTime !== undefined && object.submitTime !== null) {
      message.submitTime = fromJsonTimestamp(object.submitTime);
    } else {
      message.submitTime = undefined;
    }
    if (object.depositEndTime !== undefined && object.depositEndTime !== null) {
      message.depositEndTime = fromJsonTimestamp(object.depositEndTime);
    } else {
      message.depositEndTime = undefined;
    }
    if (object.totalDeposit !== undefined && object.totalDeposit !== null) {
      for (const e of object.totalDeposit) {
        message.totalDeposit.push(Coin.fromJSON(e));
      }
    }
    if (object.votingStartTime !== undefined && object.votingStartTime !== null) {
      message.votingStartTime = fromJsonTimestamp(object.votingStartTime);
    } else {
      message.votingStartTime = undefined;
    }
    if (object.votingEndTime !== undefined && object.votingEndTime !== null) {
      message.votingEndTime = fromJsonTimestamp(object.votingEndTime);
    } else {
      message.votingEndTime = undefined;
    }
    return message;
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.content !== undefined &&
      (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== undefined &&
      (obj.finalTallyResult = message.finalTallyResult
        ? TallyResult.toJSON(message.finalTallyResult)
        : undefined);
    message.submitTime !== undefined && (obj.submitTime = message.submitTime.toISOString());
    message.depositEndTime !== undefined && (obj.depositEndTime = message.depositEndTime.toISOString());
    if (message.totalDeposit) {
      obj.totalDeposit = message.totalDeposit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.totalDeposit = [];
    }
    message.votingStartTime !== undefined && (obj.votingStartTime = message.votingStartTime.toISOString());
    message.votingEndTime !== undefined && (obj.votingEndTime = message.votingEndTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = { ...baseProposal } as Proposal;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromPartial(object.content);
    } else {
      message.content = undefined;
    }
    message.status = object.status ?? 0;
    if (object.finalTallyResult !== undefined && object.finalTallyResult !== null) {
      message.finalTallyResult = TallyResult.fromPartial(object.finalTallyResult);
    } else {
      message.finalTallyResult = undefined;
    }
    message.submitTime = object.submitTime ?? undefined;
    message.depositEndTime = object.depositEndTime ?? undefined;
    message.totalDeposit = [];
    if (object.totalDeposit !== undefined && object.totalDeposit !== null) {
      for (const e of object.totalDeposit) {
        message.totalDeposit.push(Coin.fromPartial(e));
      }
    }
    message.votingStartTime = object.votingStartTime ?? undefined;
    message.votingEndTime = object.votingEndTime ?? undefined;
    return message;
  },
};

const baseTallyResult: object = { yes: "", abstain: "", no: "", noWithVeto: "" };

export const TallyResult = {
  encode(message: TallyResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yes !== "") {
      writer.uint32(10).string(message.yes);
    }
    if (message.abstain !== "") {
      writer.uint32(18).string(message.abstain);
    }
    if (message.no !== "") {
      writer.uint32(26).string(message.no);
    }
    if (message.noWithVeto !== "") {
      writer.uint32(34).string(message.noWithVeto);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTallyResult } as TallyResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yes = reader.string();
          break;
        case 2:
          message.abstain = reader.string();
          break;
        case 3:
          message.no = reader.string();
          break;
        case 4:
          message.noWithVeto = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TallyResult {
    const message = { ...baseTallyResult } as TallyResult;
    if (object.yes !== undefined && object.yes !== null) {
      message.yes = String(object.yes);
    } else {
      message.yes = "";
    }
    if (object.abstain !== undefined && object.abstain !== null) {
      message.abstain = String(object.abstain);
    } else {
      message.abstain = "";
    }
    if (object.no !== undefined && object.no !== null) {
      message.no = String(object.no);
    } else {
      message.no = "";
    }
    if (object.noWithVeto !== undefined && object.noWithVeto !== null) {
      message.noWithVeto = String(object.noWithVeto);
    } else {
      message.noWithVeto = "";
    }
    return message;
  },

  toJSON(message: TallyResult): unknown {
    const obj: any = {};
    message.yes !== undefined && (obj.yes = message.yes);
    message.abstain !== undefined && (obj.abstain = message.abstain);
    message.no !== undefined && (obj.no = message.no);
    message.noWithVeto !== undefined && (obj.noWithVeto = message.noWithVeto);
    return obj;
  },

  fromPartial(object: DeepPartial<TallyResult>): TallyResult {
    const message = { ...baseTallyResult } as TallyResult;
    message.yes = object.yes ?? "";
    message.abstain = object.abstain ?? "";
    message.no = object.no ?? "";
    message.noWithVeto = object.noWithVeto ?? "";
    return message;
  },
};

const baseVote: object = { proposalId: Long.UZERO, voter: "", option: 0 };

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    const message = { ...baseVote } as Vote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = voteOptionFromJSON(object.option);
    } else {
      message.option = 0;
    }
    return message;
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    return message;
  },
};

const baseDepositParams: object = {};

export const DepositParams = {
  encode(message: DepositParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDepositParams } as DepositParams;
    message.minDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositParams {
    const message = { ...baseDepositParams } as DepositParams;
    message.minDeposit = [];
    if (object.minDeposit !== undefined && object.minDeposit !== null) {
      for (const e of object.minDeposit) {
        message.minDeposit.push(Coin.fromJSON(e));
      }
    }
    if (object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null) {
      message.maxDepositPeriod = Duration.fromJSON(object.maxDepositPeriod);
    } else {
      message.maxDepositPeriod = undefined;
    }
    return message;
  },

  toJSON(message: DepositParams): unknown {
    const obj: any = {};
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.minDeposit = [];
    }
    message.maxDepositPeriod !== undefined &&
      (obj.maxDepositPeriod = message.maxDepositPeriod
        ? Duration.toJSON(message.maxDepositPeriod)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DepositParams>): DepositParams {
    const message = { ...baseDepositParams } as DepositParams;
    message.minDeposit = [];
    if (object.minDeposit !== undefined && object.minDeposit !== null) {
      for (const e of object.minDeposit) {
        message.minDeposit.push(Coin.fromPartial(e));
      }
    }
    if (object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null) {
      message.maxDepositPeriod = Duration.fromPartial(object.maxDepositPeriod);
    } else {
      message.maxDepositPeriod = undefined;
    }
    return message;
  },
};

const baseVotingParams: object = {};

export const VotingParams = {
  encode(message: VotingParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VotingParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVotingParams } as VotingParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VotingParams {
    const message = { ...baseVotingParams } as VotingParams;
    if (object.votingPeriod !== undefined && object.votingPeriod !== null) {
      message.votingPeriod = Duration.fromJSON(object.votingPeriod);
    } else {
      message.votingPeriod = undefined;
    }
    return message;
  },

  toJSON(message: VotingParams): unknown {
    const obj: any = {};
    message.votingPeriod !== undefined &&
      (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VotingParams>): VotingParams {
    const message = { ...baseVotingParams } as VotingParams;
    if (object.votingPeriod !== undefined && object.votingPeriod !== null) {
      message.votingPeriod = Duration.fromPartial(object.votingPeriod);
    } else {
      message.votingPeriod = undefined;
    }
    return message;
  },
};

const baseTallyParams: object = {};

export const TallyParams = {
  encode(message: TallyParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quorum.length !== 0) {
      writer.uint32(10).bytes(message.quorum);
    }
    if (message.threshold.length !== 0) {
      writer.uint32(18).bytes(message.threshold);
    }
    if (message.vetoThreshold.length !== 0) {
      writer.uint32(26).bytes(message.vetoThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TallyParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTallyParams } as TallyParams;
    message.quorum = new Uint8Array();
    message.threshold = new Uint8Array();
    message.vetoThreshold = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.bytes();
          break;
        case 2:
          message.threshold = reader.bytes();
          break;
        case 3:
          message.vetoThreshold = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TallyParams {
    const message = { ...baseTallyParams } as TallyParams;
    message.quorum = new Uint8Array();
    message.threshold = new Uint8Array();
    message.vetoThreshold = new Uint8Array();
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = bytesFromBase64(object.quorum);
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = bytesFromBase64(object.threshold);
    }
    if (object.vetoThreshold !== undefined && object.vetoThreshold !== null) {
      message.vetoThreshold = bytesFromBase64(object.vetoThreshold);
    }
    return message;
  },

  toJSON(message: TallyParams): unknown {
    const obj: any = {};
    message.quorum !== undefined &&
      (obj.quorum = base64FromBytes(message.quorum !== undefined ? message.quorum : new Uint8Array()));
    message.threshold !== undefined &&
      (obj.threshold = base64FromBytes(
        message.threshold !== undefined ? message.threshold : new Uint8Array(),
      ));
    message.vetoThreshold !== undefined &&
      (obj.vetoThreshold = base64FromBytes(
        message.vetoThreshold !== undefined ? message.vetoThreshold : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<TallyParams>): TallyParams {
    const message = { ...baseTallyParams } as TallyParams;
    message.quorum = object.quorum ?? new Uint8Array();
    message.threshold = object.threshold ?? new Uint8Array();
    message.vetoThreshold = object.vetoThreshold ?? new Uint8Array();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
