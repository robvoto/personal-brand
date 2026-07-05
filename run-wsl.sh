#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-8003}"

echo "Starting personal brand site on http://localhost:${PORT}/"

if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "$PORT" --bind 0.0.0.0
elif command -v python >/dev/null 2>&1; then
  python -m http.server "$PORT" --bind 0.0.0.0
else
  echo "Python is required to run this site in WSL. Install Python 3 and try again." >&2
  exit 1
fi
