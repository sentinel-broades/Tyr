Create Table hardwareItem (
    id SERIAL PRIMARY KEY,
    typeId INTEGER REFERENCES hardwaretype(id),
    supplierId INTEGER REFERENCES supplier(id),
    name VARCHAR(100) NOT NULL UNIQUE,
    description varchar NULL,
    cost money,
    serial VARCHAR(100)

)