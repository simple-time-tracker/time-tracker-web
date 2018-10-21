#!/bin/sh
sed -e "s@\${URL}@${API_URL}@" app_config_template.js > src/app_config.js

http-server dist -p 9000