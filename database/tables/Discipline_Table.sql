CREATE TABLE discipline (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(100) NOT NULL UNIQUE ,
    description     VARCHAR NULL
);