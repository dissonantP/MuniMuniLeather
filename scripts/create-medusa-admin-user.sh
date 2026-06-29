#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "Usage: $0 <email> <password>" >&2
  exit 2
fi

email="$1"
password="$2"

docker compose run --rm commerce npm exec -- medusa user -e "$email" -p "$password"
