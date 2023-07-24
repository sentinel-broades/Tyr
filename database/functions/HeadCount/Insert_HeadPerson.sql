create or replace function insert_headPerson (
    _headId     INTEGER,
    _personId   INTEGER,
    _startDate  DATE,
    _endDate    DATE,
    _notes      VARCHAR default null
)
RETURNS INTEGER
language plpgsql
AS
$$
    DECLARE newId INTEGER;

    BEGIN

        INSERT INTO headperson (id, headid, personid, startdate, enddate, notes)
        VALUES (nextval('headperson_id_seq'), _headId, _personId, _startDate, _endDate, _notes)
        RETURNING id INTO newId;

        Return newId;
    END

$$

