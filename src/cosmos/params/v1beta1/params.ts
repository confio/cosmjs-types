/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.params.v1beta1";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
  title: string;
  description: string;
  changes: ParamChange[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
  subspace: string;
  key: string;
  value: string;
}
function createBaseParameterChangeProposal(): ParameterChangeProposal {
  return {
    title: "",
    description: "",
    changes: [],
  };
}
export const ParameterChangeProposal = {
  encode(message: ParameterChangeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.changes) {
      ParamChange.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ParameterChangeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameterChangeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.changes.push(ParamChange.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParameterChangeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromJSON(e)) : [],
    };
  },
  toJSON(message: ParameterChangeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.changes) {
      obj.changes = message.changes.map((e) => (e ? ParamChange.toJSON(e) : undefined));
    } else {
      obj.changes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParameterChangeProposal>, I>>(object: I): ParameterChangeProposal {
    const message = createBaseParameterChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.changes = object.changes?.map((e) => ParamChange.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParameterChangeProposalAmino): ParameterChangeProposal {
    return {
      title: object.title,
      description: object.description,
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromAmino(e)) : [],
    };
  },
  toAmino(message: ParameterChangeProposal): ParameterChangeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.changes) {
      obj.changes = message.changes.map((e) => (e ? ParamChange.toAmino(e) : undefined));
    } else {
      obj.changes = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParameterChangeProposalAminoMsg): ParameterChangeProposal {
    return ParameterChangeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ParameterChangeProposal): ParameterChangeProposalAminoMsg {
    return {
      type: "cosmos-sdk/ParameterChangeProposal",
      value: ParameterChangeProposal.toAmino(message),
    };
  },
};
function createBaseParamChange(): ParamChange {
  return {
    subspace: "",
    key: "",
    value: "",
  };
}
export const ParamChange = {
  encode(message: ParamChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ParamChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamChange {
    return {
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },
  toJSON(message: ParamChange): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamChange>, I>>(object: I): ParamChange {
    const message = createBaseParamChange();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: ParamChangeAmino): ParamChange {
    return {
      subspace: object.subspace,
      key: object.key,
      value: object.value,
    };
  },
  toAmino(message: ParamChange): ParamChangeAmino {
    const obj: any = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: ParamChangeAminoMsg): ParamChange {
    return ParamChange.fromAmino(object.value);
  },
  toAminoMsg(message: ParamChange): ParamChangeAminoMsg {
    return {
      type: "cosmos-sdk/ParamChange",
      value: ParamChange.toAmino(message),
    };
  },
};
