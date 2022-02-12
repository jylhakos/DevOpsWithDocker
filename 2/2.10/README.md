# NGINX

Configure NGINX as a reverse proxy for HTTP protocol to pass a request to an HTTP proxied server, where the proxy_pass directive is specified inside a location.

The nginx.conf file has the configuration to pass all requests processed in /api, /ping and /api/ping location to the proxied server at the specified backend address. 

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.10/2.10.png?raw=true)
