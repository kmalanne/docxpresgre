[![Build Status](https://travis-ci.org/kmalanne/docxpresgre.svg?branch=master)](https://travis-ci.org/kmalanne/docxpresgre)

# docxpresgre

Docxpresgre is a boilerplate for Docker based Express backend app using Postgres database. By running Docker containers developer can easily start up backend server and database without extra configuration and focus on developing the actual backend.

## Get started

First you need to install Docker from Docker's official [website](https://www.docker.com/).

Once Docker is installed run:

* `docker-compose up` Build docker images and start Express and Postgres containers

Server runs at http://localhost:3000

In order to persist data, `docker-compose.yml` volumes needs to be uncommented (not for development/testing)

## Authentication

API uses JWT authentication with help of Auth0. To make authentication work create `.env` file with following values:

```
AUTH0_CLIENT_ID=your_id
AUTH0_CLIENT_SECRET=your_secret
```

Client using API should use Auth0 lock for client side authentication.

## Acknowledgements
This project is a grateful recipient of the [Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities).
