/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AccessConfig } from "../../../cosmwasm/wasm/v1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmwasm.wasm.v1";

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
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
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
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
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

const baseStoreCodeProposal: object = { title: "", description: "", runAs: "" };

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
    message.wasmByteCode = new Uint8Array();
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
    if (object.runAs !== undefined && object.runAs !== null) {
      message.runAs = String(object.runAs);
    } else {
      message.runAs = "";
    }
    if (object.wasmByteCode !== undefined && object.wasmByteCode !== null) {
      message.wasmByteCode = bytesFromBase64(object.wasmByteCode);
    }
    if (object.instantiatePermission !== undefined && object.instantiatePermission !== null) {
      message.instantiatePermission = AccessConfig.fromJSON(object.instantiatePermission);
    } else {
      message.instantiatePermission = undefined;
    }
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
    message.instantiatePermission !== undefined &&
      (obj.instantiatePermission = message.instantiatePermission
        ? AccessConfig.toJSON(message.instantiatePermission)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StoreCodeProposal>): StoreCodeProposal {
    const message = { ...baseStoreCodeProposal } as StoreCodeProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    if (object.instantiatePermission !== undefined && object.instantiatePermission !== null) {
      message.instantiatePermission = AccessConfig.fromPartial(object.instantiatePermission);
    } else {
      message.instantiatePermission = undefined;
    }
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
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
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
    message.msg = new Uint8Array();
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
          message.msg = reader.bytes();
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
    message.funds = [];
    message.msg = new Uint8Array();
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
    if (object.runAs !== undefined && object.runAs !== null) {
      message.runAs = String(object.runAs);
    } else {
      message.runAs = "";
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = String(object.admin);
    } else {
      message.admin = "";
    }
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Long.fromString(object.codeId);
    } else {
      message.codeId = Long.UZERO;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = bytesFromBase64(object.msg);
    }
    if (object.funds !== undefined && object.funds !== null) {
      for (const e of object.funds) {
        message.funds.push(Coin.fromJSON(e));
      }
    }
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
    message.msg !== undefined &&
      (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    if (message.funds) {
      obj.funds = message.funds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.funds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<InstantiateContractProposal>): InstantiateContractProposal {
    const message = { ...baseInstantiateContractProposal } as InstantiateContractProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = object.codeId as Long;
    } else {
      message.codeId = Long.UZERO;
    }
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = [];
    if (object.funds !== undefined && object.funds !== null) {
      for (const e of object.funds) {
        message.funds.push(Coin.fromPartial(e));
      }
    }
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
    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMigrateContractProposal } as MigrateContractProposal;
    message.msg = new Uint8Array();
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
          message.msg = reader.bytes();
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
    message.msg = new Uint8Array();
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
    if (object.runAs !== undefined && object.runAs !== null) {
      message.runAs = String(object.runAs);
    } else {
      message.runAs = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = String(object.contract);
    } else {
      message.contract = "";
    }
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = Long.fromString(object.codeId);
    } else {
      message.codeId = Long.UZERO;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = bytesFromBase64(object.msg);
    }
    return message;
  },

  toJSON(message: MigrateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.msg !== undefined &&
      (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<MigrateContractProposal>): MigrateContractProposal {
    const message = { ...baseMigrateContractProposal } as MigrateContractProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.contract = object.contract ?? "";
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = object.codeId as Long;
    } else {
      message.codeId = Long.UZERO;
    }
    message.msg = object.msg ?? new Uint8Array();
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
    if (object.newAdmin !== undefined && object.newAdmin !== null) {
      message.newAdmin = String(object.newAdmin);
    } else {
      message.newAdmin = "";
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = String(object.contract);
    } else {
      message.contract = "";
    }
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

  fromPartial(object: DeepPartial<UpdateAdminProposal>): UpdateAdminProposal {
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
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = String(object.contract);
    } else {
      message.contract = "";
    }
    return message;
  },

  toJSON(message: ClearAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial(object: DeepPartial<ClearAdminProposal>): ClearAdminProposal {
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
    message.codeIds = [];
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
    if (object.codeIds !== undefined && object.codeIds !== null) {
      for (const e of object.codeIds) {
        message.codeIds.push(Long.fromString(e));
      }
    }
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

  fromPartial(object: DeepPartial<PinCodesProposal>): PinCodesProposal {
    const message = { ...basePinCodesProposal } as PinCodesProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = [];
    if (object.codeIds !== undefined && object.codeIds !== null) {
      for (const e of object.codeIds) {
        message.codeIds.push(e);
      }
    }
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
    message.codeIds = [];
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
    if (object.codeIds !== undefined && object.codeIds !== null) {
      for (const e of object.codeIds) {
        message.codeIds.push(Long.fromString(e));
      }
    }
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

  fromPartial(object: DeepPartial<UnpinCodesProposal>): UnpinCodesProposal {
    const message = { ...baseUnpinCodesProposal } as UnpinCodesProposal;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = [];
    if (object.codeIds !== undefined && object.codeIds !== null) {
      for (const e of object.codeIds) {
        message.codeIds.push(e);
      }
    }
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
