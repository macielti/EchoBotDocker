FROM node:10

WORKDIR /bot

COPY bot ./

RUN npm install

EXPOSE 2001

CMD ["node", "main.js"]