FROM ubuntu:20.04

RUN apt-get update && apt-get install -y curl

WORKDIR /usr/src/app

#COPY script.sh .

COPY script.txt .

#RUN chmod +x script.sh

#CMD ./script.sh

ENTRYPOINT ["./script.txt"]