create or replace function get_squadHeads_ByDate (_squadId INTEGER)
returns table
(
    headId INTEGER,
    squadId INTEGER,
    roleName varchar,
    forename varchar,
    surname varchar,
    hpStartDate date,
    hpEndDate Date,
    headStartDate Date,
    headEndDate Date,
    budget money,
    salary money
)
language plpgsql
AS
$$

    BEGIN

        -- Note need to fix the salary join. Currently will only work for a singular salary

        RETURN QUERY
        (
            SELECT
                 h.id as headId,
                 h.squadid,
                 r.name as roleName,
                 p.forename,
                 p.surname,
                 hp.startdate as hpStartDate,
                 hp.enddate as hpEndDate,
                 h.startdate as headStartDate,
                 h.enddate as headEndDate,
                 h.budget,
                 ps.salary
             FROM
                 head h inner join
                 role r on h.roleid = r.id left join
                 headperson hp on h.id = hp.headid left join
                 person p on hp.personid = p.id left join
                 personsalary ps on p.id = ps.personid
            WHERE
                 h.squadid = _squadId and
                (hp.startdate is null or hp.startdate <= current_date) and
                (hp.enddate is null or hp.enddate >= current_date)

        );
    END;

$$

