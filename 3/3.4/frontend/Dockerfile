FROM node:16.3.0-alpine

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL=http://localhost:8000

COPY . ./

RUN npm ci && npm run build

COPY . ./

RUN npm install -g serve

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser

EXPOSE 5000

CMD ["serve", "-s", "-l", "5000", "build"]