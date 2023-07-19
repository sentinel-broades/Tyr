CREATE table Supplier (
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL UNIQUE,
    description varchar NULL
);