FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["node", "server.js"]