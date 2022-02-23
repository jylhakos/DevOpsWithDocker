# $ npm install
# $ docker build -t phonebook .
# $ docker run -p 3001:3001 phonebook
# $ curl http://localhost:3001/api/persons

FROM node:16

WORKDIR /usr/src/app/

COPY . ./

#RUN npm install -g npm

ENV NODE_ENV=production

RUN npm install

COPY . ./

RUN ls -l ./build && ls -l /usr/src/app/

CMD ["npm", "start", "--port", "3001"]
