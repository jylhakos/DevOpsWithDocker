# Server

```

$ go install

$ go run .

$ docker build . -t <USER_NAME>/server-1.15

$ docker run -p 8000:8080 -d <USER_NAME>/server-1.15

$ docker login

$ docker push <USER_NAME>/server-1.15

$ curl -v http://localhost:8000/notes \
    --header "Content-Type: application/json" \
    --request "GET"

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.15/server/1.15.png?raw=true)
