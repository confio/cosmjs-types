import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Long } from "@osmonauts/helpers";
export const protobufPackage = "cosmos.mint.v1beta1";

/** Minter represents the minting state. */
export interface Minter {
  /** current annual inflation rate */
  inflation?: string;

  /** current annual expected provisions */
  annualProvisions?: string;
}

/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom?: string;

  /** maximum annual change in inflation rate */
  inflationRateChange?: string;

  /** maximum inflation rate */
  inflationMax?: string;

  /** minimum inflation rate */
  inflationMin?: string;

  /** goal of percent bonded atoms */
  goalBonded?: string;

  /** expected blocks per year */
  blocksPerYear?: Long;
}

function createBaseMinter(): Minter {
  return {
    inflation: undefined,
    annualProvisions: undefined,
  };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflation !== undefined) {
      writer.uint32(10).string(message.inflation);
    }

    if (message.annualProvisions !== undefined) {
      writer.uint32(18).string(message.annualProvisions);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.string();
          break;

        case 2:
          message.annualProvisions = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Minter {
    return {
      inflation: isSet(object.inflation) ? String(object.inflation) : undefined,
      annualProvisions: isSet(object.annualProvisions) ? String(object.annualProvisions) : undefined,
    };
  },

  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.inflation !== undefined && (obj.inflation = message.inflation);
    message.annualProvisions !== undefined && (obj.annualProvisions = message.annualProvisions);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Minter>, I>>(object: I): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? undefined;
    message.annualProvisions = object.annualProvisions ?? undefined;
    return message;
  },
};

function createBaseParams(): Params {
  return {
    mintDenom: undefined,
    inflationRateChange: undefined,
    inflationMax: undefined,
    inflationMin: undefined,
    goalBonded: undefined,
    blocksPerYear: undefined,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== undefined) {
      writer.uint32(10).string(message.mintDenom);
    }

    if (message.inflationRateChange !== undefined) {
      writer.uint32(18).string(message.inflationRateChange);
    }

    if (message.inflationMax !== undefined) {
      writer.uint32(26).string(message.inflationMax);
    }

    if (message.inflationMin !== undefined) {
      writer.uint32(34).string(message.inflationMin);
    }

    if (message.goalBonded !== undefined) {
      writer.uint32(42).string(message.goalBonded);
    }

    if (message.blocksPerYear !== undefined) {
      writer.uint32(48).uint64(message.blocksPerYear);
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
          message.mintDenom = reader.string();
          break;

        case 2:
          message.inflationRateChange = reader.string();
          break;

        case 3:
          message.inflationMax = reader.string();
          break;

        case 4:
          message.inflationMin = reader.string();
          break;

        case 5:
          message.goalBonded = reader.string();
          break;

        case 6:
          message.blocksPerYear = reader.uint64() as Long;
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
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : undefined,
      inflationRateChange: isSet(object.inflationRateChange) ? String(object.inflationRateChange) : undefined,
      inflationMax: isSet(object.inflationMax) ? String(object.inflationMax) : undefined,
      inflationMin: isSet(object.inflationMin) ? String(object.inflationMin) : undefined,
      goalBonded: isSet(object.goalBonded) ? String(object.goalBonded) : undefined,
      blocksPerYear: isSet(object.blocksPerYear) ? Long.fromString(object.blocksPerYear) : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.inflationRateChange !== undefined && (obj.inflationRateChange = message.inflationRateChange);
    message.inflationMax !== undefined && (obj.inflationMax = message.inflationMax);
    message.inflationMin !== undefined && (obj.inflationMin = message.inflationMin);
    message.goalBonded !== undefined && (obj.goalBonded = message.goalBonded);
    message.blocksPerYear !== undefined &&
      (obj.blocksPerYear = (message.blocksPerYear || undefined).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? undefined;
    message.inflationRateChange = object.inflationRateChange ?? undefined;
    message.inflationMax = object.inflationMax ?? undefined;
    message.inflationMin = object.inflationMin ?? undefined;
    message.goalBonded = object.goalBonded ?? undefined;
    message.blocksPerYear =
      object.blocksPerYear !== undefined && object.blocksPerYear !== null
        ? Long.fromValue(object.blocksPerYear)
        : undefined;
    return message;
  },
};
