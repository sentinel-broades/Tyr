create or replace function get_squad_byId(_squadId INTEGER)
RETURNS squad
language plpgsql
as
$$
    BEGIN

        RETURN (SELECT * FROM squad where id = _squadId);

    end;

$$