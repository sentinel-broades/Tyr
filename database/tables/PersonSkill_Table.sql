CREATE TABLE PersonSkill (
    id              SERIAL PRIMARY KEY,
    PersonId        INTEGER REFERENCES person(id),
    skill           INTEGER REFERENCES skill(id),
    competency      INTEGER,
    Date            DATE,
    notes           VARCHAR
)