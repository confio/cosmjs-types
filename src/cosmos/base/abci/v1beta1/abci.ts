import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export const protobufPackage = "cosmos.base.abci.v1beta1";

/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 */
export interface TxResponse {
  /** The block height */
  height?: Long;

  /** The transaction hash. */
  txhash?: string;

  /** Namespace for the Code */
  codespace?: string;

  /** Response code. */
  code?: number;

  /** Result bytes, if any. */
  data?: string;

  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  rawLog?: string;

  /** The output of the application's logger (typed). May be non-deterministic. */
  logs?: ABCIMessageLog[];

  /** Additional information. May be non-deterministic. */
  info?: string;

  /** Amount of gas requested for transaction. */
  gasWanted?: Long;

  /** Amount of gas consumed by transaction. */
  gasUsed?: Long;

  /** The request transaction bytes. */
  tx?: Any;

  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp?: string;

  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante handler. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   *
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */
  events?: Event[];
}

/** ABCIMessageLog defines a structure containing an indexed tx ABCI message log. */
export interface ABCIMessageLog {
  msgIndex?: number;
  log?: string;

  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events?: StringEvent[];
}

/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 */
export interface StringEvent {
  type?: string;
  attributes?: Attribute[];
}

/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 */
export interface Attribute {
  key?: string;
  value?: string;
}

/** GasInfo defines tx execution gas context. */
export interface GasInfo {
  /** GasWanted is the maximum units of work we allow this tx to perform. */
  gasWanted?: Long;

  /** GasUsed is the amount of gas actually consumed. */
  gasUsed?: Long;
}

/** Result is the union of ResponseFormat and ResponseCheckTx. */
export interface Result {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   */
  data?: Uint8Array;

  /** Log contains the log information from message or handler execution. */
  log?: string;

  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events?: Event[];
}

/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 */
export interface SimulationResponse {
  gasInfo?: GasInfo;
  result?: Result;
}

/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
export interface MsgData {
  msgType?: string;
  data?: Uint8Array;
}

/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 */
export interface TxMsgData {
  data?: MsgData[];
}

/** SearchTxsResult defines a structure for querying txs pageable */
export interface SearchTxsResult {
  /** Count of all txs */
  totalCount?: Long;

  /** Count of txs in current page */
  count?: Long;

  /** Index of current page, start from 1 */
  pageNumber?: Long;

  /** Count of total pages */
  pageTotal?: Long;

  /** Max count txs per page */
  limit?: Long;

  /** List of txs in current page */
  txs?: TxResponse[];
}

function createBaseTxResponse(): TxResponse {
  return {
    height: undefined,
    txhash: undefined,
    codespace: undefined,
    code: undefined,
    data: undefined,
    rawLog: undefined,
    logs: undefined,
    info: undefined,
    gasWanted: undefined,
    gasUsed: undefined,
    tx: undefined,
    timestamp: undefined,
    events: undefined,
  };
}

export const TxResponse = {
  encode(message: TxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== undefined) {
      writer.uint32(8).int64(message.height);
    }

    if (message.txhash !== undefined) {
      writer.uint32(18).string(message.txhash);
    }

    if (message.codespace !== undefined) {
      writer.uint32(26).string(message.codespace);
    }

    if (message.code !== undefined) {
      writer.uint32(32).uint32(message.code);
    }

    if (message.data !== undefined) {
      writer.uint32(42).string(message.data);
    }

    if (message.rawLog !== undefined) {
      writer.uint32(50).string(message.rawLog);
    }

    for (const v of message.logs) {
      ABCIMessageLog.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.info !== undefined) {
      writer.uint32(66).string(message.info);
    }

    if (message.gasWanted !== undefined) {
      writer.uint32(72).int64(message.gasWanted);
    }

    if (message.gasUsed !== undefined) {
      writer.uint32(80).int64(message.gasUsed);
    }

    if (message.tx !== undefined) {
      Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
    }

    if (message.timestamp !== undefined) {
      writer.uint32(98).string(message.timestamp);
    }

    for (const v of message.events) {
      Event.encode(v!, writer.uint32(106).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;

        case 2:
          message.txhash = reader.string();
          break;

        case 3:
          message.codespace = reader.string();
          break;

        case 4:
          message.code = reader.uint32();
          break;

        case 5:
          message.data = reader.string();
          break;

        case 6:
          message.rawLog = reader.string();
          break;

        case 7:
          message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
          break;

        case 8:
          message.info = reader.string();
          break;

        case 9:
          message.gasWanted = reader.int64() as Long;
          break;

        case 10:
          message.gasUsed = reader.int64() as Long;
          break;

        case 11:
          message.tx = Any.decode(reader, reader.uint32());
          break;

        case 12:
          message.timestamp = reader.string();
          break;

        case 13:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxResponse {
    return {
      height: isSet(object.height) ? Long.fromString(object.height) : undefined,
      txhash: isSet(object.txhash) ? String(object.txhash) : undefined,
      codespace: isSet(object.codespace) ? String(object.codespace) : undefined,
      code: isSet(object.code) ? Number(object.code) : undefined,
      data: isSet(object.data) ? String(object.data) : undefined,
      rawLog: isSet(object.rawLog) ? String(object.rawLog) : undefined,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => ABCIMessageLog.fromJSON(e)) : [],
      info: isSet(object.info) ? String(object.info) : undefined,
      gasWanted: isSet(object.gasWanted) ? Long.fromString(object.gasWanted) : undefined,
      gasUsed: isSet(object.gasUsed) ? Long.fromString(object.gasUsed) : undefined,
      tx: isSet(object.tx) ? Any.fromJSON(object.tx) : undefined,
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : undefined,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
    };
  },

  toJSON(message: TxResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || undefined).toString());
    message.txhash !== undefined && (obj.txhash = message.txhash);
    message.codespace !== undefined && (obj.codespace = message.codespace);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined && (obj.data = message.data);
    message.rawLog !== undefined && (obj.rawLog = message.rawLog);

    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? ABCIMessageLog.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }

    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || undefined).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || undefined).toString());
    message.tx !== undefined && (obj.tx = message.tx ? Any.toJSON(message.tx) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);

    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TxResponse>, I>>(object: I): TxResponse {
    const message = createBaseTxResponse();
    message.height =
      object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : undefined;
    message.txhash = object.txhash ?? undefined;
    message.codespace = object.codespace ?? undefined;
    message.code = object.code ?? undefined;
    message.data = object.data ?? undefined;
    message.rawLog = object.rawLog ?? undefined;
    message.logs = object.logs?.map((e) => ABCIMessageLog.fromPartial(e)) || [];
    message.info = object.info ?? undefined;
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromValue(object.gasWanted)
        : undefined;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : undefined;
    message.tx = object.tx !== undefined && object.tx !== null ? Any.fromPartial(object.tx) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
};

function createBaseABCIMessageLog(): ABCIMessageLog {
  return {
    msgIndex: undefined,
    log: undefined,
    events: undefined,
  };
}

export const ABCIMessageLog = {
  encode(message: ABCIMessageLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgIndex !== undefined) {
      writer.uint32(8).uint32(message.msgIndex);
    }

    if (message.log !== undefined) {
      writer.uint32(18).string(message.log);
    }

    for (const v of message.events) {
      StringEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIMessageLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIMessageLog();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.msgIndex = reader.uint32();
          break;

        case 2:
          message.log = reader.string();
          break;

        case 3:
          message.events.push(StringEvent.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ABCIMessageLog {
    return {
      msgIndex: isSet(object.msgIndex) ? Number(object.msgIndex) : undefined,
      log: isSet(object.log) ? String(object.log) : undefined,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => StringEvent.fromJSON(e)) : [],
    };
  },

  toJSON(message: ABCIMessageLog): unknown {
    const obj: any = {};
    message.msgIndex !== undefined && (obj.msgIndex = Math.round(message.msgIndex));
    message.log !== undefined && (obj.log = message.log);

    if (message.events) {
      obj.events = message.events.map((e) => (e ? StringEvent.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ABCIMessageLog>, I>>(object: I): ABCIMessageLog {
    const message = createBaseABCIMessageLog();
    message.msgIndex = object.msgIndex ?? undefined;
    message.log = object.log ?? undefined;
    message.events = object.events?.map((e) => StringEvent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStringEvent(): StringEvent {
  return {
    type: undefined,
    attributes: undefined,
  };
}

export const StringEvent = {
  encode(message: StringEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined) {
      writer.uint32(10).string(message.type);
    }

    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StringEvent {
    return {
      type: isSet(object.type) ? String(object.type) : undefined,
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StringEvent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);

    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => (e ? Attribute.toJSON(e) : undefined));
    } else {
      obj.attributes = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StringEvent>, I>>(object: I): StringEvent {
    const message = createBaseStringEvent();
    message.type = object.type ?? undefined;
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAttribute(): Attribute {
  return {
    key: undefined,
    value: undefined,
  };
}

export const Attribute = {
  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== undefined) {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Attribute {
    return {
      key: isSet(object.key) ? String(object.key) : undefined,
      value: isSet(object.value) ? String(object.value) : undefined,
    };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(object: I): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? undefined;
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseGasInfo(): GasInfo {
  return {
    gasWanted: undefined,
    gasUsed: undefined,
  };
}

export const GasInfo = {
  encode(message: GasInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gasWanted !== undefined) {
      writer.uint32(8).uint64(message.gasWanted);
    }

    if (message.gasUsed !== undefined) {
      writer.uint32(16).uint64(message.gasUsed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GasInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gasWanted = reader.uint64() as Long;
          break;

        case 2:
          message.gasUsed = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GasInfo {
    return {
      gasWanted: isSet(object.gasWanted) ? Long.fromString(object.gasWanted) : undefined,
      gasUsed: isSet(object.gasUsed) ? Long.fromString(object.gasUsed) : undefined,
    };
  },

  toJSON(message: GasInfo): unknown {
    const obj: any = {};
    message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || undefined).toString());
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || undefined).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GasInfo>, I>>(object: I): GasInfo {
    const message = createBaseGasInfo();
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromValue(object.gasWanted)
        : undefined;
    message.gasUsed =
      object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : undefined;
    return message;
  },
};

function createBaseResult(): Result {
  return {
    data: undefined,
    log: undefined,
    events: undefined,
  };
}

export const Result = {
  encode(message: Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      writer.uint32(10).bytes(message.data);
    }

    if (message.log !== undefined) {
      writer.uint32(18).string(message.log);
    }

    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Result {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        case 2:
          message.log = reader.string();
          break;

        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Result {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : undefined,
      log: isSet(object.log) ? String(object.log) : undefined,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
    };
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data !== undefined ? base64FromBytes(message.data) : undefined);
    message.log !== undefined && (obj.log = message.log);

    if (message.events) {
      obj.events = message.events.map((e) => (e ? Event.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result {
    const message = createBaseResult();
    message.data = object.data ?? undefined;
    message.log = object.log ?? undefined;
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSimulationResponse(): SimulationResponse {
  return {
    gasInfo: undefined,
    result: undefined,
  };
}

export const SimulationResponse = {
  encode(message: SimulationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SimulationResponse {
    return {
      gasInfo: isSet(object.gasInfo) ? GasInfo.fromJSON(object.gasInfo) : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: SimulationResponse): unknown {
    const obj: any = {};
    message.gasInfo !== undefined &&
      (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SimulationResponse>, I>>(object: I): SimulationResponse {
    const message = createBaseSimulationResponse();
    message.gasInfo =
      object.gasInfo !== undefined && object.gasInfo !== null
        ? GasInfo.fromPartial(object.gasInfo)
        : undefined;
    message.result =
      object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  },
};

function createBaseMsgData(): MsgData {
  return {
    msgType: undefined,
    data: undefined,
  };
}

export const MsgData = {
  encode(message: MsgData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msgType !== undefined) {
      writer.uint32(10).string(message.msgType);
    }

    if (message.data !== undefined) {
      writer.uint32(18).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.msgType = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgData {
    return {
      msgType: isSet(object.msgType) ? String(object.msgType) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : undefined,
    };
  },

  toJSON(message: MsgData): unknown {
    const obj: any = {};
    message.msgType !== undefined && (obj.msgType = message.msgType);
    message.data !== undefined &&
      (obj.data = message.data !== undefined ? base64FromBytes(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgData>, I>>(object: I): MsgData {
    const message = createBaseMsgData();
    message.msgType = object.msgType ?? undefined;
    message.data = object.data ?? undefined;
    return message;
  },
};

function createBaseTxMsgData(): TxMsgData {
  return {
    data: undefined,
  };
}

export const TxMsgData = {
  encode(message: TxMsgData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      MsgData.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxMsgData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxMsgData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data.push(MsgData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxMsgData {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => MsgData.fromJSON(e)) : [],
    };
  },

  toJSON(message: TxMsgData): unknown {
    const obj: any = {};

    if (message.data) {
      obj.data = message.data.map((e) => (e ? MsgData.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TxMsgData>, I>>(object: I): TxMsgData {
    const message = createBaseTxMsgData();
    message.data = object.data?.map((e) => MsgData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSearchTxsResult(): SearchTxsResult {
  return {
    totalCount: undefined,
    count: undefined,
    pageNumber: undefined,
    pageTotal: undefined,
    limit: undefined,
    txs: undefined,
  };
}

export const SearchTxsResult = {
  encode(message: SearchTxsResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalCount !== undefined) {
      writer.uint32(8).uint64(message.totalCount);
    }

    if (message.count !== undefined) {
      writer.uint32(16).uint64(message.count);
    }

    if (message.pageNumber !== undefined) {
      writer.uint32(24).uint64(message.pageNumber);
    }

    if (message.pageTotal !== undefined) {
      writer.uint32(32).uint64(message.pageTotal);
    }

    if (message.limit !== undefined) {
      writer.uint32(40).uint64(message.limit);
    }

    for (const v of message.txs) {
      TxResponse.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchTxsResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchTxsResult();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.uint64() as Long;
          break;

        case 2:
          message.count = reader.uint64() as Long;
          break;

        case 3:
          message.pageNumber = reader.uint64() as Long;
          break;

        case 4:
          message.pageTotal = reader.uint64() as Long;
          break;

        case 5:
          message.limit = reader.uint64() as Long;
          break;

        case 6:
          message.txs.push(TxResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SearchTxsResult {
    return {
      totalCount: isSet(object.totalCount) ? Long.fromString(object.totalCount) : undefined,
      count: isSet(object.count) ? Long.fromString(object.count) : undefined,
      pageNumber: isSet(object.pageNumber) ? Long.fromString(object.pageNumber) : undefined,
      pageTotal: isSet(object.pageTotal) ? Long.fromString(object.pageTotal) : undefined,
      limit: isSet(object.limit) ? Long.fromString(object.limit) : undefined,
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => TxResponse.fromJSON(e)) : [],
    };
  },

  toJSON(message: SearchTxsResult): unknown {
    const obj: any = {};
    message.totalCount !== undefined && (obj.totalCount = (message.totalCount || undefined).toString());
    message.count !== undefined && (obj.count = (message.count || undefined).toString());
    message.pageNumber !== undefined && (obj.pageNumber = (message.pageNumber || undefined).toString());
    message.pageTotal !== undefined && (obj.pageTotal = (message.pageTotal || undefined).toString());
    message.limit !== undefined && (obj.limit = (message.limit || undefined).toString());

    if (message.txs) {
      obj.txs = message.txs.map((e) => (e ? TxResponse.toJSON(e) : undefined));
    } else {
      obj.txs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SearchTxsResult>, I>>(object: I): SearchTxsResult {
    const message = createBaseSearchTxsResult();
    message.totalCount =
      object.totalCount !== undefined && object.totalCount !== null
        ? Long.fromValue(object.totalCount)
        : undefined;
    message.count =
      object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : undefined;
    message.pageNumber =
      object.pageNumber !== undefined && object.pageNumber !== null
        ? Long.fromValue(object.pageNumber)
        : undefined;
    message.pageTotal =
      object.pageTotal !== undefined && object.pageTotal !== null
        ? Long.fromValue(object.pageTotal)
        : undefined;
    message.limit =
      object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : undefined;
    message.txs = object.txs?.map((e) => TxResponse.fromPartial(e)) || [];
    return message;
  },
};
