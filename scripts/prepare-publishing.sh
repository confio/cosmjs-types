#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS=(cosmos cosmos_proto cosmwasm gogoproto google ibc tendermint)
FILES=(
  helpers.d.ts
  helpers.js
  helpers.js.map
  index.d.ts
  index.js
  index.js.map
  proofs.d.ts
  proofs.js
  proofs.js.map
)

for dir in "${DIRS[@]}"; do
  rm -rf "$dir"
  cp -R "./build/$dir" ./
done

for f in "${FILES[@]}"; do
  rm -rf "$f"
  cp "./build/$f" ./
done
