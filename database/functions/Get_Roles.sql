CREATE OR REPLACE  FUNCTION  GET_ROLES()
    RETURNS setof role

    LANGUAGE plpgsql
    AS $$

    BEGIN
        RETURN QUERY (Select * from role);
    END

    $$