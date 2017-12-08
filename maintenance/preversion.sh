#!/bin/bash

npm run test
npm run lint

# Work in progress
echo "I'll build a package here"
echo "Built package" > dist/package.js

git add dist/
