create or replace function Get_Skills()
returns setof skill
language plpgsql
AS
$$

    BEGIN
        RETURN QUERY (SELECT * from skill);
    end;

$$