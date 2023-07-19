create or replace function INSERT_HEAD
(
    _roleId integer,
    _squadId integer,
    _budget money,
    _startDate date,
    _endDate date default  null,
    _notes varchar default null
)
returns int
language plpgsql
as $$

    DECLARE newId INTEGER;

    BEGIN
        insert into head(id, roleid,squadid, budget, startdate, enddate, notes)
        values (nextval('head_id_seq'), _roleId, _squadId, _budget, _startDate, _endDate, _notes)
        returning id into newid;

        return newId;
    end;

$$