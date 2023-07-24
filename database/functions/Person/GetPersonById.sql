create or replace function get_person_byId(_personId INTEGER)
RETURNS setof person
language  plpgsql
as
    $$
    BEGIN
        RETURN QUERY (SELECT * FROM person where id = _personId);
    END
$$