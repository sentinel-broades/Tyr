CREATE OR REPLACE FUNCTION GET_DISCIPLINES()
    RETURNS setof discipline

    LANGUAGE plpgsql
    AS $$
    BEGIN
        RETURN QUERY (select * from discipline);
    END
    $$