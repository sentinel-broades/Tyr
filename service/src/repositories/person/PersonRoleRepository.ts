import { INewPersonRole, IPersonRoleHistory } from "tyr-common";

const dbManager = require("../../database/DbManager");

const getHistory = async (personId: number): Promise<IPersonRoleHistory[]> => {
  const client = await dbManager.connect();
  const { rows } = await client.query(
    "select * from get_person_role_history($1)",
    [personId],
  );
  await dbManager.disconnect(client);
  return rows.map((row: any) => ({
    id: row.id,
    startDate: row.startdate,
    endDate: row.enddate,
    roleName: row.rolename,
  }));
};

const insertPersonRole = async (personRole: INewPersonRole) => {
  const client = await dbManager.connect();
  const res = await client.query(
    "select * from insert_personRole($1, $2, $3, $4, $5)",
    [
      personRole.personId,
      personRole.roleId,
      personRole.startDate,
      personRole.endDate,
      personRole.notes,
    ],
  );

  if (res.rows[0].insert_person_role === null)
    throw new Error("Error inserting person role");

  await dbManager.disconnect(client);

  return res.rows[0].insert_person_role;
};

module.exports = { getHistory, insertPersonRole };
