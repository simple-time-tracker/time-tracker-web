FROM node:10
ENV APP_ROOT=/usr/src/app
WORKDIR $APP_ROOT
COPY . ./
RUN npm install && \
    npm install aurelia-cli -g && \
    au build --env prod
EXPOSE 8080
CMD [ "npm", "start" ]
