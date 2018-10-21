FROM node:10
ENV APP_ROOT=/usr/src/app
WORKDIR $APP_ROOT
COPY . ./
RUN npm install http-server -g && \
    npm install aurelia-cli -g && \
    npm install && \
    au build --env prod
EXPOSE 9000
USER nobody
CMD ["sh", "docker/start.sh"]
