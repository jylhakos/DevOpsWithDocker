FROM golang:1.16-alpine

ENV PORT=8080

ENV REQUEST_ORIGIN=https://example.com

RUN mkdir /app

WORKDIR /app

RUN apk add --update --no-cache gcc libc-dev

#RUN apk add build-base

COPY go.* ./

RUN go get -v -d ./...

COPY . .

RUN go build -v -o ./server

RUN go test ./...

EXPOSE 8080

CMD ["./server"]