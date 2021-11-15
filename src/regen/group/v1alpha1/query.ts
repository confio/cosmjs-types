/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  GroupInfo,
  GroupAccountInfo,
  Proposal,
  Vote,
  GroupMember,
} from "../../../regen/group/v1alpha1/types";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "regen.group.v1alpha1";

/** QueryGroupInfoRequest is the Query/GroupInfo request type. */
export interface QueryGroupInfoRequest {
  /** group_id is the unique ID of the group. */
  groupId: Long;
}

/** QueryGroupInfoResponse is the Query/GroupInfo response type. */
export interface QueryGroupInfoResponse {
  /** info is the GroupInfo for the group. */
  info?: GroupInfo;
}

/** QueryGroupAccountInfoRequest is the Query/GroupAccountInfo request type. */
export interface QueryGroupAccountInfoRequest {
  /** address is the account address of the group account. */
  address: string;
}

/** QueryGroupAccountInfoResponse is the Query/GroupAccountInfo response type. */
export interface QueryGroupAccountInfoResponse {
  /** info is the GroupAccountInfo for the group account. */
  info?: GroupAccountInfo;
}

/** QueryGroupMembersRequest is the Query/GroupMembersRequest request type. */
export interface QueryGroupMembersRequest {
  /** group_id is the unique ID of the group. */
  groupId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupMembersResponse is the Query/GroupMembersResponse response type. */
export interface QueryGroupMembersResponse {
  /** members are the members of the group with given group_id. */
  members: GroupMember[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGroupsByAdminRequest is the Query/GroupsByAdminRequest request type. */
export interface QueryGroupsByAdminRequest {
  /** admin is the account address of a group's admin. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type. */
export interface QueryGroupsByAdminResponse {
  /** groups are the groups info with the provided admin. */
  groups: GroupInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGroupAccountsByGroupRequest is the Query/GroupAccountsByGroup request type. */
export interface QueryGroupAccountsByGroupRequest {
  /** group_id is the unique ID of the group account's group. */
  groupId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupAccountsByGroupResponse is the Query/GroupAccountsByGroup response type. */
export interface QueryGroupAccountsByGroupResponse {
  /** group_accounts are the group accounts info associated with the provided group. */
  groupAccounts: GroupAccountInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryGroupAccountsByAdminRequest is the Query/GroupAccountsByAdmin request type. */
export interface QueryGroupAccountsByAdminRequest {
  /** admin is the admin address of the group account. */
  admin: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGroupAccountsByAdminResponse is the Query/GroupAccountsByAdmin response type. */
export interface QueryGroupAccountsByAdminResponse {
  /** group_accounts are the group accounts info with provided admin. */
  groupAccounts: GroupAccountInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryProposalRequest is the Query/Proposal request type. */
export interface QueryProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
}

/** QueryProposalResponse is the Query/Proposal response type. */
export interface QueryProposalResponse {
  /** proposal is the proposal info. */
  proposal?: Proposal;
}

/** QueryProposalsByGroupAccountRequest is the Query/ProposalByGroupAccount request type. */
export interface QueryProposalsByGroupAccountRequest {
  /** address is the group account address related to proposals. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryProposalsByGroupAccountResponse is the Query/ProposalByGroupAccount response type. */
export interface QueryProposalsByGroupAccountResponse {
  /** proposals are the proposals with given group account. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter request type. */
export interface QueryVoteByProposalVoterRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
  /** voter is a proposal voter account address. */
  voter: string;
}

/** QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type. */
export interface QueryVoteByProposalVoterResponse {
  /** vote is the vote with given proposal_id and voter. */
  vote?: Vote;
}

/** QueryVotesByProposalResponse is the Query/VotesByProposal request type. */
export interface QueryVotesByProposalRequest {
  /** proposal_id is the unique ID of a proposal. */
  proposalId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryVotesByProposalResponse is the Query/VotesByProposal response type. */
export interface QueryVotesByProposalResponse {
  /** votes are the list of votes for given proposal_id. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryVotesByVoterResponse is the Query/VotesByVoter request type. */
export interface QueryVotesByVoterRequest {
  /** voter is a proposal voter account address. */
  voter: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryVotesByVoterResponse is the Query/VotesByVoter response type. */
export interface QueryVotesByVoterResponse {
  /** votes are the list of votes by given voter. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

const baseQueryGroupInfoRequest: object = { groupId: Long.UZERO };

export const QueryGroupInfoRequest = {
  encode(
    message: QueryGroupInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGroupInfoRequest } as QueryGroupInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupInfoRequest {
    const message = { ...baseQueryGroupInfoRequest } as QueryGroupInfoRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Long.fromString(object.groupId);
    } else {
      message.groupId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryGroupInfoRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupInfoRequest>
  ): QueryGroupInfoRequest {
    const message = { ...baseQueryGroupInfoRequest } as QueryGroupInfoRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId as Long;
    } else {
      message.groupId = Long.UZERO;
    }
    return message;
  },
};

const baseQueryGroupInfoResponse: object = {};

export const QueryGroupInfoResponse = {
  encode(
    message: QueryGroupInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.info !== undefined) {
      GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGroupInfoResponse } as QueryGroupInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupInfoResponse {
    const message = { ...baseQueryGroupInfoResponse } as QueryGroupInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupInfo.fromJSON(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info ? GroupInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupInfoResponse>
  ): QueryGroupInfoResponse {
    const message = { ...baseQueryGroupInfoResponse } as QueryGroupInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupInfo.fromPartial(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },
};

const baseQueryGroupAccountInfoRequest: object = { address: "" };

export const QueryGroupAccountInfoRequest = {
  encode(
    message: QueryGroupAccountInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupAccountInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupAccountInfoRequest,
    } as QueryGroupAccountInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupAccountInfoRequest {
    const message = {
      ...baseQueryGroupAccountInfoRequest,
    } as QueryGroupAccountInfoRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGroupAccountInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupAccountInfoRequest>
  ): QueryGroupAccountInfoRequest {
    const message = {
      ...baseQueryGroupAccountInfoRequest,
    } as QueryGroupAccountInfoRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGroupAccountInfoResponse: object = {};

export const QueryGroupAccountInfoResponse = {
  encode(
    message: QueryGroupAccountInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.info !== undefined) {
      GroupAccountInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupAccountInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupAccountInfoResponse,
    } as QueryGroupAccountInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = GroupAccountInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupAccountInfoResponse {
    const message = {
      ...baseQueryGroupAccountInfoResponse,
    } as QueryGroupAccountInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupAccountInfo.fromJSON(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupAccountInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info
        ? GroupAccountInfo.toJSON(message.info)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupAccountInfoResponse>
  ): QueryGroupAccountInfoResponse {
    const message = {
      ...baseQueryGroupAccountInfoResponse,
    } as QueryGroupAccountInfoResponse;
    if (object.info !== undefined && object.info !== null) {
      message.info = GroupAccountInfo.fromPartial(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },
};

const baseQueryGroupMembersRequest: object = { groupId: Long.UZERO };

export const QueryGroupMembersRequest = {
  encode(
    message: QueryGroupMembersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupMembersRequest,
    } as QueryGroupMembersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupMembersRequest {
    const message = {
      ...baseQueryGroupMembersRequest,
    } as QueryGroupMembersRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Long.fromString(object.groupId);
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupMembersRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupMembersRequest>
  ): QueryGroupMembersRequest {
    const message = {
      ...baseQueryGroupMembersRequest,
    } as QueryGroupMembersRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId as Long;
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupMembersResponse: object = {};

export const QueryGroupMembersResponse = {
  encode(
    message: QueryGroupMembersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.members) {
      GroupMember.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupMembersResponse,
    } as QueryGroupMembersResponse;
    message.members = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(GroupMember.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupMembersResponse {
    const message = {
      ...baseQueryGroupMembersResponse,
    } as QueryGroupMembersResponse;
    message.members = [];
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(GroupMember.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupMembersResponse): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? GroupMember.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupMembersResponse>
  ): QueryGroupMembersResponse {
    const message = {
      ...baseQueryGroupMembersResponse,
    } as QueryGroupMembersResponse;
    message.members = [];
    if (object.members !== undefined && object.members !== null) {
      for (const e of object.members) {
        message.members.push(GroupMember.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupsByAdminRequest: object = { admin: "" };

export const QueryGroupsByAdminRequest = {
  encode(
    message: QueryGroupsByAdminRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupsByAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupsByAdminRequest,
    } as QueryGroupsByAdminRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupsByAdminRequest {
    const message = {
      ...baseQueryGroupsByAdminRequest,
    } as QueryGroupsByAdminRequest;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupsByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupsByAdminRequest>
  ): QueryGroupsByAdminRequest {
    const message = {
      ...baseQueryGroupsByAdminRequest,
    } as QueryGroupsByAdminRequest;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupsByAdminResponse: object = {};

export const QueryGroupsByAdminResponse = {
  encode(
    message: QueryGroupsByAdminResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupsByAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupsByAdminResponse,
    } as QueryGroupsByAdminResponse;
    message.groups = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupsByAdminResponse {
    const message = {
      ...baseQueryGroupsByAdminResponse,
    } as QueryGroupsByAdminResponse;
    message.groups = [];
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupsByAdminResponse): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? GroupInfo.toJSON(e) : undefined
      );
    } else {
      obj.groups = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupsByAdminResponse>
  ): QueryGroupsByAdminResponse {
    const message = {
      ...baseQueryGroupsByAdminResponse,
    } as QueryGroupsByAdminResponse;
    message.groups = [];
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupAccountsByGroupRequest: object = { groupId: Long.UZERO };

export const QueryGroupAccountsByGroupRequest = {
  encode(
    message: QueryGroupAccountsByGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.groupId.isZero()) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupAccountsByGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupAccountsByGroupRequest,
    } as QueryGroupAccountsByGroupRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupAccountsByGroupRequest {
    const message = {
      ...baseQueryGroupAccountsByGroupRequest,
    } as QueryGroupAccountsByGroupRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = Long.fromString(object.groupId);
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupAccountsByGroupRequest): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = (message.groupId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupAccountsByGroupRequest>
  ): QueryGroupAccountsByGroupRequest {
    const message = {
      ...baseQueryGroupAccountsByGroupRequest,
    } as QueryGroupAccountsByGroupRequest;
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = object.groupId as Long;
    } else {
      message.groupId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupAccountsByGroupResponse: object = {};

export const QueryGroupAccountsByGroupResponse = {
  encode(
    message: QueryGroupAccountsByGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.groupAccounts) {
      GroupAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupAccountsByGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupAccountsByGroupResponse,
    } as QueryGroupAccountsByGroupResponse;
    message.groupAccounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupAccounts.push(
            GroupAccountInfo.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupAccountsByGroupResponse {
    const message = {
      ...baseQueryGroupAccountsByGroupResponse,
    } as QueryGroupAccountsByGroupResponse;
    message.groupAccounts = [];
    if (object.groupAccounts !== undefined && object.groupAccounts !== null) {
      for (const e of object.groupAccounts) {
        message.groupAccounts.push(GroupAccountInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupAccountsByGroupResponse): unknown {
    const obj: any = {};
    if (message.groupAccounts) {
      obj.groupAccounts = message.groupAccounts.map((e) =>
        e ? GroupAccountInfo.toJSON(e) : undefined
      );
    } else {
      obj.groupAccounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupAccountsByGroupResponse>
  ): QueryGroupAccountsByGroupResponse {
    const message = {
      ...baseQueryGroupAccountsByGroupResponse,
    } as QueryGroupAccountsByGroupResponse;
    message.groupAccounts = [];
    if (object.groupAccounts !== undefined && object.groupAccounts !== null) {
      for (const e of object.groupAccounts) {
        message.groupAccounts.push(GroupAccountInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupAccountsByAdminRequest: object = { admin: "" };

export const QueryGroupAccountsByAdminRequest = {
  encode(
    message: QueryGroupAccountsByAdminRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupAccountsByAdminRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupAccountsByAdminRequest,
    } as QueryGroupAccountsByAdminRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupAccountsByAdminRequest {
    const message = {
      ...baseQueryGroupAccountsByAdminRequest,
    } as QueryGroupAccountsByAdminRequest;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupAccountsByAdminRequest): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupAccountsByAdminRequest>
  ): QueryGroupAccountsByAdminRequest {
    const message = {
      ...baseQueryGroupAccountsByAdminRequest,
    } as QueryGroupAccountsByAdminRequest;
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    } else {
      message.admin = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGroupAccountsByAdminResponse: object = {};

export const QueryGroupAccountsByAdminResponse = {
  encode(
    message: QueryGroupAccountsByAdminResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.groupAccounts) {
      GroupAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGroupAccountsByAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGroupAccountsByAdminResponse,
    } as QueryGroupAccountsByAdminResponse;
    message.groupAccounts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupAccounts.push(
            GroupAccountInfo.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupAccountsByAdminResponse {
    const message = {
      ...baseQueryGroupAccountsByAdminResponse,
    } as QueryGroupAccountsByAdminResponse;
    message.groupAccounts = [];
    if (object.groupAccounts !== undefined && object.groupAccounts !== null) {
      for (const e of object.groupAccounts) {
        message.groupAccounts.push(GroupAccountInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupAccountsByAdminResponse): unknown {
    const obj: any = {};
    if (message.groupAccounts) {
      obj.groupAccounts = message.groupAccounts.map((e) =>
        e ? GroupAccountInfo.toJSON(e) : undefined
      );
    } else {
      obj.groupAccounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGroupAccountsByAdminResponse>
  ): QueryGroupAccountsByAdminResponse {
    const message = {
      ...baseQueryGroupAccountsByAdminResponse,
    } as QueryGroupAccountsByAdminResponse;
    message.groupAccounts = [];
    if (object.groupAccounts !== undefined && object.groupAccounts !== null) {
      for (const e of object.groupAccounts) {
        message.groupAccounts.push(GroupAccountInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryProposalRequest: object = { proposalId: Long.UZERO };

export const QueryProposalRequest = {
  encode(
    message: QueryProposalRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryProposalRequest } as QueryProposalRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalRequest {
    const message = { ...baseQueryProposalRequest } as QueryProposalRequest;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest {
    const message = { ...baseQueryProposalRequest } as QueryProposalRequest;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },
};

const baseQueryProposalResponse: object = {};

export const QueryProposalResponse = {
  encode(
    message: QueryProposalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryProposalResponse } as QueryProposalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalResponse {
    const message = { ...baseQueryProposalResponse } as QueryProposalResponse;
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromJSON(object.proposal);
    } else {
      message.proposal = undefined;
    }
    return message;
  },

  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProposalResponse>
  ): QueryProposalResponse {
    const message = { ...baseQueryProposalResponse } as QueryProposalResponse;
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromPartial(object.proposal);
    } else {
      message.proposal = undefined;
    }
    return message;
  },
};

const baseQueryProposalsByGroupAccountRequest: object = { address: "" };

export const QueryProposalsByGroupAccountRequest = {
  encode(
    message: QueryProposalsByGroupAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalsByGroupAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProposalsByGroupAccountRequest,
    } as QueryProposalsByGroupAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalsByGroupAccountRequest {
    const message = {
      ...baseQueryProposalsByGroupAccountRequest,
    } as QueryProposalsByGroupAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryProposalsByGroupAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProposalsByGroupAccountRequest>
  ): QueryProposalsByGroupAccountRequest {
    const message = {
      ...baseQueryProposalsByGroupAccountRequest,
    } as QueryProposalsByGroupAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryProposalsByGroupAccountResponse: object = {};

export const QueryProposalsByGroupAccountResponse = {
  encode(
    message: QueryProposalsByGroupAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalsByGroupAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProposalsByGroupAccountResponse,
    } as QueryProposalsByGroupAccountResponse;
    message.proposals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalsByGroupAccountResponse {
    const message = {
      ...baseQueryProposalsByGroupAccountResponse,
    } as QueryProposalsByGroupAccountResponse;
    message.proposals = [];
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryProposalsByGroupAccountResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? Proposal.toJSON(e) : undefined
      );
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProposalsByGroupAccountResponse>
  ): QueryProposalsByGroupAccountResponse {
    const message = {
      ...baseQueryProposalsByGroupAccountResponse,
    } as QueryProposalsByGroupAccountResponse;
    message.proposals = [];
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVoteByProposalVoterRequest: object = {
  proposalId: Long.UZERO,
  voter: "",
};

export const QueryVoteByProposalVoterRequest = {
  encode(
    message: QueryVoteByProposalVoterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVoteByProposalVoterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVoteByProposalVoterRequest,
    } as QueryVoteByProposalVoterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVoteByProposalVoterRequest {
    const message = {
      ...baseQueryVoteByProposalVoterRequest,
    } as QueryVoteByProposalVoterRequest;
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
    return message;
  },

  toJSON(message: QueryVoteByProposalVoterRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVoteByProposalVoterRequest>
  ): QueryVoteByProposalVoterRequest {
    const message = {
      ...baseQueryVoteByProposalVoterRequest,
    } as QueryVoteByProposalVoterRequest;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    return message;
  },
};

const baseQueryVoteByProposalVoterResponse: object = {};

export const QueryVoteByProposalVoterResponse = {
  encode(
    message: QueryVoteByProposalVoterResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVoteByProposalVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVoteByProposalVoterResponse,
    } as QueryVoteByProposalVoterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVoteByProposalVoterResponse {
    const message = {
      ...baseQueryVoteByProposalVoterResponse,
    } as QueryVoteByProposalVoterResponse;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromJSON(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },

  toJSON(message: QueryVoteByProposalVoterResponse): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVoteByProposalVoterResponse>
  ): QueryVoteByProposalVoterResponse {
    const message = {
      ...baseQueryVoteByProposalVoterResponse,
    } as QueryVoteByProposalVoterResponse;
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },
};

const baseQueryVotesByProposalRequest: object = { proposalId: Long.UZERO };

export const QueryVotesByProposalRequest = {
  encode(
    message: QueryVotesByProposalRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVotesByProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVotesByProposalRequest,
    } as QueryVotesByProposalRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesByProposalRequest {
    const message = {
      ...baseQueryVotesByProposalRequest,
    } as QueryVotesByProposalRequest;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVotesByProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined &&
      (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVotesByProposalRequest>
  ): QueryVotesByProposalRequest {
    const message = {
      ...baseQueryVotesByProposalRequest,
    } as QueryVotesByProposalRequest;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVotesByProposalResponse: object = {};

export const QueryVotesByProposalResponse = {
  encode(
    message: QueryVotesByProposalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVotesByProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVotesByProposalResponse,
    } as QueryVotesByProposalResponse;
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesByProposalResponse {
    const message = {
      ...baseQueryVotesByProposalResponse,
    } as QueryVotesByProposalResponse;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVotesByProposalResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVotesByProposalResponse>
  ): QueryVotesByProposalResponse {
    const message = {
      ...baseQueryVotesByProposalResponse,
    } as QueryVotesByProposalResponse;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVotesByVoterRequest: object = { voter: "" };

export const QueryVotesByVoterRequest = {
  encode(
    message: QueryVotesByVoterRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVotesByVoterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVotesByVoterRequest,
    } as QueryVotesByVoterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesByVoterRequest {
    const message = {
      ...baseQueryVotesByVoterRequest,
    } as QueryVotesByVoterRequest;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVotesByVoterRequest): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVotesByVoterRequest>
  ): QueryVotesByVoterRequest {
    const message = {
      ...baseQueryVotesByVoterRequest,
    } as QueryVotesByVoterRequest;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVotesByVoterResponse: object = {};

export const QueryVotesByVoterResponse = {
  encode(
    message: QueryVotesByVoterResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryVotesByVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVotesByVoterResponse,
    } as QueryVotesByVoterResponse;
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotesByVoterResponse {
    const message = {
      ...baseQueryVotesByVoterResponse,
    } as QueryVotesByVoterResponse;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryVotesByVoterResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVotesByVoterResponse>
  ): QueryVotesByVoterResponse {
    const message = {
      ...baseQueryVotesByVoterResponse,
    } as QueryVotesByVoterResponse;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query is the regen.group.v1alpha1 Query service. */
export interface Query {
  /** GroupInfo queries group info based on group id. */
  GroupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
  /** GroupAccountInfo queries group account info based on group account address. */
  GroupAccountInfo(
    request: QueryGroupAccountInfoRequest
  ): Promise<QueryGroupAccountInfoResponse>;
  /** GroupMembers queries members of a group */
  GroupMembers(
    request: QueryGroupMembersRequest
  ): Promise<QueryGroupMembersResponse>;
  /** GroupsByAdmin queries groups by admin address. */
  GroupsByAdmin(
    request: QueryGroupsByAdminRequest
  ): Promise<QueryGroupsByAdminResponse>;
  /** GroupAccountsByGroup queries group accounts by group id. */
  GroupAccountsByGroup(
    request: QueryGroupAccountsByGroupRequest
  ): Promise<QueryGroupAccountsByGroupResponse>;
  /** GroupsByAdmin queries group accounts by admin address. */
  GroupAccountsByAdmin(
    request: QueryGroupAccountsByAdminRequest
  ): Promise<QueryGroupAccountsByAdminResponse>;
  /** Proposal queries a proposal based on proposal id. */
  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** ProposalsByGroupAccount queries proposals based on group account address. */
  ProposalsByGroupAccount(
    request: QueryProposalsByGroupAccountRequest
  ): Promise<QueryProposalsByGroupAccountResponse>;
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  VoteByProposalVoter(
    request: QueryVoteByProposalVoterRequest
  ): Promise<QueryVoteByProposalVoterResponse>;
  /** VotesByProposal queries a vote by proposal. */
  VotesByProposal(
    request: QueryVotesByProposalRequest
  ): Promise<QueryVotesByProposalResponse>;
  /** VotesByVoter queries a vote by voter. */
  VotesByVoter(
    request: QueryVotesByVoterRequest
  ): Promise<QueryVotesByVoterResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GroupInfo = this.GroupInfo.bind(this);
    this.GroupAccountInfo = this.GroupAccountInfo.bind(this);
    this.GroupMembers = this.GroupMembers.bind(this);
    this.GroupsByAdmin = this.GroupsByAdmin.bind(this);
    this.GroupAccountsByGroup = this.GroupAccountsByGroup.bind(this);
    this.GroupAccountsByAdmin = this.GroupAccountsByAdmin.bind(this);
    this.Proposal = this.Proposal.bind(this);
    this.ProposalsByGroupAccount = this.ProposalsByGroupAccount.bind(this);
    this.VoteByProposalVoter = this.VoteByProposalVoter.bind(this);
    this.VotesByProposal = this.VotesByProposal.bind(this);
    this.VotesByVoter = this.VotesByVoter.bind(this);
  }
  GroupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse> {
    const data = QueryGroupInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "regen.group.v1alpha1.Query",
      "GroupInfo",
      data
    );
    return promise.then((data) =>
      QueryGroupInfoResponse.decode(new _m0.Reader(data))
    );
  }

  GroupAccountInfo(
    request: QueryGroupAccountInfoRequest
  ): Promise<QueryGroupAccountInfoResponse> {
    const data = QueryGroupAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "regen.group.v1alpha1.Query",
      "GroupAccountInfo",
      data
    );
    return promise.then((data) =>
      QueryGroupAccountInfoResponse.decode(new _m0.Reader(data))
    );
  }

  GroupMembers(
    request: QueryGroupMembersRequest
  ): Promise<QueryGroupMembersResponse> {
    const data = QueryGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "regen.group.v1alpha1.Query",
      "GroupMembers",
      data
    );
    return promise.then((data) =>
      QueryGroupMembersResponse.decode(new _m0.Reader(data))
    );
  }

  GroupsByAdmin(
    request: QueryGroupsByAdminRequest
  ): Promise<QueryGroupsByAdminResponse> {
    const data = QueryGroupsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request(
      "regen.group.v1alpha1.Query",
      "GroupsByAdmin",
      data
    );
    return promise.then((data) =>
      QueryGroupsByAdminResponse.decode(new _m0.Reader(data))
    );
  }

  GroupAccountsByGroup(
    request: QueryGroupAccountsByGroupRequest
  ): Promise<QueryGroupAccountsByGroupResponse> {
    const data = QueryGroupAccountsByGroupRequest.encode(request).finish();
    const promise = this.rpc.request(
      "regen.group.v1alpha1.Query",
      "GroupAccountsByGroup",
      data
    );
    return promise.then((data) =>
      QueryGroupAccountsByGroupResponse.decode(new _m0.Reader(data))
    );
  }

  GroupAccountsByAdmin(
    request: QueryGroupAccountsByAdminRequest
  ): Promise<QueryGroupAccountsByAdminResponse> {
    const data = QueryGroupAccountsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request(
      "regen.group.v1alpha1.Query",
      "GroupAccountsByAdmin",
      data
    );
    return promise.then((data) =>
      QueryGroupAccountsByAdminResponse.decode(new _m0.Reader(data))
    );
  }

  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "regen.group.v1alpha1.Query",
      "Proposal",
      data
    );
    return promise.then((data) =>
      QueryProposalResponse.decode(new _m0.Reader(data))
    );
  }

  ProposalsByGroupAccount(
    request: QueryProposalsByGroupAccountRequest
  ): Promise<QueryProposalsByGroupAccountResponse> {
    const data = QueryProposalsByGroupAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "regen.group.v1alpha1.Query",
      "ProposalsByGroupAccount",
      data
    );
    return promise.then((data) =>
      QueryProposalsByGroupAccountResponse.decode(new _m0.Reader(data))
    );
  }

  VoteByProposalVoter(
    request: QueryVoteByProposalVoterRequest
  ): Promise<QueryVoteByProposalVoterResponse> {
    const data = QueryVoteByProposalVoterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "regen.group.v1alpha1.Query",
      "VoteByProposalVoter",
      data
    );
    return promise.then((data) =>
      QueryVoteByProposalVoterResponse.decode(new _m0.Reader(data))
    );
  }

  VotesByProposal(
    request: QueryVotesByProposalRequest
  ): Promise<QueryVotesByProposalResponse> {
    const data = QueryVotesByProposalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "regen.group.v1alpha1.Query",
      "VotesByProposal",
      data
    );
    return promise.then((data) =>
      QueryVotesByProposalResponse.decode(new _m0.Reader(data))
    );
  }

  VotesByVoter(
    request: QueryVotesByVoterRequest
  ): Promise<QueryVotesByVoterResponse> {
    const data = QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "regen.group.v1alpha1.Query",
      "VotesByVoter",
      data
    );
    return promise.then((data) =>
      QueryVotesByVoterResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
