#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

TS_PROTO_OPTS="esModuleInterop=true,forceLong=long,useOptionals=messages,useDate=false"

OUT_DIR="./src"
PLUGIN_PATH="$(realpath ./bin)/protoc-gen-ts_proto_yarn_2"

mkdir -p "$OUT_DIR"

echo "Processing wasmd 0.25 proto files ..."
WASMD_DIR="./wasmd-0.25/proto"
WASMD_THIRD_PARTY_DIR="./wasmd-0.25/third_party/proto"
CONFIO_DIR="$WASMD_THIRD_PARTY_DIR/confio"
COSMOS_DIR="$WASMD_THIRD_PARTY_DIR/cosmos"
IBC_DIR="$WASMD_THIRD_PARTY_DIR/ibc"
protoc \
  --plugin="$PLUGIN_PATH" \
  --ts_proto_yarn_2_out="$OUT_DIR" \
  --proto_path="$WASMD_DIR" \
  --proto_path="$WASMD_THIRD_PARTY_DIR" \
  --ts_proto_yarn_2_opt="$TS_PROTO_OPTS" \
  "$CONFIO_DIR/proofs.proto" \
  "$COSMOS_DIR/auth/v1beta1/auth.proto" \
  "$COSMOS_DIR/auth/v1beta1/genesis.proto" \
  "$COSMOS_DIR/auth/v1beta1/query.proto" \
  "$COSMOS_DIR/bank/v1beta1/bank.proto" \
  "$COSMOS_DIR/bank/v1beta1/genesis.proto" \
  "$COSMOS_DIR/bank/v1beta1/query.proto" \
  "$COSMOS_DIR/bank/v1beta1/tx.proto" \
  "$COSMOS_DIR/base/abci/v1beta1/abci.proto" \
  "$COSMOS_DIR/base/kv/v1beta1/kv.proto" \
  "$COSMOS_DIR/base/query/v1beta1/pagination.proto" \
  "$COSMOS_DIR/base/reflection/v1beta1/reflection.proto" \
  "$COSMOS_DIR/base/snapshots/v1beta1/snapshot.proto" \
  "$COSMOS_DIR/base/store/v1beta1/commit_info.proto" \
  "$COSMOS_DIR/base/store/v1beta1/snapshot.proto" \
  "$COSMOS_DIR/base/tendermint/v1beta1/query.proto" \
  "$COSMOS_DIR/base/v1beta1/coin.proto" \
  "$COSMOS_DIR/capability/v1beta1/capability.proto" \
  "$COSMOS_DIR/capability/v1beta1/genesis.proto" \
  "$COSMOS_DIR/crisis/v1beta1/genesis.proto" \
  "$COSMOS_DIR/crisis/v1beta1/tx.proto" \
  "$COSMOS_DIR/crypto/ed25519/keys.proto" \
  "$COSMOS_DIR/crypto/multisig/keys.proto" \
  "$COSMOS_DIR/crypto/multisig/v1beta1/multisig.proto" \
  "$COSMOS_DIR/crypto/secp256k1/keys.proto" \
  "$COSMOS_DIR/distribution/v1beta1/distribution.proto" \
  "$COSMOS_DIR/distribution/v1beta1/genesis.proto" \
  "$COSMOS_DIR/distribution/v1beta1/query.proto" \
  "$COSMOS_DIR/distribution/v1beta1/tx.proto" \
  "$COSMOS_DIR/evidence/v1beta1/evidence.proto" \
  "$COSMOS_DIR/evidence/v1beta1/genesis.proto" \
  "$COSMOS_DIR/evidence/v1beta1/query.proto" \
  "$COSMOS_DIR/evidence/v1beta1/tx.proto" \
  "$COSMOS_DIR/genutil/v1beta1/genesis.proto" \
  "$COSMOS_DIR/gov/v1beta1/genesis.proto" \
  "$COSMOS_DIR/gov/v1beta1/gov.proto" \
  "$COSMOS_DIR/gov/v1beta1/query.proto" \
  "$COSMOS_DIR/gov/v1beta1/tx.proto" \
  "$COSMOS_DIR/mint/v1beta1/genesis.proto" \
  "$COSMOS_DIR/mint/v1beta1/mint.proto" \
  "$COSMOS_DIR/mint/v1beta1/query.proto" \
  "$COSMOS_DIR/params/v1beta1/params.proto" \
  "$COSMOS_DIR/params/v1beta1/query.proto" \
  "$COSMOS_DIR/slashing/v1beta1/genesis.proto" \
  "$COSMOS_DIR/slashing/v1beta1/query.proto" \
  "$COSMOS_DIR/slashing/v1beta1/slashing.proto" \
  "$COSMOS_DIR/slashing/v1beta1/tx.proto" \
  "$COSMOS_DIR/staking/v1beta1/genesis.proto" \
  "$COSMOS_DIR/staking/v1beta1/query.proto" \
  "$COSMOS_DIR/staking/v1beta1/staking.proto" \
  "$COSMOS_DIR/staking/v1beta1/tx.proto" \
  "$COSMOS_DIR/tx/signing/v1beta1/signing.proto" \
  "$COSMOS_DIR/tx/v1beta1/service.proto" \
  "$COSMOS_DIR/tx/v1beta1/tx.proto" \
  "$COSMOS_DIR/upgrade/v1beta1/query.proto" \
  "$COSMOS_DIR/upgrade/v1beta1/upgrade.proto" \
  "$COSMOS_DIR/vesting/v1beta1/tx.proto" \
  "$COSMOS_DIR/vesting/v1beta1/vesting.proto" \
  "$IBC_DIR/applications/transfer/v1/genesis.proto" \
  "$IBC_DIR/applications/transfer/v1/query.proto" \
  "$IBC_DIR/applications/transfer/v1/transfer.proto" \
  "$IBC_DIR/applications/transfer/v1/tx.proto" \
  "$IBC_DIR/applications/transfer/v2/packet.proto" \
  "$IBC_DIR/core/channel/v1/channel.proto" \
  "$IBC_DIR/core/channel/v1/genesis.proto" \
  "$IBC_DIR/core/channel/v1/query.proto" \
  "$IBC_DIR/core/channel/v1/tx.proto" \
  "$IBC_DIR/core/client/v1/client.proto" \
  "$IBC_DIR/core/client/v1/genesis.proto" \
  "$IBC_DIR/core/client/v1/query.proto" \
  "$IBC_DIR/core/client/v1/tx.proto" \
  "$IBC_DIR/lightclients/localhost/v1/localhost.proto" \
  "$IBC_DIR/lightclients/solomachine/v1/solomachine.proto" \
  "$IBC_DIR/lightclients/tendermint/v1/tendermint.proto" \
  "$IBC_DIR/core/commitment/v1/commitment.proto" \
  "$IBC_DIR/core/connection/v1/connection.proto" \
  "$IBC_DIR/core/connection/v1/genesis.proto" \
  "$IBC_DIR/core/connection/v1/query.proto" \
  "$IBC_DIR/core/connection/v1/tx.proto" \
  "$IBC_DIR/core/types/v1/genesis.proto" \
  "$WASMD_DIR/cosmwasm/wasm/v1/genesis.proto" \
  "$WASMD_DIR/cosmwasm/wasm/v1/ibc.proto" \
  "$WASMD_DIR/cosmwasm/wasm/v1/proposal.proto" \
  "$WASMD_DIR/cosmwasm/wasm/v1/query.proto" \
  "$WASMD_DIR/cosmwasm/wasm/v1/tx.proto" \
  "$WASMD_DIR/cosmwasm/wasm/v1/types.proto"
