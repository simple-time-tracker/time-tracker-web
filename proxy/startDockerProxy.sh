#!/usr/bin/env bash

docker run --rm -d --name time-tracker-reverse-proxy -p 80:80 -v $PWD/nginx.conf:/etc/nginx/nginx.conf:ro --network host  nginx:1.15-alpine
