#!/bin/bash

# Check if URL is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <URL>"
  exit 1
fi

# Send request and display size of body
curl -s -w "%{size_download}" -o /dev/null "$1"
