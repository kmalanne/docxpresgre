[![Build Status](https://travis-ci.org/kmalanne/docxpresgre.svg?branch=master)](https://travis-ci.org/kmalanne/docxpresgre)

# docxpresgre 

Docxpresgre is a boilerplate for Docker based Express backend app using Postgres database. By running Docker containers developer can easily start up backend server and database without extra configuration and focuse on developing actual program.

## Get started

First you need to install Docker from Docker's official [website](https://www.docker.com/).

Once Docker is installed run:

* `docker-compose up` Build docker images and start Express and Postgres containers
* `npm run db_up` Run migrations and seed data to local database

Server runs at http://localhost:3000
