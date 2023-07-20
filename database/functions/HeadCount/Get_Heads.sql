Create or replace function Get_Heads(_squadId INTEGER)
RETURNS  TABLE (id INTEGER, roleId INTEGER, squadId INTEGER, budget MONEY, startDate DATE, endDate DATE,  roleName varchar )
language  plpgsql
AS

$$

BEGIN
    RETURN QUERY (
        select
            h.id,
            h.roleid,
            _squadId,
            h.budget,
            h.startdate,
            h.enddate,
            r.name as "roleName"
        from
            head h inner join
            role r on r.id = h.roleid
        where h.squadid = _squadId
   );
end;

$$
