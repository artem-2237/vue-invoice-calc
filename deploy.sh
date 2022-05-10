#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'v1.0'

git push -f git@github.com:artem-2237/vue-invoice-calc.git master:gh-pages

cd -
