FROM node:10

WORKDIR /bot

COPY bot ./

RUN npm install

CMD ["node", "main.js"]