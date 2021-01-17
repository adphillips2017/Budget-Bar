FROM node:15

WORKDIR /usr/src/app/budget_bar_server

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
