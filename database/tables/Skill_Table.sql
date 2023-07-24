create table Skill (
    id              SERIAL PRIMARY KEY,
    name            varchar(100)    unique,
    notes           varchar
);