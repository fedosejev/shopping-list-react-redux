#!/bin/bash

gulp build-for-production

git add .
git commit -m "Update"
git push

git subtree push --prefix build origin gh-pages