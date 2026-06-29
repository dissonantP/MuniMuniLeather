#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <email>" >&2
  exit 2
fi

email="$1"

docker compose run --rm commerce npm exec -- medusa user -e "$email" --invite
