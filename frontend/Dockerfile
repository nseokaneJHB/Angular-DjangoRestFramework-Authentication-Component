FROM node:14.11.0-alpine3.10

WORKDIR /usr/src/app/

COPY . .

RUN npm i -g @angular/cli@11.2.4

RUN npm i
RUN ng --version
RUN npm run build:prod

EXPOSE $PORT

CMD [ "npm", "run" , "start:prod" ]