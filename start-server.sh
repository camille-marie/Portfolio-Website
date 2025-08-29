#!/bin/bash

echo "🚀 Starting Portfolio Server..."
echo ""
echo "This will fix the greyed-out audio player issue."
echo ""
echo "Starting server on http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 server.py
elif command -v python &> /dev/null; then
    python server.py
else
    echo "❌ Python not found! Please install Python 3."
    echo "💡 On Mac, you can install it with: brew install python3"
    echo "💡 On Ubuntu/Debian: sudo apt-get install python3"
    exit 1
fi
