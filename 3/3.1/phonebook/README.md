# Deploying app to Heroku

Add Procfile to the backend project's root to inform Heroku how to start the application.

Heroku configures application port based on the environment variable.

You need to run git push heroku HEAD:master command if the code is not yet on the main branch in a git repository.

A link to serving static files in Express to load the files that are in the public directory.

http://expressjs.com/en/starter/static-files.html

MongoDB Atlas provides a way to host your data in the cloud.

Connect the application to MongoDB Atlas cluster using the Node.js driver.

```

const { MongoClient } = require("mongodb");
                                                     
const url = "mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

const client = new MongoClient(url);

async function run() {
    try {

        await client.connect();

        console.log("Connected correctly to server");

    } catch (err) {

        console.log(err.stack);
    }
    finally {

        await client.close();
    }
}

run().catch(console.dir);

```
A link to get started with Atlas.

https://docs.atlas.mongodb.com/


## Pipeline

A link to build, push and release a Docker container to Heroku.

https://github.com/marketplace/actions/build-push-and-release-a-docker-container-to-heroku

### Front-end

```

$ cd frontend

$ rm -rf build && rm -rf node_modules && rm package-lock.json

$ npm install

$ npm run build

$ rm -rf ../backend/build && cp -r build ../backend

```
### Back-end

```

$ cd backend

$ npm install

$ npm run start <PASSWORD> -p 3001

$ CTRL-C-X

$ cd ..

$ docker volume prune

$ docker-compose down

$ docker-compose build

$ docker-compose up

```
The top tier of the stack is React.js, the next level down is the Express.js server-side framework, running inside a Node.js server.

By making HTTP requests from your React.js frontend, you can connect to Express.js functions.

JSON documents can be sent to the Express.js server, where they can be processed and stored in MongoDB.

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.1/phonebook.jpeg?raw=true)

React implements the presentation layer, Express and Node builds up the application layer, and MongoDB creates the database layer.

### Docker Networking

Containers on a network can reach and discover every other container on the network.

You can list all Docker networks by docker network command.

```

$ docker network ls

```
By default, a Docker container uses the DNS settings of the host in the /etc/resolv.conf configuration file.

Discover the address of network’s DNS server by nmcli command.

```

$ nmcli dev show | grep 'IP4.DNS'

```
Inspecting the network is a way to find out the container’s IP address.

```

$ docker network inspect bridge

```
A link to Docker networking.

https://docs.docker.com/engine/tutorials/networkingcontainers/

### GitHub Actions

Execute your software development workflows in your GitHub repository with GitHub Actions. 

A link to GitHub Actions

https://docs.github.com/en/actions


![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.1/3.1.png?raw=true)