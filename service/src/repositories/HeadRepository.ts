import { IHead, INewHead } from "../../../common/interfaces";

const dbManager = require("../database/dbManager");

const getAll = async (squadId: number): Promise<IHead[]> => {
  const client = await dbManager.connect();
  const { rows } = await client.query("select * from get_heads($1)", [squadId]);
  await dbManager.disconnect(client);
  return rows.map((row: any) => ({
    id: row.id,
    roleId: row.roleid,
    squadId: row.squadid,
    budget: row.budget,
    startDate: row.startdate,
    endDate: row.enddate,
    roleName: row.rolename,
  }));
};

const insert = async (head: INewHead) => {
  const client = await dbManager.connect();
  const res = await client.query(
    "select * from insert_head($1, $2, $3, $4, $5, $6)",
    [
      head.roleId,
      head.squadId,
      head.budget,
      head.startDate,
      head.endDate,
      head.notes,
    ],
  );

  if (res.rows[0].insert_head === null) throw new Error("Error inserting head");

  await dbManager.disconnect(client);

  return res.rows[0].insert_head;
};

module.exports = { getAll, insert };
