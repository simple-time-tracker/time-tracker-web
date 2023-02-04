FROM node:12-alpine AS build-js
ENV APP_ROOT=/usr/src/app
WORKDIR $APP_ROOT
COPY . ./
RUN npm install && \
  npm run build

FROM nginx:1.22.0-alpine
WORKDIR /usr/share/nginx/html
RUN apk add --no-cache bash
COPY --from=dist /usr/src/app/dist .
COPY docker/nginx.conf /etc/nginx/
COPY [".env.local", "docker/build-env-config.sh", "docker/inject-reference-in-index.sh", "./"]
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/build-env-config.sh && /usr/share/nginx/html/inject-reference-in-index.sh  && nginx -g \"daemon off;\""]
