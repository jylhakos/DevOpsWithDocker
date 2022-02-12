#FROM ubuntu:18.04

FROM golang:1.17.2-alpine

RUN mkdir /app

WORKDIR /app

RUN apk update && apk upgrade && apk add --no-cache gcc libc-dev

COPY go.* ./

RUN go get -v -d ./...

COPY . .

ENV PORT=8080

#ENV REQUEST_ORIGIN=http://localhost:5000
ENV REQUEST_ORIGIN=http://localhost

RUN go build -v -o ./server

EXPOSE 8080

CMD ["./server"]