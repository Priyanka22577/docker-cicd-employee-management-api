FROM node:25-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3008

CMD ["node", "server.js"]