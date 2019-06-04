FROM node:12-alpine
ENV APP_ROOT=/usr/src/app
WORKDIR $APP_ROOT
COPY . ./
RUN npm install http-server -g && \
    npm install && \
    npm run build && \
    rm -rf node_modules
EXPOSE 9000
USER nobody
CMD ["sh", "docker/start.sh"]
