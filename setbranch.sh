#!/usr/bin/env sh

set -e

rm -rf temp

mkdir -p temp

filesIgnored=`ls -A | grep -wv "node_modules\|.idea\|.docker\|package-lock.json\|temp\|dist\|.git\|setbranch.sh"`
cp -vr ${filesIgnored} temp/

cd temp

git init
git add -A
git commit -m "[added] structure project template"
git push -f git@github.com:alexchristianqr/mvc-nestjs-template.git master:template

cd -
