CREATE DATABASE 'db';

CREATE USER 'dino' WITH PASSWORD 'tontsa';

GRANT ALL PRIVILEGES ON DATABASE "db" TO "dino";

CREATE TABLE test (
    id          SERIAL PRIMARY KEY,
    column_1    VARCHAR(50),
    created_on  TIMESTAMP NOT NULL DEFAULT current_timestamp
);