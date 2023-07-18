CREATE TABLE personRole (
    id          SERIAL PRIMARY KEY,
    personId    INTEGER NOT NULL REFERENCES person(id),
    roleId      INTEGER NOT NULL REFERENCES role(id),
    startDate   DATE NOT NULL,
    endDate     DATE NULL,
    Notes       VARCHAR NULL
);