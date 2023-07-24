create table PersonSalary (
    id              SERIAL PRIMARY KEY,
    personId        INTEGER REFERENCES person(id),
    salary          MONEY,
    startDate       DATE,
    endDate         DATE,
    notes           VARCHAR
);