# 1.1

```

$ docker container run -d nginx

$ docker container ls | grep nginx

$ docker container stop <CONTAINER>

$ docker ps -a | grep nginx

```

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.1/1.1.png?raw=true)

# 1.2

```

$ docker container run -d nginx

The -d flag starts a container detached

$ docker container ls -a

$ docker container stop <CONTAINER>

$ docker container rm <CONTAINER>

$ docker image ls

$ docker image ls | grep nginx

$ docker image rm <IMAGE>

```

# 1.3

```

$ docker run -it devopsdockeruh/simple-web-service:ubuntu

$ docker container ls -a

$ docker exec -it <CONTAINER> bash

root@<CONTAINER>:/usr/src/app# tail -f ./text.log

```

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.3/1.3.png?raw=true)


## 1.4

```

$ docker run -it --name ubuntu ubuntu sh -c 'apt-get update && apt-get install -y curl; echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'

```

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.4/1.4.png?raw=true)

## 1.5

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.5/1.5.png?raw=true)

