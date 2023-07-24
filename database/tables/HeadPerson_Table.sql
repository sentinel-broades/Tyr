CREATE TABLE headPerson (
    id          SERIAL PRIMARY KEY,
    headId      INTEGER REFERENCES head(id),
    personId    INTEGER REFERENCES person(id),
    startDate   DATE,
    endDate     DATE,
    notes       VARCHAR
);