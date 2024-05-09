#!/bin/sh

npm run build

npm install -g serve

rm -r ./node_modules/ ./public/ ./src/ .env .gitignore  Dockerfile package-lock.json package.json .git/ .github/

serve -s build -l 3000
