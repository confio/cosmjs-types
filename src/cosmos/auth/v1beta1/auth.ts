/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.auth.v1beta1";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
  address: string;
  pubKey?: Any;
  accountNumber: Long;
  sequence: Long;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
  baseAccount?: BaseAccount;
  name: string;
  permissions: string[];
}
/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 *
 * Since: cosmos-sdk 0.47
 */
export interface ModuleCredential {
  /** module_name is the name of the module used for address derivation (passed into address.Module). */
  moduleName: string;
  /**
   * derivation_keys is for deriving a module account address (passed into address.Module)
   * adding more keys creates sub-account addresses (passed into address.Derive)
   */
  derivationKeys: Uint8Array[];
}
/** Params defines the parameters for the auth module. */
export interface Params {
  maxMemoCharacters: Long;
  txSigLimit: Long;
  txSizeCostPerByte: Long;
  sigVerifyCostEd25519: Long;
  sigVerifyCostSecp256k1: Long;
}
function createBaseBaseAccount(): BaseAccount {
  return {
    address: "",
    pubKey: undefined,
    accountNumber: Long.UZERO,
    sequence: Long.UZERO,
  };
}
export const BaseAccount = {
  encode(message: BaseAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountNumber = reader.uint64() as Long;
          break;
        case 4:
          message.sequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BaseAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      accountNumber: isSet(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
    };
  },
  toJSON(message: BaseAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.accountNumber !== undefined &&
      (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BaseAccount>, I>>(object: I): BaseAccount {
    const message = createBaseBaseAccount();
    message.address = object.address ?? "";
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.accountNumber =
      object.accountNumber !== undefined && object.accountNumber !== null
        ? Long.fromValue(object.accountNumber)
        : Long.UZERO;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? Long.fromValue(object.sequence)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: BaseAccountAmino): BaseAccount {
    return {
      address: object.address,
      pubKey: object?.pub_key ? Any.fromAmino(object.pub_key) : undefined,
      accountNumber: Long.fromString(object.account_number),
      sequence: Long.fromString(object.sequence),
    };
  },
  toAmino(message: BaseAccount): BaseAccountAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
    obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BaseAccountAminoMsg): BaseAccount {
    return BaseAccount.fromAmino(object.value);
  },
  toAminoMsg(message: BaseAccount): BaseAccountAminoMsg {
    return {
      type: "cosmos-sdk/BaseAccount",
      value: BaseAccount.toAmino(message),
    };
  },
};
function createBaseModuleAccount(): ModuleAccount {
  return {
    baseAccount: undefined,
    name: "",
    permissions: [],
  };
}
export const ModuleAccount = {
  encode(message: ModuleAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleAccount {
    return {
      baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => String(e)) : [],
    };
  },
  toJSON(message: ModuleAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ModuleAccount>, I>>(object: I): ModuleAccount {
    const message = createBaseModuleAccount();
    message.baseAccount =
      object.baseAccount !== undefined && object.baseAccount !== null
        ? BaseAccount.fromPartial(object.baseAccount)
        : undefined;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: ModuleAccountAmino): ModuleAccount {
    return {
      baseAccount: object?.base_account ? BaseAccount.fromAmino(object.base_account) : undefined,
      name: object.name,
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => e) : [],
    };
  },
  toAmino(message: ModuleAccount): ModuleAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
    obj.name = message.name;
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => e);
    } else {
      obj.permissions = [];
    }
    return obj;
  },
  fromAminoMsg(object: ModuleAccountAminoMsg): ModuleAccount {
    return ModuleAccount.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleAccount): ModuleAccountAminoMsg {
    return {
      type: "cosmos-sdk/ModuleAccount",
      value: ModuleAccount.toAmino(message),
    };
  },
};
function createBaseModuleCredential(): ModuleCredential {
  return {
    moduleName: "",
    derivationKeys: [],
  };
}
export const ModuleCredential = {
  encode(message: ModuleCredential, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    for (const v of message.derivationKeys) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.derivationKeys.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleCredential {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      derivationKeys: Array.isArray(object?.derivationKeys)
        ? object.derivationKeys.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },
  toJSON(message: ModuleCredential): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    if (message.derivationKeys) {
      obj.derivationKeys = message.derivationKeys.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.derivationKeys = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ModuleCredential>, I>>(object: I): ModuleCredential {
    const message = createBaseModuleCredential();
    message.moduleName = object.moduleName ?? "";
    message.derivationKeys = object.derivationKeys?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: ModuleCredentialAmino): ModuleCredential {
    return {
      moduleName: object.module_name,
      derivationKeys: Array.isArray(object?.derivation_keys) ? object.derivation_keys.map((e: any) => e) : [],
    };
  },
  toAmino(message: ModuleCredential): ModuleCredentialAmino {
    const obj: any = {};
    obj.module_name = message.moduleName;
    if (message.derivationKeys) {
      obj.derivation_keys = message.derivationKeys.map((e) => e);
    } else {
      obj.derivation_keys = [];
    }
    return obj;
  },
  fromAminoMsg(object: ModuleCredentialAminoMsg): ModuleCredential {
    return ModuleCredential.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleCredential): ModuleCredentialAminoMsg {
    return {
      type: "cosmos-sdk/ModuleCredential",
      value: ModuleCredential.toAmino(message),
    };
  },
};
function createBaseParams(): Params {
  return {
    maxMemoCharacters: Long.UZERO,
    txSigLimit: Long.UZERO,
    txSizeCostPerByte: Long.UZERO,
    sigVerifyCostEd25519: Long.UZERO,
    sigVerifyCostSecp256k1: Long.UZERO,
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxMemoCharacters.isZero()) {
      writer.uint32(8).uint64(message.maxMemoCharacters);
    }
    if (!message.txSigLimit.isZero()) {
      writer.uint32(16).uint64(message.txSigLimit);
    }
    if (!message.txSizeCostPerByte.isZero()) {
      writer.uint32(24).uint64(message.txSizeCostPerByte);
    }
    if (!message.sigVerifyCostEd25519.isZero()) {
      writer.uint32(32).uint64(message.sigVerifyCostEd25519);
    }
    if (!message.sigVerifyCostSecp256k1.isZero()) {
      writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxMemoCharacters = reader.uint64() as Long;
          break;
        case 2:
          message.txSigLimit = reader.uint64() as Long;
          break;
        case 3:
          message.txSizeCostPerByte = reader.uint64() as Long;
          break;
        case 4:
          message.sigVerifyCostEd25519 = reader.uint64() as Long;
          break;
        case 5:
          message.sigVerifyCostSecp256k1 = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      maxMemoCharacters: isSet(object.maxMemoCharacters)
        ? Long.fromValue(object.maxMemoCharacters)
        : Long.UZERO,
      txSigLimit: isSet(object.txSigLimit) ? Long.fromValue(object.txSigLimit) : Long.UZERO,
      txSizeCostPerByte: isSet(object.txSizeCostPerByte)
        ? Long.fromValue(object.txSizeCostPerByte)
        : Long.UZERO,
      sigVerifyCostEd25519: isSet(object.sigVerifyCostEd25519)
        ? Long.fromValue(object.sigVerifyCostEd25519)
        : Long.UZERO,
      sigVerifyCostSecp256k1: isSet(object.sigVerifyCostSecp256k1)
        ? Long.fromValue(object.sigVerifyCostSecp256k1)
        : Long.UZERO,
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxMemoCharacters !== undefined &&
      (obj.maxMemoCharacters = (message.maxMemoCharacters || Long.UZERO).toString());
    message.txSigLimit !== undefined && (obj.txSigLimit = (message.txSigLimit || Long.UZERO).toString());
    message.txSizeCostPerByte !== undefined &&
      (obj.txSizeCostPerByte = (message.txSizeCostPerByte || Long.UZERO).toString());
    message.sigVerifyCostEd25519 !== undefined &&
      (obj.sigVerifyCostEd25519 = (message.sigVerifyCostEd25519 || Long.UZERO).toString());
    message.sigVerifyCostSecp256k1 !== undefined &&
      (obj.sigVerifyCostSecp256k1 = (message.sigVerifyCostSecp256k1 || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxMemoCharacters =
      object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null
        ? Long.fromValue(object.maxMemoCharacters)
        : Long.UZERO;
    message.txSigLimit =
      object.txSigLimit !== undefined && object.txSigLimit !== null
        ? Long.fromValue(object.txSigLimit)
        : Long.UZERO;
    message.txSizeCostPerByte =
      object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null
        ? Long.fromValue(object.txSizeCostPerByte)
        : Long.UZERO;
    message.sigVerifyCostEd25519 =
      object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null
        ? Long.fromValue(object.sigVerifyCostEd25519)
        : Long.UZERO;
    message.sigVerifyCostSecp256k1 =
      object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null
        ? Long.fromValue(object.sigVerifyCostSecp256k1)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      maxMemoCharacters: Long.fromString(object.max_memo_characters),
      txSigLimit: Long.fromString(object.tx_sig_limit),
      txSizeCostPerByte: Long.fromString(object.tx_size_cost_per_byte),
      sigVerifyCostEd25519: Long.fromString(object.sig_verify_cost_ed25519),
      sigVerifyCostSecp256k1: Long.fromString(object.sig_verify_cost_secp256k1),
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_memo_characters = message.maxMemoCharacters ? message.maxMemoCharacters.toString() : undefined;
    obj.tx_sig_limit = message.txSigLimit ? message.txSigLimit.toString() : undefined;
    obj.tx_size_cost_per_byte = message.txSizeCostPerByte ? message.txSizeCostPerByte.toString() : undefined;
    obj.sig_verify_cost_ed25519 = message.sigVerifyCostEd25519
      ? message.sigVerifyCostEd25519.toString()
      : undefined;
    obj.sig_verify_cost_secp256k1 = message.sigVerifyCostSecp256k1
      ? message.sigVerifyCostSecp256k1.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/auth/Params",
      value: Params.toAmino(message),
    };
  },
};
