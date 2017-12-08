#!/bin/bash

CURRENT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)

#if [ $CURRENT_BRANCH != "dev" ]; then
#	echo -e "\033[31mYou're not on dev branch\033[0m ($CURRENT_BRANCH)"
#	exit 1
#fi

npm run test
npm run lint

./node_modules/webpack/bin/webpack.js --config ./webpack.build.config.js -p

git add dist/
