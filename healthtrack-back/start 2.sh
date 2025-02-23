#!/bin/bash

echo "Starting the Node.js server..."
nohup node server.js > server.log 2>&1 &
echo "Server started with PID: $!"