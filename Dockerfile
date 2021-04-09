FROM node:15.14.0-alpine

WORKDIR /app

COPY package.json ./

RUN npm install -g npm@7.9.0
RUN npm install axios
RUN npm install cors
RUN yarn install

COPY . /app

CMD ["yarn","run","start"]