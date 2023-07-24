create or replace function Insert_Skill (
    _name varchar(100),
    _notes varchar default  null
)
RETURNS INTEGER
language plpgsql
AS
$$
    DECLARE newId INTEGER;

    BEGIN
        INSERT INTO Skill (id, name, notes)
        VALUES (nextval('skill_id_seq'), _name, _notes)
        RETURNING id INTO newId;

        RETURN  newId;
    END


$$