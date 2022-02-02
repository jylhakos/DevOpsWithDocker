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

```

$ docker pull devopsdockeruh/simple-web-service:ubuntu

$ docker container ls -a | grep ubuntu

```

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.5/1.5.png?raw=true)

## 1.6

```

$ docker run -it devopsdockeruh/pull_exercise

```

A link to the image on Docker Hub

https://hub.docker.com/r/devopsdockeruh/pull_exercise

```

const victory = () => () => {
  console.log('You found the correct password. Secret message is:\n"This is the secret message"')
  return false
}

const KNOWN_INPUTS = {
  "exit": close('exit'),
  "close": close('close'),
  "quit": close('quit'),
  "": close('empty'),
  "help": help(),
  "basics": victory()
}

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.6/1.6.png?raw=true)

## 1.7

```

$ docker build . -t web-server

$ docker run web-server

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.7/1.7.png?raw=true)


## 1.8

```

$ docker build . -t curler

$ docker run -it curler

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.8/1.8.png?raw=true)
