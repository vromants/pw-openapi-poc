#!/bin/bash

npm install
npx playwright install
npm run run:"${1}"
