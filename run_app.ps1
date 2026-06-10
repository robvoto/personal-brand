# Starts the server in a new window with the root path set to the current folder
Start-Process -FilePath "python" -ArgumentList "-m http.server 8003"
