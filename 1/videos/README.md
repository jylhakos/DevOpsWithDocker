## youtube-dl

### Defining start conditions for the container

The command represents an argument list for the entrypoint in the Dockerfile.

In the shell form the command is provided as a string without brackets. 

In the exec form the command and it's arguments are provided as a list with brackets.

Unlike the shell form, the exec form does not invoke a command shell and using the exec form of commands executes the commands directly and shell processing does not take place.

If you use the shell form of the CMD, then the <COMMAND> will execute in /bin/sh -c form.

There can only be one CMD instruction in a Dockerfile.

ENTRYPOINT has two forms which are the exec form and the shell form.

If CMD is used to provide default arguments for the ENTRYPOINT instruction, both the CMD and ENTRYPOINT instructions should be specified with the JSON array format.

ENTRYPOINT allows you to configure a container that will run as an executable.

```

$ docker build -t youtube-dl .

```
Run a command in a new container, where the name of the image is the only required argument.

```

$ docker run youtube-dl <URL>

```

A link to youtube-dl website.

https://youtube-dl.org/

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/1/videos/youtube.png?raw=true)

