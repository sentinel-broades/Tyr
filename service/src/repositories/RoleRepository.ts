import { INewRole } from "../../../common/interfaces";

const dbManage = require("../database/dbManager");

const getAll = async () => {
  const client = await dbManage.connect();
  const { rows } = await client.query("select * from get_roles()");
  await dbManage.disconnect(client);
  return rows;
};

const insert = async (role: INewRole) => {
  const client = await dbManage.connect();
  const res = await client.query("select * from insert_role($1, $2, $3)", [
    role.name,
    role.disciplineId,
    role.description,
  ]);

  if (res.rows[0].insert_role === null) throw new Error("Error inserting role");

  await dbManage.disconnect(client);

  return res.rows[0].insert_role;
};

module.exports = { getAll, insert };
