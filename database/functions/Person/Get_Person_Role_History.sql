create or replace function get_person_role_history(_personId INTEGER)
RETURNS TABLE (id INTEGER, startDate DATE, endDate DATE, roleName varchar)
language plpgsql
AS
    $$

        BEGIN

            RETURN QUERY (
                select
                    p.id,
                    p.startdate,
                    p.enddate,
                    r.name as roleName
                from
                    personrole p inner join
                    role r on p.roleid = r.id
                where
                    personid = _personId
            );

        end;
    $$