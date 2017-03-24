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

Docxpresgre offers currently Google OAuth strategy for authenticating users. User must define Google authentication config to `/src/app/config/passport.js`.

https://console.developers.google.com

```
module.exports = {
  google: {
    clientID: 'your_id',
    clientSecret: 'your_secret',
    callbackURL: `http://127.0.0.1:3000/auth/google/callback`,
  },
};
```
