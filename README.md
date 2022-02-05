# DevOps with Docker

## Install Docker Engine

You need to set up Docker’s GPG key to use a repository on a host machine.

```

$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

```
Update the apt package index with apt-get update command, and install Docker Engine and containerd with the following command.

```

$ sudo apt-get install docker-ce docker-ce-cli containerd.io

```
Verify that Docker Engine is installed correctly by running an example image.

```

$ docker run hello-world

```
Display information regarding the Docker installation.

```

$ docker info | grep -i cgroup

```

A link to Docker Engine

https://docs.docker.com/engine/install/ubuntu/

## Install Docker Compose

Download the stable release of Docker Compose form Github.

```

$ TAG=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)

$ sudo curl -L "https://github.com/docker/compose/releases/download/${TAG}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

```
Add executable permissions to the Docker Compose binary file.

```

$ sudo chmod +x /usr/local/bin/docker-compose

```
A link to Docker Compose

https://docs.docker.com/compose/install/

## Docker

Docker is a set of platform as a service (PaaS) products that use operating system level virtualization to deliver software in packages called containers.

Docker daemon takes care of images, containers and other resources.

Docker is a set of tools to deliver software in containers.

Containers are packages of software and containers are created from images.

A container includes the application and its dependencies and the container is isolated so that it doesn't interfere with other containers or the software running outside of the containers.

You can run a container with the following command, where the -i (interactive) flag instructs to pass the stdin to the container and to start Bash shell in the container.

```

$ docker run -it <IMAGE> bash

```

## Image

Docker image is an immutable file and you are not allowed to edit an existing file.

Creating new image happens by beginning from a base image and later adding new layers to the image.

You can list all your images with the following command.

```

$ docker image ls

```

We can search for images in the Docker Hub with docker search <IMAGE> command. 

## Dockerfile

Dockerfile is a file that contains the build instructions for an image and Dockerfile declares all of the required dependencies.

Each Docker command in a Dockerfile adds a layer to the image.

Dockerfile uses syntax like the following script for building the image.

```

FROM <IMAGE>:<TAG>

RUN npm install <PACKAGES>

CMD <COMMAND>

```
CMD in Dockerfile is executed when we call docker run command.

## Container

Containers contain required software to run an application on isolated environments in the host machine with the ability to interact with each other and the host machine itself by defined methods.

A container has a direct access to the kernel and resources.

The docker container run command instructs Docker daemon to create a container from the image where -d flag starts the container detached.

```

$ docker container run -d <IMAGE>

```
List all your containers with the folloing command.

```

$ docker container ls

```
### Remove Docker containers, images and network

```

$ docker stop $(docker ps -a -q)

$ docker rm $(docker ps -a -q)

$ docker rmi $(docker images -q)

$ docker network prune

```
## volumes and ports

A volume is a folder or a file that is shared between the host machine and the container.

```

$ docker run -v <HOST_PATH_FILE_OR_DIRECTORY>:<CONTAINER_PATH_FILE_OR_DIRECTORY> <IMAGE>

```
While bind mounts are dependent on the directory structure and operating system of the host machine, volumes are completely managed by Docker.

By default, when you run a container using docker run command, it does not publish any of its ports to the outside world.

You can map your host machine port to a container port.

To make a port available to services outside of Docker, or to Docker containers which are not connected to the container’s network, use the --publish or -p flag.

The short syntax, -p <HOST_PORT>:<CONTAINER_PORT>, will result in the same as -p 0.0.0.0:<HOST_PORT>:<CONTAINER_PORT>, which is opening the port to everyone, therefore avoid to let everyone to access to the port by defining the host port using localhost address syntax -p 127.0.0.1:<HOST_PORT>:<CONTAINER_PORT>.

## Containerized applications

The containers are running instances of container images and container images give each of its instances shared access to the host operating system through a container runtime.

Follow the link below to see an example how to get a Node.js application into a Docker container.

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

```

FROM node:16

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies for development
RUN npm install

# Install and build for production
# RUN npm ci --only=production

# Bundle source code for app
COPY . .

# Define port for Node.js
EXPOSE 8080

# Start Node.js with the JavaScript file
CMD [ "node", "server.js" ]

```

A link to Node.js in a container

https://code.visualstudio.com/docs/containers/quickstart-node

### Github

```

$ echo "# DevOps with Docker" >> README.md

$ git init

$ git add README.md

$ git commit -m "first commit"

$ git branch -M main

$ git remote add origin https://github.com/<REPOSITORY>.git

$ git push -u origin main

```

## Download Page

youtube-dl is a program to download videos from YouTube.com website.

A link to download youtube-dl code from Github repository.

https://github.com/ytdl-org/youtube-dl

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.1/1.1.png?raw=true)
