CREATE OR REPLACE FUNCTION INSERT_ROLE
(
    _name varchar(100),
    _disciplineId integer,
    _description varchar default null
)
RETURNS INT
LANGUAGE plpgsql
AS $$

    DECLARE newId INTEGER;

    BEGIN

        insert into role (id, disciplineid, name, description)
        values (nextval('role_id_seq'), _disciplineId, _name, _description)
        returning id INTO newId;

        RETURN newId;

    END
    $$