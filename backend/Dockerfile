FROM node:16-alpine

WORKDIR /app
COPY package.json tsconfig.json wait.sh ./

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
RUN npm install 

COPY nodemon.json tsoa.json  ./
COPY src ./src

EXPOSE 4000
CMD /wait && yarn run dev:docker