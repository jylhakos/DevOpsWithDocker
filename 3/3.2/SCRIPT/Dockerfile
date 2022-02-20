# $ docker build -t <CONTAINER> .
# $ docker run <CONTAINER>
# $ docker exec -ti <CONTAINER> bash
# $ docker run -v /var/run/docker.sock:/var/run/docker.sock script

FROM ubuntu:18.04

WORKDIR /usr/tmp

RUN apt-get -y update && apt-get install -y curl && apt-get -y install git && curl -sSL https://get.docker.com/ | sh

COPY . . 

RUN ls -l 

RUN chmod +x ./script.sh 

ENTRYPOINT ["/bin/sh", "-c", "/usr/tmp/script.sh"]
