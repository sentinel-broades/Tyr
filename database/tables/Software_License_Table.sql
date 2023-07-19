create table SoftwareLicense (
    id  SERIAL PRIMARY KEY,
    softwareId  INTEGER references software(id),
    name varchar(100) NOT NULL UNIQUE,
    description varchar null
);