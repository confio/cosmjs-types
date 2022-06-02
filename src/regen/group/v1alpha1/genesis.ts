/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  GroupInfo,
  GroupMember,
  GroupAccountInfo,
  Proposal,
  Vote,
} from "../../../regen/group/v1alpha1/types";

export const protobufPackage = "regen.group.v1alpha1";

/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  groupSeq: Long;
  /** groups is the list of groups info. */
  groups: GroupInfo[];
  /** group_members is the list of groups members. */
  groupMembers: GroupMember[];
  /**
   * group_account_seq is the group account table orm.Sequence,
   * it is used to generate the next group account address.
   */
  groupAccountSeq: Long;
  /** group_accounts is the list of group accounts info. */
  groupAccounts: GroupAccountInfo[];
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposalSeq: Long;
  /** proposals is the list of proposals. */
  proposals: Proposal[];
  /** votes is the list of votes. */
  votes: Vote[];
}

const baseGenesisState: object = {
  groupSeq: Long.UZERO,
  groupAccountSeq: Long.UZERO,
  proposalSeq: Long.UZERO,
};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.groupSeq.isZero()) {
      writer.uint32(8).uint64(message.groupSeq);
    }
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.groupMembers) {
      GroupMember.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.groupAccountSeq.isZero()) {
      writer.uint32(32).uint64(message.groupAccountSeq);
    }
    for (const v of message.groupAccounts) {
      GroupAccountInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.proposalSeq.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.groups = [];
    message.groupMembers = [];
    message.groupAccounts = [];
    message.proposals = [];
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSeq = reader.uint64() as Long;
          break;
        case 2:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMembers.push(
            GroupMember.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.groupAccountSeq = reader.uint64() as Long;
          break;
        case 5:
          message.groupAccounts.push(
            GroupAccountInfo.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.proposalSeq = reader.uint64() as Long;
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
    const message = { ...baseGenesisState } as GenesisState;
    message.groups = [];
    message.groupMembers = [];
    message.groupAccounts = [];
    message.proposals = [];
    message.votes = [];
    if (object.groupSeq !== undefined && object.groupSeq !== null) {
      message.groupSeq = Long.fromString(object.groupSeq);
    } else {
      message.groupSeq = Long.UZERO;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromJSON(e));
      }
    }
    if (object.groupMembers !== undefined && object.groupMembers !== null) {
      for (const e of object.groupMembers) {
        message.groupMembers.push(GroupMember.fromJSON(e));
      }
    }
    if (
      object.groupAccountSeq !== undefined &&
      object.groupAccountSeq !== null
    ) {
      message.groupAccountSeq = Long.fromString(object.groupAccountSeq);
    } else {
      message.groupAccountSeq = Long.UZERO;
    }
    if (object.groupAccounts !== undefined && object.groupAccounts !== null) {
      for (const e of object.groupAccounts) {
        message.groupAccounts.push(GroupAccountInfo.fromJSON(e));
      }
    }
    if (object.proposalSeq !== undefined && object.proposalSeq !== null) {
      message.proposalSeq = Long.fromString(object.proposalSeq);
    } else {
      message.proposalSeq = Long.UZERO;
    }
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromJSON(e));
      }
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.groupSeq !== undefined &&
      (obj.groupSeq = (message.groupSeq || Long.UZERO).toString());
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? GroupInfo.toJSON(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    if (message.groupMembers) {
      obj.groupMembers = message.groupMembers.map((e) =>
        e ? GroupMember.toJSON(e) : undefined
      );
    } else {
      obj.groupMembers = [];
    }
    message.groupAccountSeq !== undefined &&
      (obj.groupAccountSeq = (
        message.groupAccountSeq || Long.UZERO
      ).toString());
    if (message.groupAccounts) {
      obj.groupAccounts = message.groupAccounts.map((e) =>
        e ? GroupAccountInfo.toJSON(e) : undefined
      );
    } else {
      obj.groupAccounts = [];
    }
    message.proposalSeq !== undefined &&
      (obj.proposalSeq = (message.proposalSeq || Long.UZERO).toString());
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? Proposal.toJSON(e) : undefined
      );
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

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.groups = [];
    message.groupMembers = [];
    message.groupAccounts = [];
    message.proposals = [];
    message.votes = [];
    if (object.groupSeq !== undefined && object.groupSeq !== null) {
      message.groupSeq = object.groupSeq as Long;
    } else {
      message.groupSeq = Long.UZERO;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromPartial(e));
      }
    }
    if (object.groupMembers !== undefined && object.groupMembers !== null) {
      for (const e of object.groupMembers) {
        message.groupMembers.push(GroupMember.fromPartial(e));
      }
    }
    if (
      object.groupAccountSeq !== undefined &&
      object.groupAccountSeq !== null
    ) {
      message.groupAccountSeq = object.groupAccountSeq as Long;
    } else {
      message.groupAccountSeq = Long.UZERO;
    }
    if (object.groupAccounts !== undefined && object.groupAccounts !== null) {
      for (const e of object.groupAccounts) {
        message.groupAccounts.push(GroupAccountInfo.fromPartial(e));
      }
    }
    if (object.proposalSeq !== undefined && object.proposalSeq !== null) {
      message.proposalSeq = object.proposalSeq as Long;
    } else {
      message.proposalSeq = Long.UZERO;
    }
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromPartial(e));
      }
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
