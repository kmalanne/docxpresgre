CREATE TABLE test (
    id          SERIAL PRIMARY KEY,
    column_1    VARCHAR(50),
    created_on  TIMESTAMP NOT NULL DEFAULT current_timestamp
);