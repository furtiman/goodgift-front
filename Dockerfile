FROM node:12.13.1
WORKDIR /app

COPY . ./

RUN npm i

CMD npm run deploy

EXPOSE 5000