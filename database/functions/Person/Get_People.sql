CREATE OR REPLACE FUNCTION  GET_PEOPLE()
    RETURNS setof person

    LANGUAGE plpgsql
    AS $$

    begin
    RETURN QUERY( SELECT * FROM person);
    end

    $$