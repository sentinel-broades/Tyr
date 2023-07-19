Create table Software(
    id SERIAL PRIMARY KEY,
    supplierId INTEGER REFERENCES supplier(id),
    name varchar(100) NOT NULL UNIQUE,
    description varchar NULL
);