CREATE TABLE License
(
    id          SERIAL PRIMARY KEY,
    SoftwareId  INTEGER references software (id),
    name        varchar(100) UNIQUE NOT NULL,
    description varchar             null,
    cost        money,
    cadence     INTEGER
);
