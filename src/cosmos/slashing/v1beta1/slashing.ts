import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import {
  Long,
  isSet,
  fromJsonTimestamp,
  fromTimestamp,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
} from "@osmonauts/helpers";
export const protobufPackage = "cosmos.slashing.v1beta1";

/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
  address?: string;

  /** Height at which validator was first a candidate OR was unjailed */
  startHeight?: Long;

  /**
   * Index which is incremented each time the validator was a bonded
   * in a block and may have signed a precommit or not. This in conjunction with the
   * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
   */
  indexOffset?: Long;

  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailedUntil?: Timestamp;

  /**
   * Whether or not a validator has been tombstoned (killed out of validator set). It is set
   * once the validator commits an equivocation or for any other configured misbehiavor.
   */
  tombstoned?: boolean;

  /**
   * A counter kept to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   */
  missedBlocksCounter?: Long;
}

/** Params represents the parameters used for by the slashing module. */
export interface Params {
  signedBlocksWindow?: Long;
  minSignedPerWindow?: Uint8Array;
  downtimeJailDuration?: Duration;
  slashFractionDoubleSign?: Uint8Array;
  slashFractionDowntime?: Uint8Array;
}

function createBaseValidatorSigningInfo(): ValidatorSigningInfo {
  return {
    address: undefined,
    startHeight: undefined,
    indexOffset: undefined,
    jailedUntil: undefined,
    tombstoned: undefined,
    missedBlocksCounter: undefined,
  };
}

export const ValidatorSigningInfo = {
  encode(message: ValidatorSigningInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }

    if (message.startHeight !== undefined) {
      writer.uint32(16).int64(message.startHeight);
    }

    if (message.indexOffset !== undefined) {
      writer.uint32(24).int64(message.indexOffset);
    }

    if (message.jailedUntil !== undefined) {
      Timestamp.encode(message.jailedUntil, writer.uint32(34).fork()).ldelim();
    }

    if (message.tombstoned !== undefined) {
      writer.uint32(40).bool(message.tombstoned);
    }

    if (message.missedBlocksCounter !== undefined) {
      writer.uint32(48).int64(message.missedBlocksCounter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSigningInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.startHeight = reader.int64() as Long;
          break;

        case 3:
          message.indexOffset = reader.int64() as Long;
          break;

        case 4:
          message.jailedUntil = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.tombstoned = reader.bool();
          break;

        case 6:
          message.missedBlocksCounter = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValidatorSigningInfo {
    return {
      address: isSet(object.address) ? String(object.address) : undefined,
      startHeight: isSet(object.startHeight) ? Long.fromString(object.startHeight) : undefined,
      indexOffset: isSet(object.indexOffset) ? Long.fromString(object.indexOffset) : undefined,
      jailedUntil: isSet(object.jailedUntil) ? fromJsonTimestamp(object.jailedUntil) : undefined,
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : undefined,
      missedBlocksCounter: isSet(object.missedBlocksCounter)
        ? Long.fromString(object.missedBlocksCounter)
        : undefined,
    };
  },

  toJSON(message: ValidatorSigningInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.startHeight !== undefined && (obj.startHeight = (message.startHeight || undefined).toString());
    message.indexOffset !== undefined && (obj.indexOffset = (message.indexOffset || undefined).toString());
    message.jailedUntil !== undefined && (obj.jailedUntil = fromTimestamp(message.jailedUntil).toISOString());
    message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
    message.missedBlocksCounter !== undefined &&
      (obj.missedBlocksCounter = (message.missedBlocksCounter || undefined).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorSigningInfo>, I>>(object: I): ValidatorSigningInfo {
    const message = createBaseValidatorSigningInfo();
    message.address = object.address ?? undefined;
    message.startHeight =
      object.startHeight !== undefined && object.startHeight !== null
        ? Long.fromValue(object.startHeight)
        : undefined;
    message.indexOffset =
      object.indexOffset !== undefined && object.indexOffset !== null
        ? Long.fromValue(object.indexOffset)
        : undefined;
    message.jailedUntil =
      object.jailedUntil !== undefined && object.jailedUntil !== null
        ? Timestamp.fromPartial(object.jailedUntil)
        : undefined;
    message.tombstoned = object.tombstoned ?? undefined;
    message.missedBlocksCounter =
      object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null
        ? Long.fromValue(object.missedBlocksCounter)
        : undefined;
    return message;
  },
};

function createBaseParams(): Params {
  return {
    signedBlocksWindow: undefined,
    minSignedPerWindow: undefined,
    downtimeJailDuration: undefined,
    slashFractionDoubleSign: undefined,
    slashFractionDowntime: undefined,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedBlocksWindow !== undefined) {
      writer.uint32(8).int64(message.signedBlocksWindow);
    }

    if (message.minSignedPerWindow !== undefined) {
      writer.uint32(18).bytes(message.minSignedPerWindow);
    }

    if (message.downtimeJailDuration !== undefined) {
      Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
    }

    if (message.slashFractionDoubleSign !== undefined) {
      writer.uint32(34).bytes(message.slashFractionDoubleSign);
    }

    if (message.slashFractionDowntime !== undefined) {
      writer.uint32(42).bytes(message.slashFractionDowntime);
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
          message.signedBlocksWindow = reader.int64() as Long;
          break;

        case 2:
          message.minSignedPerWindow = reader.bytes();
          break;

        case 3:
          message.downtimeJailDuration = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.slashFractionDoubleSign = reader.bytes();
          break;

        case 5:
          message.slashFractionDowntime = reader.bytes();
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
      signedBlocksWindow: isSet(object.signedBlocksWindow)
        ? Long.fromString(object.signedBlocksWindow)
        : undefined,
      minSignedPerWindow: isSet(object.minSignedPerWindow)
        ? bytesFromBase64(object.minSignedPerWindow)
        : undefined,
      downtimeJailDuration: isSet(object.downtimeJailDuration)
        ? Duration.fromJSON(object.downtimeJailDuration)
        : undefined,
      slashFractionDoubleSign: isSet(object.slashFractionDoubleSign)
        ? bytesFromBase64(object.slashFractionDoubleSign)
        : undefined,
      slashFractionDowntime: isSet(object.slashFractionDowntime)
        ? bytesFromBase64(object.slashFractionDowntime)
        : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.signedBlocksWindow !== undefined &&
      (obj.signedBlocksWindow = (message.signedBlocksWindow || undefined).toString());
    message.minSignedPerWindow !== undefined &&
      (obj.minSignedPerWindow =
        message.minSignedPerWindow !== undefined ? base64FromBytes(message.minSignedPerWindow) : undefined);
    message.downtimeJailDuration !== undefined && (obj.downtimeJailDuration = message.downtimeJailDuration);
    message.slashFractionDoubleSign !== undefined &&
      (obj.slashFractionDoubleSign =
        message.slashFractionDoubleSign !== undefined
          ? base64FromBytes(message.slashFractionDoubleSign)
          : undefined);
    message.slashFractionDowntime !== undefined &&
      (obj.slashFractionDowntime =
        message.slashFractionDowntime !== undefined
          ? base64FromBytes(message.slashFractionDowntime)
          : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.signedBlocksWindow =
      object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null
        ? Long.fromValue(object.signedBlocksWindow)
        : undefined;
    message.minSignedPerWindow = object.minSignedPerWindow ?? undefined;
    message.downtimeJailDuration = object.downtimeJailDuration ?? undefined;
    message.slashFractionDoubleSign = object.slashFractionDoubleSign ?? undefined;
    message.slashFractionDowntime = object.slashFractionDowntime ?? undefined;
    return message;
  },
};
