#!/usr/bin/env bash
set -e

cat node_modules/@wikia/ad-engine/dist/ad-engine.global.js <(echo) ./dist/ad-products.global.js <(echo) ./lib/prebid.min.js > ./dist/global-bundle.js
