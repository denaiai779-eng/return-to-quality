#!/bin/bash
# Run before each push: stamps a new version so open phones pick up the update on their next open.
cd "$(dirname "$0")"
V=$(date +%Y%m%d%H%M%S)
printf '{"v":"%s"}\n' "$V" > version.json
sed -i '' -E "s/const APP_VERSION = '[0-9]+';/const APP_VERSION = '$V';/" index.html
echo "$V"
