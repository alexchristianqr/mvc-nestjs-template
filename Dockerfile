FROM node:14
WORKDIR /app
RUN npm install -g @nestjs/cli
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD ["npm", "start"]
