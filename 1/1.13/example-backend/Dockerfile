FROM golang:1.16-alpine

ENV PORT=8080

ENV REQUEST_ORIGIN=https://example.com

WORKDIR /app

RUN apt install golang

COPY go.* ./

RUN go get -v -d ./...

COPY . .

RUN go build -v -o ./server

RUN go test ./...

EXPOSE 8080

CMD ["./server"]