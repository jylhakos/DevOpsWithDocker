# Client

package.json

{
 "name": "notes",
  //...,
  "proxy": "http://localhost:8000"
}

```

$ docker build . -t <USER_NAME>/client-1.15

$ docker run -p 5000:5000 -d <USER_NAME>/client-1.15

$ docker login

$ docker push <USER_NAME>/client-1.15

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.15/client/1.15.png?raw=true)