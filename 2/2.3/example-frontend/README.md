# example-frontend

## Prerequisites

Install [node](https://nodejs.org/en/download/). 

Example node install instructions for LTS node 16.x:
```
curl -sL https://deb.nodesource.com/setup_16.x | bash
sudo apt install -y nodejs
```

Check your install with `node -v && npm -v`

Install all packages with `npm install`

## Starting in production mode

### Exercise 1.12 -> to run the project

First you need to build the static files with `npm run build`

This will generate them into `build` folder.

An example for serving static files:

Use npm package called serve to serve the project in port 5000:
- install: `npm install -g serve`
- serve: `serve -s -l 5000 build`

Test that the project is running by going to <http://localhost:5000>

### Exercise 1.14 -> to connect to backend

By default the expected path to backend is /api. This is where the application will send requests. 
To manually configure api path run with `REACT_APP_BACKEND_URL` environment value set, for example `REACT_APP_BACKEND_URL=http://example.com npm run build`
