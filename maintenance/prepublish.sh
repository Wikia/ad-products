#!/bin/bash

CURRENT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)

#if [ $CURRENT_BRANCH != "dev" ]; then
#	echo -e "\033[31mYou're not on dev branch\033[0m ($CURRENT_BRANCH)"
#	exit 1
#fi

CURRENT_VERSION=$(npm info ad-products version)

echo -e "\033[32mPublishing $CURRENT_VERSION version\033[0m"

git push origin dev
git push origin $CURRENT_VERSION
