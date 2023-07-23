/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "cosmos.bank.module.v1";
/** Module is the config object of the bank module. */
export interface Module {
  /**
   * blocked_module_accounts configures exceptional module accounts which should be blocked from receiving funds.
   * If left empty it defaults to the list of account names supplied in the auth module configuration as
   * module_account_permissions
   */
  blockedModuleAccountsOverride: string[];
  /** authority defines the custom module authority. If not set, defaults to the governance module. */
  authority: string;
}
function createBaseModule(): Module {
  return {
    blockedModuleAccountsOverride: [],
    authority: "",
  };
}
export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.blockedModuleAccountsOverride) {
      writer.uint32(10).string(v!);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockedModuleAccountsOverride.push(reader.string());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    return {
      blockedModuleAccountsOverride: Array.isArray(object?.blockedModuleAccountsOverride)
        ? object.blockedModuleAccountsOverride.map((e: any) => String(e))
        : [],
      authority: isSet(object.authority) ? String(object.authority) : "",
    };
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    if (message.blockedModuleAccountsOverride) {
      obj.blockedModuleAccountsOverride = message.blockedModuleAccountsOverride.map((e) => e);
    } else {
      obj.blockedModuleAccountsOverride = [];
    }
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    message.blockedModuleAccountsOverride = object.blockedModuleAccountsOverride?.map((e) => e) || [];
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    return {
      blockedModuleAccountsOverride: Array.isArray(object?.blocked_module_accounts_override)
        ? object.blocked_module_accounts_override.map((e: any) => e)
        : [],
      authority: object.authority,
    };
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    if (message.blockedModuleAccountsOverride) {
      obj.blocked_module_accounts_override = message.blockedModuleAccountsOverride.map((e) => e);
    } else {
      obj.blocked_module_accounts_override = [];
    }
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message),
    };
  },
};
