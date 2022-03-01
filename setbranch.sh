#!/usr/bin/env sh

set -e

git add -A
git commit -m "[added] structure project template"
git push -f git@github.com:acqrdeveloper/mvc-nestjs-template.git master:develop

cd -
