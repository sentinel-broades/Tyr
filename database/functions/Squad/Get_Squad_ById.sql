create or replace function get_squad_byId(_squadId INTEGER)
RETURNS setof squad
language plpgsql
as
$$
    BEGIN

        RETURN QUERY (SELECT * FROM squad where id = _squadId);

    end;

$$