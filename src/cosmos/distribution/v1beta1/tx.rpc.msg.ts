import { Coin } from "../../base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import {
  MsgSetWithdrawAddress,
  MsgSetWithdrawAddressResponse,
  MsgWithdrawDelegatorReward,
  MsgWithdrawDelegatorRewardResponse,
  MsgWithdrawValidatorCommission,
  MsgWithdrawValidatorCommissionResponse,
  MsgFundCommunityPool,
  MsgFundCommunityPoolResponse,
} from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
  /*SetWithdrawAddress defines a method to change the withdraw address
  for a delegator (or validator self-delegation).*/

  WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
  /*WithdrawDelegatorReward defines a method to withdraw rewards of delegator
  from a single validator.*/

  WithdrawValidatorCommission(
    request: MsgWithdrawValidatorCommission,
  ): Promise<MsgWithdrawValidatorCommissionResponse>;
  /*WithdrawValidatorCommission defines a method to withdraw the
  full commission to the validator address.*/

  FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
  /*FundCommunityPool defines a method to allow an account to directly
  fund the community pool.*/
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this);
    this.WithdrawDelegatorReward = this.WithdrawDelegatorReward.bind(this);
    this.WithdrawValidatorCommission = this.WithdrawValidatorCommission.bind(this);
    this.FundCommunityPool = this.FundCommunityPool.bind(this);
  }

  SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse> {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
    return promise.then((data) => MsgSetWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }

  WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse> {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
    return promise.then((data) => MsgWithdrawDelegatorRewardResponse.decode(new _m0.Reader(data)));
  }

  WithdrawValidatorCommission(
    request: MsgWithdrawValidatorCommission,
  ): Promise<MsgWithdrawValidatorCommissionResponse> {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
    return promise.then((data) => MsgWithdrawValidatorCommissionResponse.decode(new _m0.Reader(data)));
  }

  FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse> {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
    return promise.then((data) => MsgFundCommunityPoolResponse.decode(new _m0.Reader(data)));
  }
}
