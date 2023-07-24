create or replace function Get_Suppliers()
Returns SETOF supplier
language plpgsql
AS
$$
    BEGIN
        RETURN QUERY (SELECT * from supplier);
    end;
$$
