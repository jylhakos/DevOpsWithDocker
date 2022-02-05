FROM node:16 AS build-stage

WORKDIR /usr/src/app

RUN apt-get update \ 
    && apt-get install -y npm \ 
    && node --version && npm --version

RUN npm install -g npm@8.4.1

COPY package*.json ./

#RUN npm install

RUN npm ci --only=production

ENV REACT_APP_BACKEND_URL=http://localhost:8000

RUN npm run build

COPY . .

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "-l", "5000", "build"]
