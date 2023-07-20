CREATE OR REPLACE FUNCTION INSERT_PERSON
(
    _email      VARCHAR(250),
	_forename 	VARCHAR(100),
	_surname	VARCHAR(100),
	_roleId     INTEGER
)
    RETURNS INT
LANGUAGE plpgsql
AS $$

    DECLARE newId INTEGER;

    BEGIN
	    INSERT INTO person (id, email, forename, surname)
	    VALUES(nextval('person_id_seq'), _email, _forename, _surname)
        RETURNING id INTO newId;

        INSERT INTO personrole (id, personid, roleid, startdate)
	    VALUES (nextval('personrole_id_seq'), newId, _roleid, CURRENT_DATE);

	    Return newId;

    END

$$