---
title: Docker
date: 2019-09-21
author: Sol
sidebar: auto
project: false
hide: false
---

## Links

* [tutorial](https://docs.docker.com/get-started/)
* [dockerize Postgres](https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198)
```shell
docker run --rm   --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres
```
We have provided several options to the docker run command:

* `rm`: Automatically remove the container and it’s associated file system upon exit. In general, if we are running lots of short term containers, it is good practice to to pass rm flag to the docker run command for automatic cleanup and avoid disk space issues. We can always use the v option (described below) to persist data beyond the lifecycle of a container
* `name`: An identifying name for the container. We can choose any name we want. Note that two existing (even if they are stopped) containers cannot have the same name. In order to re-use a name, you would either need pass the rm flag to the docker run command or explicitly remove the container by using the command docker rm [container name].
* `-e`: Expose environment variable of name POSTGRES_PASSWORD with value docker to the container. This environment variable sets the superuser password for PostgreSQL. We can set POSTGRES_PASSWORD to anything we like. I just choose it to be docker for demonstration. There are additional environment variables you can set. These include POSTGRES_USER and POSTGRES_DB. POSTGRES_USER sets the superuser name. If not provided, the superuser name defaults to postgres. POSTGRES_DB sets the name of the default database to setup. If not provided, it defaults to the value of POSTGRES_USER.
* `-d`: Launches the container in detached mode or in other words, in the background.
* `-p`: Bind port 5432 on localhost to port 5432 within the container. This option enables applications running out side of the container to be able to connect to the Postgres server running inside the container.
* `-v`: Mount $HOME/docker/volumes/postgres on the host machine to the container side volume path /var/lib/postgresql/data created inside the container. This ensures that postgres data persists even after the container is removed.

## CheatSheet

### List Docker CLI commands
* `docker`
* `docker container --help`

### Display Docker version and info
* `docker --version`
* `docker version`
* `docker info`

### Execute Docker image
* `docker run hello-world`

### List Docker images
* `docker image ls`

### List Docker containers (running, all, all in quiet mode)
* `docker container ls`
* `docker container ls --all`
* `docker container ls -aq`

### Flow

* `docker build -t friendlyhello .`: Create image using this directory's Dockerfile
* `docker run -p 4000:80 friendlyhello`: Run "friendlyhello" mapping port 4000 to 80
* `docker run -d -p 4000:80 friendlyhello`: Same thing, but in detached mode
* `docker container ls`: List all running containers
* `docker container ls -a`: List all containers, even those not running
* `docker container stop ~hash~`: Gracefully stop the specified container
* `docker container kill ~hash~`: Force shutdown of the specified container
* `docker container rm ~hash~`: Remove specified container from this machine
* `docker container rm $(docker container ls -a -q)`: Remove all containers
* `docker image ls -a`: List all images on this machine
* `docker image rm ~image id~`: Remove specified image from this machine
* `docker image rm $(docker image ls -a -q)`: Remove all images from this machine
* `docker login`: Log in this CLI session using your Docker credentials
* `docker tag ~image~ username/repository:tag`: Tag ~image~ for upload to registry
* `docker push username/repository:tag`: Upload tagged image to registry
* `docker run username/repository:tag`: Run image from a registry

### Services

* `docker stack ls`: List stacks or apps
* `docker stack deploy -c ~composefile~ ~appname~`: Run the specified Compose file
* `docker service ls`: List running services associated with an app
* `docker service ps ~service~`: List tasks associated with an app
* `docker inspect ~task or container~`: Inspect task or container
* `docker container ls -q`: List container IDs
* `docker stack rm ~appname~`: Tear down an application
* `docker swarm leave --force`: Take down a single node swarm from the manager


## En vrac

* Docker app hierarchy: container < <Def def="How containers behave in production">service</Def>  < <Def def="Defining the interactions of all the services">stack</Def> 


## Services
In a distributed application, different pieces of the app are called “services”. For example, if you imagine a video sharing site, it probably includes a service for storing application data in a database, a service for video transcoding in the background after a user uploads something, a service for the front-end, and so on.

Services are really just “containers in production.” A service only runs one image, but it codifies the way that image runs—what ports it should use, how many replicas of the container should run so the service has the capacity it needs, and so on. Scaling a service changes the number of container instances running that piece of software, assigning more computing resources to the service in the process.

Luckily it’s very easy to define, run, and scale services with the Docker platform -- just write a docker-compose.yml file.

<Container type="info">

A docker-compose.yml file is a YAML file that defines how Docker containers should behave in production.

</Container>