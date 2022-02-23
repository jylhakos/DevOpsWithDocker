FROM golang:1.16-alpine as build

WORKDIR /app

COPY go.* ./

RUN go get -v -d ./...

COPY . .

ENV PORT=8080

ENV REQUEST_ORIGIN=http://localhost:5000

ENV CGO_ENABLED=0

RUN go build -v -o ./server && chmod a+x ./server

RUN apk add --update --no-cache gcc libc-dev

RUN addgroup -S nonroot && adduser -S -D -h . nonroot nonroot && chown nonroot:nonroot -R . && chown nonroot:nonroot ./server

FROM scratch

WORKDIR /app

ENV REQUEST_ORIGIN=http://localhost:5000

COPY --from=build /app .

USER nonroot

EXPOSE 8080

ENTRYPOINT ["./server"]