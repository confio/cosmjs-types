/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../../helpers";
export const protobufPackage = "ibc.applications.fee.v1";
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgement {
  /** the underlying app acknowledgement bytes */
  appAcknowledgement: Uint8Array;
  /** the relayer address which submits the recv packet message */
  forwardRelayerAddress: string;
  /** success flag of the base application callback */
  underlyingAppSuccess: boolean;
}
function createBaseIncentivizedAcknowledgement(): IncentivizedAcknowledgement {
  return {
    appAcknowledgement: new Uint8Array(),
    forwardRelayerAddress: "",
    underlyingAppSuccess: false,
  };
}
export const IncentivizedAcknowledgement = {
  encode(message: IncentivizedAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appAcknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.appAcknowledgement);
    }
    if (message.forwardRelayerAddress !== "") {
      writer.uint32(18).string(message.forwardRelayerAddress);
    }
    if (message.underlyingAppSuccess === true) {
      writer.uint32(24).bool(message.underlyingAppSuccess);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IncentivizedAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivizedAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appAcknowledgement = reader.bytes();
          break;
        case 2:
          message.forwardRelayerAddress = reader.string();
          break;
        case 3:
          message.underlyingAppSuccess = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentivizedAcknowledgement {
    return {
      appAcknowledgement: isSet(object.appAcknowledgement)
        ? bytesFromBase64(object.appAcknowledgement)
        : new Uint8Array(),
      forwardRelayerAddress: isSet(object.forwardRelayerAddress) ? String(object.forwardRelayerAddress) : "",
      underlyingAppSuccess: isSet(object.underlyingAppSuccess) ? Boolean(object.underlyingAppSuccess) : false,
    };
  },
  toJSON(message: IncentivizedAcknowledgement): unknown {
    const obj: any = {};
    message.appAcknowledgement !== undefined &&
      (obj.appAcknowledgement = base64FromBytes(
        message.appAcknowledgement !== undefined ? message.appAcknowledgement : new Uint8Array(),
      ));
    message.forwardRelayerAddress !== undefined &&
      (obj.forwardRelayerAddress = message.forwardRelayerAddress);
    message.underlyingAppSuccess !== undefined && (obj.underlyingAppSuccess = message.underlyingAppSuccess);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IncentivizedAcknowledgement>, I>>(
    object: I,
  ): IncentivizedAcknowledgement {
    const message = createBaseIncentivizedAcknowledgement();
    message.appAcknowledgement = object.appAcknowledgement ?? new Uint8Array();
    message.forwardRelayerAddress = object.forwardRelayerAddress ?? "";
    message.underlyingAppSuccess = object.underlyingAppSuccess ?? false;
    return message;
  },
  fromAmino(object: IncentivizedAcknowledgementAmino): IncentivizedAcknowledgement {
    return {
      appAcknowledgement: object.app_acknowledgement,
      forwardRelayerAddress: object.forward_relayer_address,
      underlyingAppSuccess: object.underlying_app_success,
    };
  },
  toAmino(message: IncentivizedAcknowledgement): IncentivizedAcknowledgementAmino {
    const obj: any = {};
    obj.app_acknowledgement = message.appAcknowledgement;
    obj.forward_relayer_address = message.forwardRelayerAddress;
    obj.underlying_app_success = message.underlyingAppSuccess;
    return obj;
  },
  fromAminoMsg(object: IncentivizedAcknowledgementAminoMsg): IncentivizedAcknowledgement {
    return IncentivizedAcknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message: IncentivizedAcknowledgement): IncentivizedAcknowledgementAminoMsg {
    return {
      type: "cosmos-sdk/IncentivizedAcknowledgement",
      value: IncentivizedAcknowledgement.toAmino(message),
    };
  },
};
