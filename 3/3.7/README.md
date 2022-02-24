# Optimizing

Run Docker containers as a non-root user by setting up a non-root user in the Dockerfile.

Docker multi-stage will reduce the size of the Docker container by dropping libraries, dependencies, packages, etc. files.

Stop and remove Docker containers and images.

```

$ docker stop $(docker ps -a -q)

$ docker rm $(docker ps -a -q)

$ docker rmi $(docker images -q)

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.7/3.7.png?raw=true)