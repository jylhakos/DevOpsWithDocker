# 2.1

```

$ touch logs.txt

$ docker-compose build

$ docker-compose up

$ docker-compose down

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.1.png?raw=true)

# 2.2

```
$ docker-compose down

$ docker-compose up

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.2.png?raw=true)

# 2.3

```
$ docker-compose build

$ docker-compose up

$ curl  http://localhost:8000/ping

```

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.3.png?raw=true)

# 2.4

```

$ curl http://localhost:8000/ping?redis=true

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.4.png?raw=true)

# 2.5

```

$ docker-compose up -d --scale compute=2

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.5.png?raw=true)

# 2.6

### Postgres

PostgreSQL is an object-relational database management system.

```

$ sudo systemctl stop postgresql

$ sudo systemctl status postgresql

$ sudo lsof -ti:5432

$ docker-compose up

```
![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.6.png?raw=true)

# 2.7

### machine-learning

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.7.png?raw=true)

# 2.8

### NGINX

A link to deploying NGINX on Docker

https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-docker/

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.8.png?raw=true)

# 2.9

### PostgreSQL

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.9.png?raw=true)

# 2.10

### Reverse Proxy

This nginx.conf file configuration results in passing all requests processed in /api, /ping and /api/ping location to the proxied server at the specified backend address. 

A link to configure NGINX as a reverse proxy for HTTP protocols.

https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.10.png?raw=true)
