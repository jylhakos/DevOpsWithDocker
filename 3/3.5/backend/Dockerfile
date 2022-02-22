FROM golang:1.16-alpine

WORKDIR /app

COPY go.* ./

RUN go get -v -d ./...

COPY . .

ENV PORT=8080

ENV REQUEST_ORIGIN=http://localhost:5000

RUN addgroup -S nonroot && adduser -S -D -h /app nonroot nonroot && chown nonroot:nonroot -R /app

RUN go build -v -o ./server && chmod a+x ./server && chown nonroot:nonroot ./server

USER nonroot

EXPOSE 8080

CMD ["./server"]