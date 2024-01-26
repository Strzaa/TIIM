FROM node:14
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install

COPY . .
 
EXPOSE 3000

RUN chmod -R 777 /usr/src/app/*
 
CMD [ "npm", "start" ]