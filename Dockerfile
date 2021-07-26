FROM node:14-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]
