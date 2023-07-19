CREATE TABLE squad (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(200) UNIQUE,
    description VARCHAR
);