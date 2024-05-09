#!/bin/bash

# Generate env-config.js
echo "window.REACT_APP_API_HOST = '${REACT_APP_API_HOST}';" > /path/to/your/project/public/env-config.js
echo "window.REACT_APP_API_PORT = '${REACT_APP_API_PORT}';" >> /path/to/your/project/public/env-config.js

# Start your application
npm start