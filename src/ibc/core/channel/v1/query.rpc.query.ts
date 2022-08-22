import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, IdentifiedChannel, PacketState } from "./channel";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  QueryChannelRequest,
  QueryChannelResponse,
  QueryChannelsRequest,
  QueryChannelsResponse,
  QueryConnectionChannelsRequest,
  QueryConnectionChannelsResponse,
  QueryChannelClientStateRequest,
  QueryChannelClientStateResponse,
  QueryChannelConsensusStateRequest,
  QueryChannelConsensusStateResponse,
  QueryPacketCommitmentRequest,
  QueryPacketCommitmentResponse,
  QueryPacketCommitmentsRequest,
  QueryPacketCommitmentsResponse,
  QueryPacketReceiptRequest,
  QueryPacketReceiptResponse,
  QueryPacketAcknowledgementRequest,
  QueryPacketAcknowledgementResponse,
  QueryPacketAcknowledgementsRequest,
  QueryPacketAcknowledgementsResponse,
  QueryUnreceivedPacketsRequest,
  QueryUnreceivedPacketsResponse,
  QueryUnreceivedAcksRequest,
  QueryUnreceivedAcksResponse,
  QueryNextSequenceReceiveRequest,
  QueryNextSequenceReceiveResponse,
} from "./query";

/** Query defines the RPC service */
export interface Query {
  Channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
  /*Channel queries an IBC Channel.*/

  Channels(request: QueryChannelsRequest): Promise<QueryChannelsResponse>;
  /*Channels queries all the IBC channels of a chain.*/

  ConnectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
  /*ConnectionChannels queries all the channels associated with a connection
  end.*/

  ChannelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
  /*ChannelClientState queries for the client state for the channel associated
  with the provided channel identifiers.*/

  ChannelConsensusState(
    request: QueryChannelConsensusStateRequest,
  ): Promise<QueryChannelConsensusStateResponse>;
  /*ChannelConsensusState queries for the consensus state for the channel
  associated with the provided channel identifiers.*/

  PacketCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
  /*PacketCommitment queries a stored packet commitment hash.*/

  PacketCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
  /*PacketCommitments returns all the packet commitments hashes associated
  with a channel.*/

  PacketReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
  /*PacketReceipt queries if a given packet sequence has been received on the
  queried chain*/

  PacketAcknowledgement(
    request: QueryPacketAcknowledgementRequest,
  ): Promise<QueryPacketAcknowledgementResponse>;
  /*PacketAcknowledgement queries a stored packet acknowledgement hash.*/

  PacketAcknowledgements(
    request: QueryPacketAcknowledgementsRequest,
  ): Promise<QueryPacketAcknowledgementsResponse>;
  /*PacketAcknowledgements returns all the packet acknowledgements associated
  with a channel.*/

  UnreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
  /*UnreceivedPackets returns all the unreceived IBC packets associated with a
  channel and sequences.*/

  UnreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
  /*UnreceivedAcks returns all the unreceived IBC acknowledgements associated
  with a channel and sequences.*/

  NextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
  /*NextSequenceReceive returns the next receive sequence for a given channel.*/
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Channel = this.Channel.bind(this);
    this.Channels = this.Channels.bind(this);
    this.ConnectionChannels = this.ConnectionChannels.bind(this);
    this.ChannelClientState = this.ChannelClientState.bind(this);
    this.ChannelConsensusState = this.ChannelConsensusState.bind(this);
    this.PacketCommitment = this.PacketCommitment.bind(this);
    this.PacketCommitments = this.PacketCommitments.bind(this);
    this.PacketReceipt = this.PacketReceipt.bind(this);
    this.PacketAcknowledgement = this.PacketAcknowledgement.bind(this);
    this.PacketAcknowledgements = this.PacketAcknowledgements.bind(this);
    this.UnreceivedPackets = this.UnreceivedPackets.bind(this);
    this.UnreceivedAcks = this.UnreceivedAcks.bind(this);
    this.NextSequenceReceive = this.NextSequenceReceive.bind(this);
  }

  Channel(request: QueryChannelRequest): Promise<QueryChannelResponse> {
    const data = QueryChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
    return promise.then((data) => QueryChannelResponse.decode(new _m0.Reader(data)));
  }

  Channels(request: QueryChannelsRequest): Promise<QueryChannelsResponse> {
    const data = QueryChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
    return promise.then((data) => QueryChannelsResponse.decode(new _m0.Reader(data)));
  }

  ConnectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse> {
    const data = QueryConnectionChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
    return promise.then((data) => QueryConnectionChannelsResponse.decode(new _m0.Reader(data)));
  }

  ChannelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse> {
    const data = QueryChannelClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
    return promise.then((data) => QueryChannelClientStateResponse.decode(new _m0.Reader(data)));
  }

  ChannelConsensusState(
    request: QueryChannelConsensusStateRequest,
  ): Promise<QueryChannelConsensusStateResponse> {
    const data = QueryChannelConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
    return promise.then((data) => QueryChannelConsensusStateResponse.decode(new _m0.Reader(data)));
  }

  PacketCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> {
    const data = QueryPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
    return promise.then((data) => QueryPacketCommitmentResponse.decode(new _m0.Reader(data)));
  }

  PacketCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> {
    const data = QueryPacketCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
    return promise.then((data) => QueryPacketCommitmentsResponse.decode(new _m0.Reader(data)));
  }

  PacketReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> {
    const data = QueryPacketReceiptRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
    return promise.then((data) => QueryPacketReceiptResponse.decode(new _m0.Reader(data)));
  }

  PacketAcknowledgement(
    request: QueryPacketAcknowledgementRequest,
  ): Promise<QueryPacketAcknowledgementResponse> {
    const data = QueryPacketAcknowledgementRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
    return promise.then((data) => QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data)));
  }

  PacketAcknowledgements(
    request: QueryPacketAcknowledgementsRequest,
  ): Promise<QueryPacketAcknowledgementsResponse> {
    const data = QueryPacketAcknowledgementsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
    return promise.then((data) => QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data)));
  }

  UnreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> {
    const data = QueryUnreceivedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
    return promise.then((data) => QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data)));
  }

  UnreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> {
    const data = QueryUnreceivedAcksRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
    return promise.then((data) => QueryUnreceivedAcksResponse.decode(new _m0.Reader(data)));
  }

  NextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse> {
    const data = QueryNextSequenceReceiveRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
    return promise.then((data) => QueryNextSequenceReceiveResponse.decode(new _m0.Reader(data)));
  }
}
