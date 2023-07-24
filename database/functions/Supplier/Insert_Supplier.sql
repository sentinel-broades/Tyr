create or replace function Insert_Supplier (
 _name varchar(100),
 _description varchar default null
)
RETURNS INT
language plpgsql
AS
$$
    DECLARE newId INTEGER;

    BEGIN

        INSERT INTO supplier (id, name, description)
        VALUES (nextval('supplier_id_seq'), _name, _description)
        RETURNING id INTO newId;

        RETURN newId;

    END
$$