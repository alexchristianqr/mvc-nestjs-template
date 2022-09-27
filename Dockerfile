FROM node:14-alpine as alpineServer
WORKDIR /myserver/www
RUN npm install -g @nestjs/cli pm2
COPY . /myserver/www
RUN npm install && npm run build
EXPOSE 3000
CMD ["pm2-runtime", "start", "/myserver/www/dist/app.js"]