Create Table head (
    id          SERIAL PRIMARY KEY,
    roleId      INTEGER REFERENCES role(id),
    squadId     INTEGER REFERENCES squad(id),
    budget      MONEY,
    startDate   DATE,
    endDate     DATE,
    notes       VARCHAR
);