#!/usr/bin/env bash
set -e

git push --follow-tags

node maintenance/postversion-hook.js
