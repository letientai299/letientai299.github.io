#!/bin/bash
# Create a new post in 'en/_posts' quickly

# Yell if no argument
if [[ $# -eq 0 ]]; then
  echo "Post name, please!"
  exit
fi

TITLE="$*"

# Format the current datetime into something like 2017-01-07 Sat 12:15:33
CREATE_DATE="$(date "+%F %T")"

TITLE_FORMATTED="$(sed -e 's/[^A-Za-z0-9._-]/-/g' <<< $TITLE)"
FILE_NAME_PREFIX="$(date "+%Y-%m-%d")"
FILE_NAME=$FILE_NAME_PREFIX-$TITLE_FORMATTED.md

FULL_FILE_LOCATION="en/_posts/$FILE_NAME"

if [[ -f  $FULL_FILE_LOCATION ]]; then
  echo "File $FULL_FILE_LOCATION existed."
  overwrite=y
  [[ -t 0 ]] && {
  read -t 5 -n 1 -p $'\e[1;32mOverwrite it? (Y/n)\e[0m ' overwrite ||  # read 'fails' on timeout
  overwrite=n ; }                     # Timeout => answer No
  if [[ $overwrite =~ ^(n|N|)$ ]];then
    exit
  fi
fi

POST_TEMPLATE="\
---\n\
layout: \"post\"\n\
title: \"$TITLE\"\n\
date: \"$CREATE_DATE\"\n\
modified_at: \"$CREATE_DATE\"\n\
tags:\n\
---\n"

echo -e "$POST_TEMPLATE" > "en/_posts/$FILE_NAME"

