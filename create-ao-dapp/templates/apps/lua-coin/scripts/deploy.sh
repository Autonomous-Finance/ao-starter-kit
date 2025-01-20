#!/bin/bash

# Check if dist directory exists
if [ ! -d "dist" ]; then
  echo "dist directory does not exist. Please build the project first"
  exit 1
fi

# Check if DEPLOY_KEY is set
if [ -z "$DEPLOY_KEY" ]; then
  echo "DEPLOY_KEY is not set. Please set it as your base64 encoded wallet.json"
  exit 1
fi

# Check if ANT_PROCESS is set
if [ -z "$ANT_PROCESS" ]; then
  echo "ANT_PROCESS is not set. Please set it to the ArNS process id"
  exit 1
fi

# Check if UNDERNAME is set if not set it as @
if [ -z "$UNDERNAME" ]; then
  UNDERNAME="@"
  echo "UNDERNAME is not set. Setting it to @"
fi

npx -y permaweb-deploy --deploy-folder dist --ant-process $ANT_PROCESS --undername $UNDERNAME
