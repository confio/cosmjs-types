/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AccessConfig } from "../../../cosmwasm/wasm/v1beta1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmwasm.wasm.v1beta1";

/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /**
   * Source is a valid absolute HTTPS URI to the contract's source code,
   * optional
   */
  source: string;
  /** Builder is a valid docker image name with tag, optional */
  builder: string;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiatePermission?: AccessConfig;
}

/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** InitMsg json encoded message to be passed to the contract on instantiation */
  initMsg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}

/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  codeId: Long;
  /** MigrateMsg json encoded message to be passed to the contract on migration */
  migrateMsg: Uint8Array;
}

/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** NewAdmin address to be set */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the new WASM codes */
  codeIds: Long[];
}

/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the WASM codes */
  codeIds: Long[];
}

const baseStoreCodeProposal: object = { title: "", description: "", runAs: "", source: "", builder: "" };

export const StoreCodeProposal = {
  encode(message: StoreCodeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }
    if (message.source !== "") {
      writer.uint32(42).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(50).string(message.builder);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreCodeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStoreCodeProposal } as StoreCodeProposal;
    message.wasmByteCode = new Uint8Array();
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
          message.runAs = reader.string();
          break;
        case 4:
          message.wasmByteCode = reader.bytes();
          break;
        case 5:
          message.source = reader.string();
          break;
        case 6:
          message.builder = reader.string();
          break;
        case 7:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreCodeProposal {
    const message = { ...baseStoreCodeProposal } as StoreCodeProposal;
    message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
    message.description =
      object.description !== undefined && object.description !== null ? String(object.description) : "";
    message.runAs = object.runAs !== undefined && object.runAs !== null ? String(object.runAs) : "";
    message.wasmByteCode =
      object.wasmByteCode !== undefined && object.wasmByteCode !== null
        ? bytesFromBase64(object.wasmByteCode)
        : new Uint8Array();
    message.source = object.source !== undefined && object.source !== null ? String(object.source) : "";
    message.builder = object.builder !== undefined && object.builder !== null ? String(object.builder) : "";
    message.instantiatePermission =
      object.instantiatePermission !== undefined && object.instantiatePermission !== null
        ? AccessConfig.fromJSON(object.instantiatePermission)
        : undefined;
    return message;
  },

  toJSON(message: StoreCodeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.wasmByteCode !== undefined &&
      (obj.wasmByteCode = base64FromBytes(
        message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array(),
      ));
    message.source !== undefined && (obj.source = message.source);
    message.builder !== undefined && (obj.builder = message.builder);
    message.instantiatePermission !== undefined &&
      (obj.instantiatePermission = message.instantiatePermission
        ? AccessConfig.toJSON(message.instantiatePermission)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoreCodeProposal>, I>>(object: I): StoreCodeProposal {
    const message = { ...baseStoreCodeProposal } as StoreCodeProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.instantiatePermission =
      object.instantiatePermission !== undefined && object.instantiatePermission !== null
        ? AccessConfig.fromPartial(object.instantiatePermission)
        : undefined;
    return message;
  },
};

const baseInstantiateContractProposal: object = {
  title: "",
  description: "",
  runAs: "",
  admin: "",
  codeId: Long.UZERO,
  label: "",
};

export const InstantiateContractProposal = {
  encode(message: InstantiateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(58).bytes(message.initMsg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstantiateContractProposal } as InstantiateContractProposal;
    message.funds = [];
    message.initMsg = new Uint8Array();
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
          message.runAs = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.codeId = reader.uint64() as Long;
          break;
        case 6:
          message.label = reader.string();
          break;
        case 7:
          message.initMsg = reader.bytes();
          break;
        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstantiateContractProposal {
    const message = { ...baseInstantiateContractProposal } as InstantiateContractProposal;
    message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
    message.description =
      object.description !== undefined && object.description !== null ? String(object.description) : "";
    message.runAs = object.runAs !== undefined && object.runAs !== null ? String(object.runAs) : "";
    message.admin = object.admin !== undefined && object.admin !== null ? String(object.admin) : "";
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromString(object.codeId) : Long.UZERO;
    message.label = object.label !== undefined && object.label !== null ? String(object.label) : "";
    message.initMsg =
      object.initMsg !== undefined && object.initMsg !== null
        ? bytesFromBase64(object.initMsg)
        : new Uint8Array();
    message.funds = (object.funds ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: InstantiateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.label !== undefined && (obj.label = message.label);
    message.initMsg !== undefined &&
      (obj.initMsg = base64FromBytes(message.initMsg !== undefined ? message.initMsg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.funds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstantiateContractProposal>, I>>(
    object: I,
  ): InstantiateContractProposal {
    const message = { ...baseInstantiateContractProposal } as InstantiateContractProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.initMsg = object.initMsg ?? new Uint8Array();
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

const baseMigrateContractProposal: object = {
  title: "",
  description: "",
  runAs: "",
  contract: "",
  codeId: Long.UZERO,
};

export const MigrateContractProposal = {
  encode(message: MigrateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.migrateMsg.length !== 0) {
      writer.uint32(50).bytes(message.migrateMsg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMigrateContractProposal } as MigrateContractProposal;
    message.migrateMsg = new Uint8Array();
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
          message.runAs = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        case 5:
          message.codeId = reader.uint64() as Long;
          break;
        case 6:
          message.migrateMsg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MigrateContractProposal {
    const message = { ...baseMigrateContractProposal } as MigrateContractProposal;
    message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
    message.description =
      object.description !== undefined && object.description !== null ? String(object.description) : "";
    message.runAs = object.runAs !== undefined && object.runAs !== null ? String(object.runAs) : "";
    message.contract =
      object.contract !== undefined && object.contract !== null ? String(object.contract) : "";
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromString(object.codeId) : Long.UZERO;
    message.migrateMsg =
      object.migrateMsg !== undefined && object.migrateMsg !== null
        ? bytesFromBase64(object.migrateMsg)
        : new Uint8Array();
    return message;
  },

  toJSON(message: MigrateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.migrateMsg !== undefined &&
      (obj.migrateMsg = base64FromBytes(
        message.migrateMsg !== undefined ? message.migrateMsg : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MigrateContractProposal>, I>>(object: I): MigrateContractProposal {
    const message = { ...baseMigrateContractProposal } as MigrateContractProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.contract = object.contract ?? "";
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.migrateMsg = object.migrateMsg ?? new Uint8Array();
    return message;
  },
};

const baseUpdateAdminProposal: object = { title: "", description: "", newAdmin: "", contract: "" };

export const UpdateAdminProposal = {
  encode(message: UpdateAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateAdminProposal } as UpdateAdminProposal;
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
          message.newAdmin = reader.string();
          break;
        case 4:
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAdminProposal {
    const message = { ...baseUpdateAdminProposal } as UpdateAdminProposal;
    message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
    message.description =
      object.description !== undefined && object.description !== null ? String(object.description) : "";
    message.newAdmin =
      object.newAdmin !== undefined && object.newAdmin !== null ? String(object.newAdmin) : "";
    message.contract =
      object.contract !== undefined && object.contract !== null ? String(object.contract) : "";
    return message;
  },

  toJSON(message: UpdateAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAdminProposal>, I>>(object: I): UpdateAdminProposal {
    const message = { ...baseUpdateAdminProposal } as UpdateAdminProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

const baseClearAdminProposal: object = { title: "", description: "", contract: "" };

export const ClearAdminProposal = {
  encode(message: ClearAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseClearAdminProposal } as ClearAdminProposal;
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
          message.contract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClearAdminProposal {
    const message = { ...baseClearAdminProposal } as ClearAdminProposal;
    message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
    message.description =
      object.description !== undefined && object.description !== null ? String(object.description) : "";
    message.contract =
      object.contract !== undefined && object.contract !== null ? String(object.contract) : "";
    return message;
  },

  toJSON(message: ClearAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClearAdminProposal>, I>>(object: I): ClearAdminProposal {
    const message = { ...baseClearAdminProposal } as ClearAdminProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

const basePinCodesProposal: object = { title: "", description: "", codeIds: Long.UZERO };

export const PinCodesProposal = {
  encode(message: PinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePinCodesProposal } as PinCodesProposal;
    message.codeIds = [];
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64() as Long);
            }
          } else {
            message.codeIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PinCodesProposal {
    const message = { ...basePinCodesProposal } as PinCodesProposal;
    message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
    message.description =
      object.description !== undefined && object.description !== null ? String(object.description) : "";
    message.codeIds = (object.codeIds ?? []).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: PinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.codeIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PinCodesProposal>, I>>(object: I): PinCodesProposal {
    const message = { ...basePinCodesProposal } as PinCodesProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

const baseUnpinCodesProposal: object = { title: "", description: "", codeIds: Long.UZERO };

export const UnpinCodesProposal = {
  encode(message: UnpinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnpinCodesProposal } as UnpinCodesProposal;
    message.codeIds = [];
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64() as Long);
            }
          } else {
            message.codeIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnpinCodesProposal {
    const message = { ...baseUnpinCodesProposal } as UnpinCodesProposal;
    message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
    message.description =
      object.description !== undefined && object.description !== null ? String(object.description) : "";
    message.codeIds = (object.codeIds ?? []).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: UnpinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.codeIds) {
      obj.codeIds = message.codeIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.codeIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnpinCodesProposal>, I>>(object: I): UnpinCodesProposal {
    const message = { ...baseUnpinCodesProposal } as UnpinCodesProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map((e) => Long.fromValue(e)) || [];
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
