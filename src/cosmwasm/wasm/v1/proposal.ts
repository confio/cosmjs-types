import { AccessConfig } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, Long } from "@osmonauts/helpers";
export const protobufPackage = "cosmwasm.wasm.v1";

/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
  /** Title is a short summary */
  title?: string;

  /** Description is a human readable text */
  description?: string;

  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs?: string;

  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode?: Uint8Array;

  /** InstantiatePermission to apply on contract creation, optional */
  instantiatePermission?: AccessConfig;
}

/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
  /** Title is a short summary */
  title?: string;

  /** Description is a human readable text */
  description?: string;

  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs?: string;

  /** Admin is an optional address that can execute migrations */
  admin?: string;

  /** CodeID is the reference to the stored WASM code */
  codeId?: Long;

  /** Label is optional metadata to be stored with a constract instance. */
  label?: string;

  /** Msg json encoded message to be passed to the contract on instantiation */
  msg?: Uint8Array;

  /** Funds coins that are transferred to the contract on instantiation */
  funds?: Coin[];
}

/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
  /** Title is a short summary */
  title?: string;

  /** Description is a human readable text */
  description?: string;

  /** Contract is the address of the smart contract */
  contract?: string;

  /** CodeID references the new WASM codesudo */
  codeId?: Long;

  /** Msg json encoded message to be passed to the contract on migration */
  msg?: Uint8Array;
}

/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposal {
  /** Title is a short summary */
  title?: string;

  /** Description is a human readable text */
  description?: string;

  /** Contract is the address of the smart contract */
  contract?: string;

  /** Msg json encoded message to be passed to the contract as sudo */
  msg?: Uint8Array;
}

/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposal {
  /** Title is a short summary */
  title?: string;

  /** Description is a human readable text */
  description?: string;

  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs?: string;

  /** Contract is the address of the smart contract */
  contract?: string;

  /** Msg json encoded message to be passed to the contract as execute */
  msg?: Uint8Array;

  /** Funds coins that are transferred to the contract on instantiation */
  funds?: Coin[];
}

/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
  /** Title is a short summary */
  title?: string;

  /** Description is a human readable text */
  description?: string;

  /** NewAdmin address to be set */
  newAdmin?: string;

  /** Contract is the address of the smart contract */
  contract?: string;
}

/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
  /** Title is a short summary */
  title?: string;

  /** Description is a human readable text */
  description?: string;

  /** Contract is the address of the smart contract */
  contract?: string;
}

/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
  /** Title is a short summary */
  title?: string;

  /** Description is a human readable text */
  description?: string;

  /** CodeIDs references the new WASM codes */
  codeIds?: Long[];
}

/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
  /** Title is a short summary */
  title?: string;

  /** Description is a human readable text */
  description?: string;

  /** CodeIDs references the WASM codes */
  codeIds?: Long[];
}

function createBaseStoreCodeProposal(): StoreCodeProposal {
  return {
    title: undefined,
    description: undefined,
    runAs: undefined,
    wasmByteCode: undefined,
    instantiatePermission: undefined,
  };
}

export const StoreCodeProposal = {
  encode(message: StoreCodeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== undefined) {
      writer.uint32(26).string(message.runAs);
    }

    if (message.wasmByteCode !== undefined) {
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
    const message = createBaseStoreCodeProposal();

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
    return {
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      runAs: isSet(object.runAs) ? String(object.runAs) : undefined,
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : undefined,
      instantiatePermission: isSet(object.instantiatePermission)
        ? AccessConfig.fromJSON(object.instantiatePermission)
        : undefined,
    };
  },

  toJSON(message: StoreCodeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.wasmByteCode !== undefined &&
      (obj.wasmByteCode =
        message.wasmByteCode !== undefined ? base64FromBytes(message.wasmByteCode) : undefined);
    message.instantiatePermission !== undefined &&
      (obj.instantiatePermission = message.instantiatePermission
        ? AccessConfig.toJSON(message.instantiatePermission)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoreCodeProposal>, I>>(object: I): StoreCodeProposal {
    const message = createBaseStoreCodeProposal();
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.runAs = object.runAs ?? undefined;
    message.wasmByteCode = object.wasmByteCode ?? undefined;
    message.instantiatePermission =
      object.instantiatePermission !== undefined && object.instantiatePermission !== null
        ? AccessConfig.fromPartial(object.instantiatePermission)
        : undefined;
    return message;
  },
};

function createBaseInstantiateContractProposal(): InstantiateContractProposal {
  return {
    title: undefined,
    description: undefined,
    runAs: undefined,
    admin: undefined,
    codeId: undefined,
    label: undefined,
    msg: undefined,
    funds: undefined,
  };
}

export const InstantiateContractProposal = {
  encode(message: InstantiateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== undefined) {
      writer.uint32(26).string(message.runAs);
    }

    if (message.admin !== undefined) {
      writer.uint32(34).string(message.admin);
    }

    if (message.codeId !== undefined) {
      writer.uint32(40).uint64(message.codeId);
    }

    if (message.label !== undefined) {
      writer.uint32(50).string(message.label);
    }

    if (message.msg !== undefined) {
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
    const message = createBaseInstantiateContractProposal();

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
    return {
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      runAs: isSet(object.runAs) ? String(object.runAs) : undefined,
      admin: isSet(object.admin) ? String(object.admin) : undefined,
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : undefined,
      label: isSet(object.label) ? String(object.label) : undefined,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : undefined,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: InstantiateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || undefined).toString());
    message.label !== undefined && (obj.label = message.label);
    message.msg !== undefined &&
      (obj.msg = message.msg !== undefined ? base64FromBytes(message.msg) : undefined);

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
    const message = createBaseInstantiateContractProposal();
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.runAs = object.runAs ?? undefined;
    message.admin = object.admin ?? undefined;
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : undefined;
    message.label = object.label ?? undefined;
    message.msg = object.msg ?? undefined;
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMigrateContractProposal(): MigrateContractProposal {
  return {
    title: undefined,
    description: undefined,
    contract: undefined,
    codeId: undefined,
    msg: undefined,
  };
}

export const MigrateContractProposal = {
  encode(message: MigrateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== undefined) {
      writer.uint32(34).string(message.contract);
    }

    if (message.codeId !== undefined) {
      writer.uint32(40).uint64(message.codeId);
    }

    if (message.msg !== undefined) {
      writer.uint32(50).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
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
    return {
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      contract: isSet(object.contract) ? String(object.contract) : undefined,
      codeId: isSet(object.codeId) ? Long.fromString(object.codeId) : undefined,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : undefined,
    };
  },

  toJSON(message: MigrateContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.codeId !== undefined && (obj.codeId = (message.codeId || undefined).toString());
    message.msg !== undefined &&
      (obj.msg = message.msg !== undefined ? base64FromBytes(message.msg) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MigrateContractProposal>, I>>(object: I): MigrateContractProposal {
    const message = createBaseMigrateContractProposal();
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.contract = object.contract ?? undefined;
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : undefined;
    message.msg = object.msg ?? undefined;
    return message;
  },
};

function createBaseSudoContractProposal(): SudoContractProposal {
  return {
    title: undefined,
    description: undefined,
    contract: undefined,
    msg: undefined,
  };
}

export const SudoContractProposal = {
  encode(message: SudoContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== undefined) {
      writer.uint32(26).string(message.contract);
    }

    if (message.msg !== undefined) {
      writer.uint32(34).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SudoContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();

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

        case 4:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SudoContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      contract: isSet(object.contract) ? String(object.contract) : undefined,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : undefined,
    };
  },

  toJSON(message: SudoContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined &&
      (obj.msg = message.msg !== undefined ? base64FromBytes(message.msg) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SudoContractProposal>, I>>(object: I): SudoContractProposal {
    const message = createBaseSudoContractProposal();
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.contract = object.contract ?? undefined;
    message.msg = object.msg ?? undefined;
    return message;
  },
};

function createBaseExecuteContractProposal(): ExecuteContractProposal {
  return {
    title: undefined,
    description: undefined,
    runAs: undefined,
    contract: undefined,
    msg: undefined,
    funds: undefined,
  };
}

export const ExecuteContractProposal = {
  encode(message: ExecuteContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }

    if (message.runAs !== undefined) {
      writer.uint32(26).string(message.runAs);
    }

    if (message.contract !== undefined) {
      writer.uint32(34).string(message.contract);
    }

    if (message.msg !== undefined) {
      writer.uint32(42).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteContractProposal();

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
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExecuteContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      runAs: isSet(object.runAs) ? String(object.runAs) : undefined,
      contract: isSet(object.contract) ? String(object.contract) : undefined,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : undefined,
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: ExecuteContractProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.runAs !== undefined && (obj.runAs = message.runAs);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined &&
      (obj.msg = message.msg !== undefined ? base64FromBytes(message.msg) : undefined);

    if (message.funds) {
      obj.funds = message.funds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.funds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExecuteContractProposal>, I>>(object: I): ExecuteContractProposal {
    const message = createBaseExecuteContractProposal();
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.runAs = object.runAs ?? undefined;
    message.contract = object.contract ?? undefined;
    message.msg = object.msg ?? undefined;
    message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return {
    title: undefined,
    description: undefined,
    newAdmin: undefined,
    contract: undefined,
  };
}

export const UpdateAdminProposal = {
  encode(message: UpdateAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }

    if (message.newAdmin !== undefined) {
      writer.uint32(26).string(message.newAdmin);
    }

    if (message.contract !== undefined) {
      writer.uint32(34).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();

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
    return {
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : undefined,
      contract: isSet(object.contract) ? String(object.contract) : undefined,
    };
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
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.newAdmin = object.newAdmin ?? undefined;
    message.contract = object.contract ?? undefined;
    return message;
  },
};

function createBaseClearAdminProposal(): ClearAdminProposal {
  return {
    title: undefined,
    description: undefined,
    contract: undefined,
  };
}

export const ClearAdminProposal = {
  encode(message: ClearAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== undefined) {
      writer.uint32(26).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();

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
    return {
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      contract: isSet(object.contract) ? String(object.contract) : undefined,
    };
  },

  toJSON(message: ClearAdminProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClearAdminProposal>, I>>(object: I): ClearAdminProposal {
    const message = createBaseClearAdminProposal();
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.contract = object.contract ?? undefined;
    return message;
  },
};

function createBasePinCodesProposal(): PinCodesProposal {
  return {
    title: undefined,
    description: undefined,
    codeIds: undefined,
  };
}

export const PinCodesProposal = {
  encode(message: PinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== undefined) {
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
    const message = createBasePinCodesProposal();

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
    return {
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromString(e)) : [],
    };
  },

  toJSON(message: PinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.codeIds) {
      obj.codeIds = message.codeIds.map((e) => (e || undefined).toString());
    } else {
      obj.codeIds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PinCodesProposal>, I>>(object: I): PinCodesProposal {
    const message = createBasePinCodesProposal();
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.codeIds = object.codeIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseUnpinCodesProposal(): UnpinCodesProposal {
  return {
    title: undefined,
    description: undefined,
    codeIds: undefined,
  };
}

export const UnpinCodesProposal = {
  encode(message: UnpinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== undefined) {
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
    const message = createBaseUnpinCodesProposal();

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
    return {
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromString(e)) : [],
    };
  },

  toJSON(message: UnpinCodesProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.codeIds) {
      obj.codeIds = message.codeIds.map((e) => (e || undefined).toString());
    } else {
      obj.codeIds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnpinCodesProposal>, I>>(object: I): UnpinCodesProposal {
    const message = createBaseUnpinCodesProposal();
    message.title = object.title ?? undefined;
    message.description = object.description ?? undefined;
    message.codeIds = object.codeIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};
