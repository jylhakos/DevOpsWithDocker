# Docker for React development

Define proxy entry for the client in package.json instead to connect the server.

package.json

{
 "name": "notes",

  "proxy": "http://localhost:8000"
}

CHOKIDAR_USEPOLLING enables a polling mechanism via chokidar library that hot reloads changes to the browser from the client.

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/2/2.11/client-dev/2.11.png?raw=true)