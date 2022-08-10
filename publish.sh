#!/bin/sh
echo "New version number?"
read v
bundle exec jekyll build
git checkout _site
mv _site ..
rm -rfq ./*
mv ../_site/* .
rm -rf ../_site
git commit -am "$v"
git push
git checkout develop