#!/bin/bash

# Kill any existing Metro bundler processes
echo "Stopping any running Metro bundler processes..."
pkill -f "expo start" || true

# Clear Metro cache
echo "Clearing Metro cache..."
rm -rf node_modules/.cache || true
rm -rf $TMPDIR/metro-* || true

# Get IP address
IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | head -n 1 | awk '{print $2}')
if [ -z "$IP" ]; then
  echo "Could not detect IP address, using localhost"
  IP="localhost"
fi

# Set environment variables for better networking
export REACT_NATIVE_PACKAGER_HOSTNAME=$IP

# Start Expo with necessary options
echo "Starting Expo with optimized network settings..."
echo "Using IP: $IP"
# Use --localhost to force connection through localhost
npx expo start --clear --localhost 