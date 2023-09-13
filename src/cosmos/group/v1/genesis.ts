/* eslint-disable */
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, Vote } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.group.v1";
/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  groupSeq: bigint;
  /** groups is the list of groups info. */
  groups: GroupInfo[];
  /** group_members is the list of groups members. */
  groupMembers: GroupMember[];
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */
  groupPolicySeq: bigint;
  /** group_policies is the list of group policies info. */
  groupPolicies: GroupPolicyInfo[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposalSeq: bigint;
  /** proposals is the list of proposals. */
  proposals: Proposal[];
  /** votes is the list of votes. */
  votes: Vote[];
}
function createBaseGenesisState(): GenesisState {
  return {
    groupSeq: BigInt(0),
    groups: [],
    groupMembers: [],
    groupPolicySeq: BigInt(0),
    groupPolicies: [],
    proposalSeq: BigInt(0),
    proposals: [],
    votes: [],
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.group.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupSeq !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupSeq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMembers) {
      GroupMember.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.groupPolicySeq !== BigInt(0)) {
      writer.uint32(32).uint64(message.groupPolicySeq);
    }
    for (const v of message.groupPolicies) {
      GroupPolicyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.proposalSeq !== BigInt(0)) {
      writer.uint32(48).uint64(message.proposalSeq);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSeq = reader.uint64();
          break;
        case 2:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMembers.push(GroupMember.decode(reader, reader.uint32()));
          break;
        case 4:
          message.groupPolicySeq = reader.uint64();
          break;
        case 5:
          message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.proposalSeq = reader.uint64();
          break;
        case 7:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.groupSeq)) obj.groupSeq = BigInt(object.groupSeq.toString());
    if (Array.isArray(object?.groups)) obj.groups = object.groups.map((e: any) => GroupInfo.fromJSON(e));
    if (Array.isArray(object?.groupMembers))
      obj.groupMembers = object.groupMembers.map((e: any) => GroupMember.fromJSON(e));
    if (isSet(object.groupPolicySeq)) obj.groupPolicySeq = BigInt(object.groupPolicySeq.toString());
    if (Array.isArray(object?.groupPolicies))
      obj.groupPolicies = object.groupPolicies.map((e: any) => GroupPolicyInfo.fromJSON(e));
    if (isSet(object.proposalSeq)) obj.proposalSeq = BigInt(object.proposalSeq.toString());
    if (Array.isArray(object?.proposals))
      obj.proposals = object.proposals.map((e: any) => Proposal.fromJSON(e));
    if (Array.isArray(object?.votes)) obj.votes = object.votes.map((e: any) => Vote.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.groupSeq !== undefined && (obj.groupSeq = (message.groupSeq || BigInt(0)).toString());
    if (message.groups) {
      obj.groups = message.groups.map((e) => (e ? GroupInfo.toJSON(e) : undefined));
    } else {
      obj.groups = [];
    }
    if (message.groupMembers) {
      obj.groupMembers = message.groupMembers.map((e) => (e ? GroupMember.toJSON(e) : undefined));
    } else {
      obj.groupMembers = [];
    }
    message.groupPolicySeq !== undefined &&
      (obj.groupPolicySeq = (message.groupPolicySeq || BigInt(0)).toString());
    if (message.groupPolicies) {
      obj.groupPolicies = message.groupPolicies.map((e) => (e ? GroupPolicyInfo.toJSON(e) : undefined));
    } else {
      obj.groupPolicies = [];
    }
    message.proposalSeq !== undefined && (obj.proposalSeq = (message.proposalSeq || BigInt(0)).toString());
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => (e ? Proposal.toJSON(e) : undefined));
    } else {
      obj.proposals = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.groupSeq !== undefined && object.groupSeq !== null) {
      message.groupSeq = BigInt(object.groupSeq.toString());
    }
    message.groups = object.groups?.map((e) => GroupInfo.fromPartial(e)) || [];
    message.groupMembers = object.groupMembers?.map((e) => GroupMember.fromPartial(e)) || [];
    if (object.groupPolicySeq !== undefined && object.groupPolicySeq !== null) {
      message.groupPolicySeq = BigInt(object.groupPolicySeq.toString());
    }
    message.groupPolicies = object.groupPolicies?.map((e) => GroupPolicyInfo.fromPartial(e)) || [];
    if (object.proposalSeq !== undefined && object.proposalSeq !== null) {
      message.proposalSeq = BigInt(object.proposalSeq.toString());
    }
    message.proposals = object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    return message;
  },
};
