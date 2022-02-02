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
Verify that Docker Engine is installed correctly by running the hello-world image.

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

Dockerfile uses syntax like the following script for building an image.

```

FROM <IMAGE>:<TAG>

RUN npm install <PACKAGES>

CMD <COMMAND>

```
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

## Containerized applications

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/1.1/1.1.png?raw=true)
