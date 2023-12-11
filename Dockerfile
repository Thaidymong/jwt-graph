FROM node:20.9.0

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 80

CMD [ "yarn", "start" ]