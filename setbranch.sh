#!/usr/bin/env sh

set -e

rm -rf temp

mkdir -p temp

filesIgnored=`ls -A | grep -v "node_modules" | grep -v ".idea" | grep -v ".docker" | grep -v "package-lock.json" | grep -v "temp" | grep -v "dist" | grep -v ".env" | grep -v ".git | grep -v "setbranch.sh"`
cp -vr ${filesIgnored} temp/

cd temp

git init
git add -A
git commit -m "[added] structure project template"
git push -f git@github.com:acqrdeveloper/mvc-nestjs-template.git master:template

cd -
