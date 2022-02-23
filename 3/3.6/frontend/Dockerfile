FROM node:16.3.0 as build

WORKDIR /usr/src/app

#RUN useradd -m appuser

COPY . ./

ENV REACT_APP_BACKEND_URL=http://localhost:8000

RUN npm install && npm run build

COPY . ./

#RUN chown appuser:appuser -R /usr/src/app

FROM node:16.3.0-alpine

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL=http://localhost:8000

COPY --from=build /usr/src/app .

RUN npm install -g serve

RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown appuser:appgroup -R /usr/src/app

USER appuser

EXPOSE 5000

CMD ["serve", "-s", "-l", "5000", "build"]