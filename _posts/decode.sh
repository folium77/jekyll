#!/bin/sh

find * -type f -name "*.md" -print0 | while read -r -d '' file;
do
   decorded=`echo "$file" | nkf --url-input`
   mv "$file" $decorded
done