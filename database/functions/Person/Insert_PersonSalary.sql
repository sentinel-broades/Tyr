create or replace function Insert_PersonSalary
(
    _personId   INTEGER,
    _salary     money,
    _startDate  date,
    _endDate    date,
    _notes       varchar default null
)
returns integer
language plpgsql
    as
$$
    DECLARE newId INTEGER;

    BEGIN
        INSERT INTO personsalary(id, personid, salary, startdate, enddate, notes)
        VALUES (nextval('personsalary_id_seq'), _personId, _salary, _startDate, _endDate, _notes)
        RETURNING id into newId;

        return newId;
    END

$$