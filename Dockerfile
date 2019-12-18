FROM node:12-alpine AS build-js
ENV APP_ROOT=/usr/src/app
WORKDIR $APP_ROOT
COPY . ./
RUN npm install && \
    npm run build

FROM nginx:1.17-alpine
COPY --from=build-js /usr/src/app/dist /usr/share/nginx/html
