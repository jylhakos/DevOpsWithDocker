# Service dependencies

The docker-compose up command starts services in dependency order.

The depends_on expresses dependency between services.

In the following example service dependencies cause that db and redis are started before web.

The docker-compose stop command stops services in dependency order.

In the following example, web is stopped before db and redis.

```

version: "3.9"

services:
  web:
    build: .
    depends_on:
      - db
      - redis
  redis:
    image: redis
  db:
    image: postgres

```
## A package manager

The apk is package manager for Alpine Linux distributions.

A link to Alpine

https://alpinelinux.org/