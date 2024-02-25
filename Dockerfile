# FROM --platform=amd64 node:18 -- this is the command you need to run for building for a linux platform

FROM --platform=amd64 node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]