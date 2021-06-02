#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

GENERATED_DIR="./generated"
COSMOS_SRC_DIR="./packages/cosmos/src"

cp -R "$GENERATED_DIR/cosmos" "$COSMOS_SRC_DIR/"
cp -R "$GENERATED_DIR/cosmos_proto" "$COSMOS_SRC_DIR/"
cp -R "$GENERATED_DIR/gogoproto" "$COSMOS_SRC_DIR/"
cp -R "$GENERATED_DIR/google" "$COSMOS_SRC_DIR/"
cp -R "$GENERATED_DIR/tendermint" "$COSMOS_SRC_DIR/"
