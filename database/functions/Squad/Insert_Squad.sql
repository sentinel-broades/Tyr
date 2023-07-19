CREATE OR REPLACE FUNCTION INSERT_SQUAD
(
    _name           VARCHAR(100),
    _description    VARCHAR default null
)
    RETURNS INT
LANGUAGE plpgsql
AS $$
 DECLARE newId INTEGER;
    begin

        insert into squad(id, name, description)
        values (nextval('squad_id_seq'), _name, _description)
        returning id INTO newId;

        RETURN (SELECT newId);

    end;

$$