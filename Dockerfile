FROM node:10
ENV APP_ROOT=/usr/src/app
WORKDIR $APP_ROOT
COPY . ./
RUN npm install -g && \
    npm install aurelia-cli -g && \
    au build --env prod
EXPOSE 9000
CMD ["sh", "docker/start.sh"]
