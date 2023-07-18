CREATE OR REPLACE FUNCTION  GET_PEOPLE()
    RETURNS setof person

    LANGUAGE plpgsql
    AS $$

    begin
    SELECT * FROM person;
    end

    $$