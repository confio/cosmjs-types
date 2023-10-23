/* eslint-disable */
import { BaseAccount } from "../../../../cosmos/auth/v1beta1/auth";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.v1";
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
  baseAccount?: BaseAccount;
  accountOwner: string;
}
function createBaseInterchainAccount(): InterchainAccount {
  return {
    baseAccount: undefined,
    accountOwner: "",
  };
}
export const InterchainAccount = {
  encode(message: InterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountOwner !== "") {
      writer.uint32(18).string(message.accountOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterchainAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InterchainAccount {
    const obj = createBaseInterchainAccount();
    if (isSet(object.baseAccount)) obj.baseAccount = BaseAccount.fromJSON(object.baseAccount);
    if (isSet(object.accountOwner)) obj.accountOwner = String(object.accountOwner);
    return obj;
  },
  toJSON(message: InterchainAccount): unknown {
    const obj: any = {};
    message.baseAccount !== undefined &&
      (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
    message.accountOwner !== undefined && (obj.accountOwner = message.accountOwner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InterchainAccount>, I>>(object: I): InterchainAccount {
    const message = createBaseInterchainAccount();
    if (object.baseAccount !== undefined && object.baseAccount !== null) {
      message.baseAccount = BaseAccount.fromPartial(object.baseAccount);
    }
    message.accountOwner = object.accountOwner ?? "";
    return message;
  },
};
