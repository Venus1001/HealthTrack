#!/bin/bash

echo "Starting the React server..."
nohup npm run start > server.log 2>&1 &
echo "Server started with PID: $!"