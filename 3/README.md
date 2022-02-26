# 3.1

GitHub Actions

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.1.png?raw=true)

An URL to app at Heroku

https://app-part11-phonebook.herokuapp.com/

# 3.2

```

$ /bin/sh -c ./script.sh

$ docker build -t script .

$ docker run --privileged -v /var/run/docker.sock:/var/run/docker.sock script

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.2.png?raw=true)

# 3.3

By default, Docker runs commands inside the container as root.

A link to best Node.js practises

https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md

```

$ docker exec -ti backend /bin/sh

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.3.png?raw=true)

# 3.4

Optimizing the image size by reducing the number of layers in Dockerfiles.

```

$ docker image history <IMAGE>

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.4.png?raw=true)

# 3.5

Golang and the Debian based images replaced with an Alpine-based image in Dockerfiles.

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.5.png?raw=true)

# 3.6

The multi-stage builds use multiple FROM statements in the Dockerfile.

Each FROM instruction in the Dockerfile uses a different base, and each of them begins a new stage of the build.

The second FROM instruction starts new build stage with the scratch image as its base.

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.6.png?raw=true)

# 3.7

A link to Docker document.

https://docs.docker.com/develop/develop-images/multistage-build/

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.7.png?raw=true)

# 3.8

A figure shows a node and pods for the applications in Kubernetes deployment.

Use the external IP address (LoadBalancer) to access the web application.

```

$ curl -v http://<EXTERNAL_IP_ADDRESS>:<PORT>

```

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.8.png?raw=true)

## Kubernetes

Kubernetes (k8s) is a platform for managing containerized workloads and services.

https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/