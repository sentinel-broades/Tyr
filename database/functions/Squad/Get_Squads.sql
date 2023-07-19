CREATE OR REPLACE FUNCTION GET_SQUADS()
    RETURNS setof squad

LANGUAGE plpgsql
AS $$BEGIN

    RETURN QUERY(select * from squad order by name);

    end;$$
