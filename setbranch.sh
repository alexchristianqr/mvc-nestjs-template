#!/usr/bin/env sh

set -e

rm -rf temp

mkdir -p temp

filesIgnored=`ls -A | grep "node_modules" | grep ".idea" | grep ".docker" | grep "package-lock.json" | grep "temp" | grep "dist" | grep ".env" | grep ".git" | grep "setbranch.sh"`
cp -vr ${filesIgnored} temp/

cd temp

git init
git add -A
git commit -m "[added] structure project template"
git push -f git@github.com:acqrdeveloper/mvc-nestjs-template.git master:template

cd -
