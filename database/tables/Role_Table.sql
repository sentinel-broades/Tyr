CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    disciplineId  INTEGER REFERENCES discipline (id),
    name VARCHAR(100) NOT NULL UNIQUE,
    description VARCHAR NULL
);