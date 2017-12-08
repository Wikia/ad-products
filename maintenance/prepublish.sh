#!/bin/bash

CURRENT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)

if [ $CURRENT_BRANCH != "dev" ]; then
	echo -e "\033[31mYou're not on dev branch\033[0m ($CURRENT_BRANCH)"
	exit 1
fi

CURRENT_VERSION=$(node -pe 'JSON.parse(process.argv[1]).version' "$(cat package.json)")

echo -e "\033[32mPublishing $CURRENT_VERSION version\033[0m\n"

git push origin dev
git push origin v$CURRENT_VERSION
