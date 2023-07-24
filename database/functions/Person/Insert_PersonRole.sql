create or replace function Insert_PersonRole
(
    _personId INTEGER,
    _roleId INTEGER,
    _startDate DATE,
    _endDate DATE,
    _notes varchar default null
)
RETURNS INTEGER
language plpgsql
AS
$$

    DECLARE newId INTEGER;

    BEGIN

        UPDATE personrole set enddate = _startDate where personid = _personId and enddate is null;

        INSERT INTO personrole (id, personid, roleid, startdate, enddate, notes)
	    VALUES (nextval('personrole_id_seq'), _personId, _roleid, _startdate, _endDate, _notes)
        RETURNING id INTO newId;

        Return newId;
    END

$$