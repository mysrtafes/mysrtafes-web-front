FROM node:16-slim
WORKDIR /app
COPY package*.json ./
RUN npm install && \
  apt-get update && \
  apt-get install libssl1.1

