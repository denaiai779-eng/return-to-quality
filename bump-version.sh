#!/bin/bash
# Run before each push: stamps a new version so open phones pick up the update on their next open.
cd "$(dirname "$0")"
V=$(date +%Y%m%d%H%M%S)
printf '{"v":"%s"}\n' "$V" > version.json
sed -i '' -E "s/const APP_VERSION = '[0-9]+';/const APP_VERSION = '$V';/" index.html
# Stamp shared content files too, so phones don't keep an old cached copy
sed -i '' -E "s/movement-prep\.js\?v=[0-9]+/movement-prep.js?v=$V/" index.html
sed -i '' -E "s/cage-library\.js\?v=[0-9]+/cage-library.js?v=$V/" index.html
sed -i '' -E "s/fx\.js\?v=[0-9]+/fx.js?v=$V/" index.html
echo "$V"
