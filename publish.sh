#!/bin/sh
echo "Current version: $(<VERSION)"
echo "Enter new version number?"
read v
bundle exec jekyll build
git checkout _site
mv _site ..
rm -rf ./*
mv ../_site/* .
rm -rf ../_site
git commit -am "$v"
git push
git checkout develop
rm VERSION
touch VERSION
echo "$v" >> VERSION
