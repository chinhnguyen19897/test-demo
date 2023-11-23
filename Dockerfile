FROM node:18.14

WORKDIR '/usr/src/app'

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]
