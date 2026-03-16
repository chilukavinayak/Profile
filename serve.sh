#!/bin/bash
# Serve the built site locally for testing

echo "Serving portfolio from dist/ folder..."
echo "Open http://localhost:7070"
echo ""
echo "Press Ctrl+C to stop"
echo ""

cd dist && python3 -m http.server 3000
