FROM node:16-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN apt-get update
RUN apt-get install libssl1.1

