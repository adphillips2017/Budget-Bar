FROM node:15

WORKDIR /usr/src/app/website

COPY package*.json ./

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

# CMD ["npm", "start"]
CMD ["ng", "serve", "--host=0.0.0.0", "--disable-host-check"]
