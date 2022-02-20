#FROM ubuntu:18.04

FROM golang:1.16-alpine

RUN mkdir /app

WORKDIR /app

RUN apk add --update --no-cache gcc libc-dev

COPY go.* ./

RUN go get -v -d ./...

COPY . .

ENV PORT=8080

ENV REQUEST_ORIGIN=http://localhost:5000

EXPOSE 8080

RUN addgroup -S nonroot

RUN adduser -S -D -h /app nonroot nonroot

RUN chown nonroot:nonroot -R /app

RUN go build -v -o ./server

RUN chmod a+x ./server && chown nonroot:nonroot ./server

USER nonroot

CMD ["./server"]