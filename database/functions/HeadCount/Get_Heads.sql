Create or replace function Get_Heads(_squadId INTEGER)
RETURNS  setof head
language  plpgsql
AS

$$

BEGIN
    RETURN QUERY (
        select
            h.*,
            r.name as roleName
        from
            head h inner join
            role r on r.id = h.roleid
        where squadid = _squadId
   );
end;

$$
