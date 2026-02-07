#!/usr/bin/env python3
"""
Simple HTTP server for TSK visualization with gzip compression.
Run with: python3 serve.py
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
import gzip
import io

class CompressedHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        # Cache JSON for 24 hours since they don't change
        if self.path.endswith('.json'):
            self.send_header('Cache-Control', 'public, max-age=86400')
        else:
            # Don't cache HTML/JS during development
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_GET(self):
        # Check if file is a JSON file and can be compressed
        if self.path.endswith('.json'):
            filepath = self.translate_path(self.path)
            if os.path.isfile(filepath):
                # Read and compress the file
                with open(filepath, 'rb') as f:
                    data = f.read()

                compressed = gzip.compress(data, compresslevel=6)

                # Send compressed response
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Content-Encoding', 'gzip')
                self.send_header('Content-Length', str(len(compressed)))
                self.end_headers()
                self.wfile.write(compressed)
                return

        # Fallback to default handling for non-JSON files
        super().do_GET()

if __name__ == '__main__':
    port = 8000
    print(f"Starting TSK visualization server at http://localhost:{port}")
    print("Press Ctrl+C to stop")

    server_address = ('', port)
    httpd = HTTPServer(server_address, CompressedHTTPRequestHandler)
    httpd.serve_forever()