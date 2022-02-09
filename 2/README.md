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

$ curl  http://localhost:8000/ping?redis=true

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

$ sudo systemctl stop postgresql

$ sudo lsof -ti:5432

$ docker-compose up

```

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.6.png?raw=true)
