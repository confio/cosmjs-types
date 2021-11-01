/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { SignMode, signModeFromJSON, signModeToJSON } from "../../../cosmos/tx/signing/v1beta1/signing";
import { CompactBitArray } from "../../../cosmos/crypto/multisig/v1beta1/multisig";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmos.tx.v1beta1";

/** Tx is the standard type used for broadcasting transactions. */
export interface Tx {
  /** body is the processable content of the transaction */
  body?: TxBody;
  /**
   * auth_info is the authorization related content of the transaction,
   * specifically signers, signer modes and fee
   */
  authInfo?: AuthInfo;
  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures: Uint8Array[];
}

/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 */
export interface TxRaw {
  /**
   * body_bytes is a protobuf serialization of a TxBody that matches the
   * representation in SignDoc.
   */
  bodyBytes: Uint8Array;
  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in SignDoc.
   */
  authInfoBytes: Uint8Array;
  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures: Uint8Array[];
}

/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */
export interface SignDoc {
  /**
   * body_bytes is protobuf serialization of a TxBody that matches the
   * representation in TxRaw.
   */
  bodyBytes: Uint8Array;
  /**
   * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
   * representation in TxRaw.
   */
  authInfoBytes: Uint8Array;
  /**
   * chain_id is the unique identifier of the chain this transaction targets.
   * It prevents signed transactions from being used on another chain by an
   * attacker
   */
  chainId: string;
  /** account_number is the account number of the account in state */
  accountNumber: Long;
}

/** TxBody is the body of a transaction that all signers sign over. */
export interface TxBody {
  /**
   * messages is a list of messages to be executed. The required signers of
   * those messages define the number and order of elements in AuthInfo's
   * signer_infos and Tx's signatures. Each required signer address is added to
   * the list only the first time it occurs.
   * By convention, the first required signer (usually from the first message)
   * is referred to as the primary signer and pays the fee for the whole
   * transaction.
   */
  messages: Any[];
  /** memo is any arbitrary memo to be added to the transaction */
  memo: string;
  /**
   * timeout is the block height after which this transaction will not
   * be processed by the chain
   */
  timeoutHeight: Long;
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, the transaction will be rejected
   */
  extensionOptions: Any[];
  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, they will be ignored
   */
  nonCriticalExtensionOptions: Any[];
}

/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 */
export interface AuthInfo {
  /**
   * signer_infos defines the signing modes for the required signers. The number
   * and order of elements must match the required signers from TxBody's
   * messages. The first element is the primary signer and the one which pays
   * the fee.
   */
  signerInfos: SignerInfo[];
  /**
   * Fee is the fee and gas limit for the transaction. The first signer is the
   * primary signer and the one which pays the fee. The fee can be calculated
   * based on the cost of evaluating the body and doing signature verification
   * of the signers. This can be estimated via simulation.
   */
  fee?: Fee;
}

/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 */
export interface SignerInfo {
  /**
   * public_key is the public key of the signer. It is optional for accounts
   * that already exist in state. If unset, the verifier can use the required \
   * signer address for this position and lookup the public key.
   */
  publicKey?: Any;
  /**
   * mode_info describes the signing mode of the signer and is a nested
   * structure to support nested multisig pubkey's
   */
  modeInfo?: ModeInfo;
  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to
   * prevent replay attacks.
   */
  sequence: Long;
}

/** ModeInfo describes the signing mode of a single or nested multisig signer. */
export interface ModeInfo {
  /** single represents a single signer */
  single?: ModeInfo_Single | undefined;
  /** multi represents a nested multisig signer */
  multi?: ModeInfo_Multi | undefined;
}

/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 */
export interface ModeInfo_Single {
  /** mode is the signing mode of the single signer */
  mode: SignMode;
}

/** Multi is the mode info for a multisig public key */
export interface ModeInfo_Multi {
  /** bitarray specifies which keys within the multisig are signing */
  bitarray?: CompactBitArray;
  /**
   * mode_infos is the corresponding modes of the signers of the multisig
   * which could include nested multisig public keys
   */
  modeInfos: ModeInfo[];
}

/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 */
export interface Fee {
  /** amount is the amount of coins to be paid as a fee */
  amount: Coin[];
  /**
   * gas_limit is the maximum gas that can be used in transaction processing
   * before an out of gas error occurs
   */
  gasLimit: Long;
  /**
   * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
   * the payer must be a tx signer (and thus have signed this field in AuthInfo).
   * setting this field does *not* change the ordering of required signers for the transaction.
   */
  payer: string;
  /**
   * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
   * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
   * not support fee grants, this will fail
   */
  granter: string;
}

const baseTx: object = {};

export const Tx = {
  encode(message: Tx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body !== undefined) {
      TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    if (message.authInfo !== undefined) {
      AuthInfo.encode(message.authInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTx } as Tx;
    message.signatures = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = TxBody.decode(reader, reader.uint32());
          break;
        case 2:
          message.authInfo = AuthInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tx {
    const message = { ...baseTx } as Tx;
    message.signatures = [];
    if (object.body !== undefined && object.body !== null) {
      message.body = TxBody.fromJSON(object.body);
    } else {
      message.body = undefined;
    }
    if (object.authInfo !== undefined && object.authInfo !== null) {
      message.authInfo = AuthInfo.fromJSON(object.authInfo);
    } else {
      message.authInfo = undefined;
    }
    if (object.signatures !== undefined && object.signatures !== null) {
      for (const e of object.signatures) {
        message.signatures.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: Tx): unknown {
    const obj: any = {};
    message.body !== undefined && (obj.body = message.body ? TxBody.toJSON(message.body) : undefined);
    message.authInfo !== undefined &&
      (obj.authInfo = message.authInfo ? AuthInfo.toJSON(message.authInfo) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Tx>): Tx {
    const message = { ...baseTx } as Tx;
    if (object.body !== undefined && object.body !== null) {
      message.body = TxBody.fromPartial(object.body);
    } else {
      message.body = undefined;
    }
    if (object.authInfo !== undefined && object.authInfo !== null) {
      message.authInfo = AuthInfo.fromPartial(object.authInfo);
    } else {
      message.authInfo = undefined;
    }
    message.signatures = [];
    if (object.signatures !== undefined && object.signatures !== null) {
      for (const e of object.signatures) {
        message.signatures.push(e);
      }
    }
    return message;
  },
};

const baseTxRaw: object = {};

export const TxRaw = {
  encode(message: TxRaw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxRaw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxRaw } as TxRaw;
    message.signatures = [];
    message.bodyBytes = new Uint8Array();
    message.authInfoBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.authInfoBytes = reader.bytes();
          break;
        case 3:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxRaw {
    const message = { ...baseTxRaw } as TxRaw;
    message.signatures = [];
    message.bodyBytes = new Uint8Array();
    message.authInfoBytes = new Uint8Array();
    if (object.bodyBytes !== undefined && object.bodyBytes !== null) {
      message.bodyBytes = bytesFromBase64(object.bodyBytes);
    }
    if (object.authInfoBytes !== undefined && object.authInfoBytes !== null) {
      message.authInfoBytes = bytesFromBase64(object.authInfoBytes);
    }
    if (object.signatures !== undefined && object.signatures !== null) {
      for (const e of object.signatures) {
        message.signatures.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: TxRaw): unknown {
    const obj: any = {};
    message.bodyBytes !== undefined &&
      (obj.bodyBytes = base64FromBytes(
        message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array(),
      ));
    message.authInfoBytes !== undefined &&
      (obj.authInfoBytes = base64FromBytes(
        message.authInfoBytes !== undefined ? message.authInfoBytes : new Uint8Array(),
      ));
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TxRaw>): TxRaw {
    const message = { ...baseTxRaw } as TxRaw;
    message.bodyBytes = object.bodyBytes ?? new Uint8Array();
    message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
    message.signatures = [];
    if (object.signatures !== undefined && object.signatures !== null) {
      for (const e of object.signatures) {
        message.signatures.push(e);
      }
    }
    return message;
  },
};

const baseSignDoc: object = { chainId: "", accountNumber: Long.UZERO };

export const SignDoc = {
  encode(message: SignDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bodyBytes.length !== 0) {
      writer.uint32(10).bytes(message.bodyBytes);
    }
    if (message.authInfoBytes.length !== 0) {
      writer.uint32(18).bytes(message.authInfoBytes);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(32).uint64(message.accountNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignDoc } as SignDoc;
    message.bodyBytes = new Uint8Array();
    message.authInfoBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyBytes = reader.bytes();
          break;
        case 2:
          message.authInfoBytes = reader.bytes();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.accountNumber = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignDoc {
    const message = { ...baseSignDoc } as SignDoc;
    message.bodyBytes = new Uint8Array();
    message.authInfoBytes = new Uint8Array();
    if (object.bodyBytes !== undefined && object.bodyBytes !== null) {
      message.bodyBytes = bytesFromBase64(object.bodyBytes);
    }
    if (object.authInfoBytes !== undefined && object.authInfoBytes !== null) {
      message.authInfoBytes = bytesFromBase64(object.authInfoBytes);
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    if (object.accountNumber !== undefined && object.accountNumber !== null) {
      message.accountNumber = Long.fromString(object.accountNumber);
    } else {
      message.accountNumber = Long.UZERO;
    }
    return message;
  },

  toJSON(message: SignDoc): unknown {
    const obj: any = {};
    message.bodyBytes !== undefined &&
      (obj.bodyBytes = base64FromBytes(
        message.bodyBytes !== undefined ? message.bodyBytes : new Uint8Array(),
      ));
    message.authInfoBytes !== undefined &&
      (obj.authInfoBytes = base64FromBytes(
        message.authInfoBytes !== undefined ? message.authInfoBytes : new Uint8Array(),
      ));
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.accountNumber !== undefined &&
      (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<SignDoc>): SignDoc {
    const message = { ...baseSignDoc } as SignDoc;
    message.bodyBytes = object.bodyBytes ?? new Uint8Array();
    message.authInfoBytes = object.authInfoBytes ?? new Uint8Array();
    message.chainId = object.chainId ?? "";
    if (object.accountNumber !== undefined && object.accountNumber !== null) {
      message.accountNumber = object.accountNumber as Long;
    } else {
      message.accountNumber = Long.UZERO;
    }
    return message;
  },
};

const baseTxBody: object = { memo: "", timeoutHeight: Long.UZERO };

export const TxBody = {
  encode(message: TxBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    if (!message.timeoutHeight.isZero()) {
      writer.uint32(24).uint64(message.timeoutHeight);
    }
    for (const v of message.extensionOptions) {
      Any.encode(v!, writer.uint32(8186).fork()).ldelim();
    }
    for (const v of message.nonCriticalExtensionOptions) {
      Any.encode(v!, writer.uint32(16378).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTxBody } as TxBody;
    message.messages = [];
    message.extensionOptions = [];
    message.nonCriticalExtensionOptions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.memo = reader.string();
          break;
        case 3:
          message.timeoutHeight = reader.uint64() as Long;
          break;
        case 1023:
          message.extensionOptions.push(Any.decode(reader, reader.uint32()));
          break;
        case 2047:
          message.nonCriticalExtensionOptions.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxBody {
    const message = { ...baseTxBody } as TxBody;
    message.messages = [];
    message.extensionOptions = [];
    message.nonCriticalExtensionOptions = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromJSON(e));
      }
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = String(object.memo);
    } else {
      message.memo = "";
    }
    if (object.timeoutHeight !== undefined && object.timeoutHeight !== null) {
      message.timeoutHeight = Long.fromString(object.timeoutHeight);
    } else {
      message.timeoutHeight = Long.UZERO;
    }
    if (object.extensionOptions !== undefined && object.extensionOptions !== null) {
      for (const e of object.extensionOptions) {
        message.extensionOptions.push(Any.fromJSON(e));
      }
    }
    if (object.nonCriticalExtensionOptions !== undefined && object.nonCriticalExtensionOptions !== null) {
      for (const e of object.nonCriticalExtensionOptions) {
        message.nonCriticalExtensionOptions.push(Any.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: TxBody): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.messages = [];
    }
    message.memo !== undefined && (obj.memo = message.memo);
    message.timeoutHeight !== undefined &&
      (obj.timeoutHeight = (message.timeoutHeight || Long.UZERO).toString());
    if (message.extensionOptions) {
      obj.extensionOptions = message.extensionOptions.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.extensionOptions = [];
    }
    if (message.nonCriticalExtensionOptions) {
      obj.nonCriticalExtensionOptions = message.nonCriticalExtensionOptions.map((e) =>
        e ? Any.toJSON(e) : undefined,
      );
    } else {
      obj.nonCriticalExtensionOptions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TxBody>): TxBody {
    const message = { ...baseTxBody } as TxBody;
    message.messages = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromPartial(e));
      }
    }
    message.memo = object.memo ?? "";
    if (object.timeoutHeight !== undefined && object.timeoutHeight !== null) {
      message.timeoutHeight = object.timeoutHeight as Long;
    } else {
      message.timeoutHeight = Long.UZERO;
    }
    message.extensionOptions = [];
    if (object.extensionOptions !== undefined && object.extensionOptions !== null) {
      for (const e of object.extensionOptions) {
        message.extensionOptions.push(Any.fromPartial(e));
      }
    }
    message.nonCriticalExtensionOptions = [];
    if (object.nonCriticalExtensionOptions !== undefined && object.nonCriticalExtensionOptions !== null) {
      for (const e of object.nonCriticalExtensionOptions) {
        message.nonCriticalExtensionOptions.push(Any.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAuthInfo: object = {};

export const AuthInfo = {
  encode(message: AuthInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signerInfos) {
      SignerInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuthInfo } as AuthInfo;
    message.signerInfos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signerInfos.push(SignerInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuthInfo {
    const message = { ...baseAuthInfo } as AuthInfo;
    message.signerInfos = [];
    if (object.signerInfos !== undefined && object.signerInfos !== null) {
      for (const e of object.signerInfos) {
        message.signerInfos.push(SignerInfo.fromJSON(e));
      }
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromJSON(object.fee);
    } else {
      message.fee = undefined;
    }
    return message;
  },

  toJSON(message: AuthInfo): unknown {
    const obj: any = {};
    if (message.signerInfos) {
      obj.signerInfos = message.signerInfos.map((e) => (e ? SignerInfo.toJSON(e) : undefined));
    } else {
      obj.signerInfos = [];
    }
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AuthInfo>): AuthInfo {
    const message = { ...baseAuthInfo } as AuthInfo;
    message.signerInfos = [];
    if (object.signerInfos !== undefined && object.signerInfos !== null) {
      for (const e of object.signerInfos) {
        message.signerInfos.push(SignerInfo.fromPartial(e));
      }
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromPartial(object.fee);
    } else {
      message.fee = undefined;
    }
    return message;
  },
};

const baseSignerInfo: object = { sequence: Long.UZERO };

export const SignerInfo = {
  encode(message: SignerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.modeInfo !== undefined) {
      ModeInfo.encode(message.modeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignerInfo } as SignerInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.modeInfo = ModeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.sequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignerInfo {
    const message = { ...baseSignerInfo } as SignerInfo;
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = Any.fromJSON(object.publicKey);
    } else {
      message.publicKey = undefined;
    }
    if (object.modeInfo !== undefined && object.modeInfo !== null) {
      message.modeInfo = ModeInfo.fromJSON(object.modeInfo);
    } else {
      message.modeInfo = undefined;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    } else {
      message.sequence = Long.UZERO;
    }
    return message;
  },

  toJSON(message: SignerInfo): unknown {
    const obj: any = {};
    message.publicKey !== undefined &&
      (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    message.modeInfo !== undefined &&
      (obj.modeInfo = message.modeInfo ? ModeInfo.toJSON(message.modeInfo) : undefined);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<SignerInfo>): SignerInfo {
    const message = { ...baseSignerInfo } as SignerInfo;
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = Any.fromPartial(object.publicKey);
    } else {
      message.publicKey = undefined;
    }
    if (object.modeInfo !== undefined && object.modeInfo !== null) {
      message.modeInfo = ModeInfo.fromPartial(object.modeInfo);
    } else {
      message.modeInfo = undefined;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence as Long;
    } else {
      message.sequence = Long.UZERO;
    }
    return message;
  },
};

const baseModeInfo: object = {};

export const ModeInfo = {
  encode(message: ModeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.single !== undefined) {
      ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModeInfo } as ModeInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = ModeInfo_Single.decode(reader, reader.uint32());
          break;
        case 2:
          message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModeInfo {
    const message = { ...baseModeInfo } as ModeInfo;
    if (object.single !== undefined && object.single !== null) {
      message.single = ModeInfo_Single.fromJSON(object.single);
    } else {
      message.single = undefined;
    }
    if (object.multi !== undefined && object.multi !== null) {
      message.multi = ModeInfo_Multi.fromJSON(object.multi);
    } else {
      message.multi = undefined;
    }
    return message;
  },

  toJSON(message: ModeInfo): unknown {
    const obj: any = {};
    message.single !== undefined &&
      (obj.single = message.single ? ModeInfo_Single.toJSON(message.single) : undefined);
    message.multi !== undefined &&
      (obj.multi = message.multi ? ModeInfo_Multi.toJSON(message.multi) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ModeInfo>): ModeInfo {
    const message = { ...baseModeInfo } as ModeInfo;
    if (object.single !== undefined && object.single !== null) {
      message.single = ModeInfo_Single.fromPartial(object.single);
    } else {
      message.single = undefined;
    }
    if (object.multi !== undefined && object.multi !== null) {
      message.multi = ModeInfo_Multi.fromPartial(object.multi);
    } else {
      message.multi = undefined;
    }
    return message;
  },
};

const baseModeInfo_Single: object = { mode: 0 };

export const ModeInfo_Single = {
  encode(message: ModeInfo_Single, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo_Single {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModeInfo_Single } as ModeInfo_Single;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModeInfo_Single {
    const message = { ...baseModeInfo_Single } as ModeInfo_Single;
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = signModeFromJSON(object.mode);
    } else {
      message.mode = 0;
    }
    return message;
  },

  toJSON(message: ModeInfo_Single): unknown {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
    return obj;
  },

  fromPartial(object: DeepPartial<ModeInfo_Single>): ModeInfo_Single {
    const message = { ...baseModeInfo_Single } as ModeInfo_Single;
    message.mode = object.mode ?? 0;
    return message;
  },
};

const baseModeInfo_Multi: object = {};

export const ModeInfo_Multi = {
  encode(message: ModeInfo_Multi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bitarray !== undefined) {
      CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.modeInfos) {
      ModeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModeInfo_Multi {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModeInfo_Multi } as ModeInfo_Multi;
    message.modeInfos = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.modeInfos.push(ModeInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModeInfo_Multi {
    const message = { ...baseModeInfo_Multi } as ModeInfo_Multi;
    message.modeInfos = [];
    if (object.bitarray !== undefined && object.bitarray !== null) {
      message.bitarray = CompactBitArray.fromJSON(object.bitarray);
    } else {
      message.bitarray = undefined;
    }
    if (object.modeInfos !== undefined && object.modeInfos !== null) {
      for (const e of object.modeInfos) {
        message.modeInfos.push(ModeInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ModeInfo_Multi): unknown {
    const obj: any = {};
    message.bitarray !== undefined &&
      (obj.bitarray = message.bitarray ? CompactBitArray.toJSON(message.bitarray) : undefined);
    if (message.modeInfos) {
      obj.modeInfos = message.modeInfos.map((e) => (e ? ModeInfo.toJSON(e) : undefined));
    } else {
      obj.modeInfos = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ModeInfo_Multi>): ModeInfo_Multi {
    const message = { ...baseModeInfo_Multi } as ModeInfo_Multi;
    if (object.bitarray !== undefined && object.bitarray !== null) {
      message.bitarray = CompactBitArray.fromPartial(object.bitarray);
    } else {
      message.bitarray = undefined;
    }
    message.modeInfos = [];
    if (object.modeInfos !== undefined && object.modeInfos !== null) {
      for (const e of object.modeInfos) {
        message.modeInfos.push(ModeInfo.fromPartial(e));
      }
    }
    return message;
  },
};

const baseFee: object = { gasLimit: Long.UZERO, payer: "", granter: "" };

export const Fee = {
  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.gasLimit.isZero()) {
      writer.uint32(16).uint64(message.gasLimit);
    }
    if (message.payer !== "") {
      writer.uint32(26).string(message.payer);
    }
    if (message.granter !== "") {
      writer.uint32(34).string(message.granter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFee } as Fee;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.gasLimit = reader.uint64() as Long;
          break;
        case 3:
          message.payer = reader.string();
          break;
        case 4:
          message.granter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fee {
    const message = { ...baseFee } as Fee;
    message.amount = [];
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    if (object.gasLimit !== undefined && object.gasLimit !== null) {
      message.gasLimit = Long.fromString(object.gasLimit);
    } else {
      message.gasLimit = Long.UZERO;
    }
    if (object.payer !== undefined && object.payer !== null) {
      message.payer = String(object.payer);
    } else {
      message.payer = "";
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = String(object.granter);
    } else {
      message.granter = "";
    }
    return message;
  },

  toJSON(message: Fee): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.gasLimit !== undefined && (obj.gasLimit = (message.gasLimit || Long.UZERO).toString());
    message.payer !== undefined && (obj.payer = message.payer);
    message.granter !== undefined && (obj.granter = message.granter);
    return obj;
  },

  fromPartial(object: DeepPartial<Fee>): Fee {
    const message = { ...baseFee } as Fee;
    message.amount = [];
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    if (object.gasLimit !== undefined && object.gasLimit !== null) {
      message.gasLimit = object.gasLimit as Long;
    } else {
      message.gasLimit = Long.UZERO;
    }
    message.payer = object.payer ?? "";
    message.granter = object.granter ?? "";
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
