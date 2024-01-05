FROM node:18.15-alpine

WORKDIR /app

COPY ./package*.json ./

COPY ./yarn.lock ./

RUN npm ci

RUN npm install typescript@4.7.2 pm2@5.2.0 -g

COPY . .

RUN tsc

CMD ["pm2-runtime","--raw","build/server.js","--name=node_ts_boilerplate","--no-daemon"]
