import { Channel, Packet } from "./channel";
import { Height } from "../../client/v1/client";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  MsgChannelOpenInit,
  MsgChannelOpenInitResponse,
  MsgChannelOpenTry,
  MsgChannelOpenTryResponse,
  MsgChannelOpenAck,
  MsgChannelOpenAckResponse,
  MsgChannelOpenConfirm,
  MsgChannelOpenConfirmResponse,
  MsgChannelCloseInit,
  MsgChannelCloseInitResponse,
  MsgChannelCloseConfirm,
  MsgChannelCloseConfirmResponse,
  MsgRecvPacket,
  MsgRecvPacketResponse,
  MsgTimeout,
  MsgTimeoutResponse,
  MsgTimeoutOnClose,
  MsgTimeoutOnCloseResponse,
  MsgAcknowledgement,
  MsgAcknowledgementResponse,
} from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  ChannelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse>;
  /*ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.*/

  ChannelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse>;
  /*ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.*/

  ChannelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse>;
  /*ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.*/

  ChannelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse>;
  /*ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.*/

  ChannelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse>;
  /*ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.*/

  ChannelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse>;
  /*ChannelCloseConfirm defines a rpc handler method for
  MsgChannelCloseConfirm.*/

  RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
  /*RecvPacket defines a rpc handler method for MsgRecvPacket.*/

  Timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
  /*Timeout defines a rpc handler method for MsgTimeout.*/

  TimeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse>;
  /*TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.*/

  Acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
  /*Acknowledgement defines a rpc handler method for MsgAcknowledgement.*/
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ChannelOpenInit = this.ChannelOpenInit.bind(this);
    this.ChannelOpenTry = this.ChannelOpenTry.bind(this);
    this.ChannelOpenAck = this.ChannelOpenAck.bind(this);
    this.ChannelOpenConfirm = this.ChannelOpenConfirm.bind(this);
    this.ChannelCloseInit = this.ChannelCloseInit.bind(this);
    this.ChannelCloseConfirm = this.ChannelCloseConfirm.bind(this);
    this.RecvPacket = this.RecvPacket.bind(this);
    this.Timeout = this.Timeout.bind(this);
    this.TimeoutOnClose = this.TimeoutOnClose.bind(this);
    this.Acknowledgement = this.Acknowledgement.bind(this);
  }

  ChannelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse> {
    const data = MsgChannelOpenInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenInit", data);
    return promise.then((data) => MsgChannelOpenInitResponse.decode(new _m0.Reader(data)));
  }

  ChannelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse> {
    const data = MsgChannelOpenTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenTry", data);
    return promise.then((data) => MsgChannelOpenTryResponse.decode(new _m0.Reader(data)));
  }

  ChannelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse> {
    const data = MsgChannelOpenAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenAck", data);
    return promise.then((data) => MsgChannelOpenAckResponse.decode(new _m0.Reader(data)));
  }

  ChannelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse> {
    const data = MsgChannelOpenConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenConfirm", data);
    return promise.then((data) => MsgChannelOpenConfirmResponse.decode(new _m0.Reader(data)));
  }

  ChannelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse> {
    const data = MsgChannelCloseInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseInit", data);
    return promise.then((data) => MsgChannelCloseInitResponse.decode(new _m0.Reader(data)));
  }

  ChannelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse> {
    const data = MsgChannelCloseConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseConfirm", data);
    return promise.then((data) => MsgChannelCloseConfirmResponse.decode(new _m0.Reader(data)));
  }

  RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse> {
    const data = MsgRecvPacket.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "RecvPacket", data);
    return promise.then((data) => MsgRecvPacketResponse.decode(new _m0.Reader(data)));
  }

  Timeout(request: MsgTimeout): Promise<MsgTimeoutResponse> {
    const data = MsgTimeout.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Timeout", data);
    return promise.then((data) => MsgTimeoutResponse.decode(new _m0.Reader(data)));
  }

  TimeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse> {
    const data = MsgTimeoutOnClose.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "TimeoutOnClose", data);
    return promise.then((data) => MsgTimeoutOnCloseResponse.decode(new _m0.Reader(data)));
  }

  Acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse> {
    const data = MsgAcknowledgement.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Acknowledgement", data);
    return promise.then((data) => MsgAcknowledgementResponse.decode(new _m0.Reader(data)));
  }
}
