FROM node:18.6.0-alpine3.16

RUN apk --no-cache add curl
RUN apk add make g++ python3 git
RUN npm i -g node-pre-gyp

RUN mkdir /app
WORKDIR /app

COPY package.json ./
COPY /pnpm-lock.yaml ./

RUN npm i -g pnpm@6.23.6
RUN pnpm i

COPY src src
COPY tsconfig.json tsconfig.json
COPY .env .env

CMD npm start