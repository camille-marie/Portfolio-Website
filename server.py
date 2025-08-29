#!/usr/bin/env python3
"""
Simple HTTP Server for Portfolio
This script serves the portfolio files locally to fix audio file access issues.
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

def main():
    # Get the directory where this script is located
    script_dir = Path(__file__).parent.absolute()
    
    # Change to the portfolio directory
    os.chdir(script_dir)
    
    # Set port
    PORT = 8000
    
    # Create server
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"🚀 Portfolio server started!")
            print(f"📁 Serving from: {script_dir}")
            print(f"🌐 Open your browser and go to: http://localhost:{PORT}")
            print(f"🎵 This will fix the greyed-out audio player issue")
            print(f"\n📋 Press Ctrl+C to stop the server")
            print(f"=" * 50)
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print(f"\n🛑 Server stopped by user")
        sys.exit(0)
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {PORT} is already in use!")
            print(f"💡 Try a different port: python server.py --port 8001")
        else:
            print(f"❌ Server error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Start Portfolio HTTP Server")
    parser.add_argument("--port", type=int, default=8000, help="Port to use (default: 8000)")
    
    args = parser.parse_args()
    
    # Override port if specified
    if args.port != 8000:
        PORT = args.port
    
    main()
