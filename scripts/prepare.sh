#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

for dir in build/*; do
  cp -R "$dir" ./
done
