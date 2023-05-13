#!/bin/bash

# Check if the filename argument is provided
if [ -z "$1" ]
then
  echo "Please provide a filename."
  exit 1
fi

# Create the directory if it doesn't exist
if [ ! -d "challenges" ]
then
  mkdir challenges
fi

# Create the file with the provided name
touch "challenge/$1.js"
echo "File created: challenge/$1.js"
