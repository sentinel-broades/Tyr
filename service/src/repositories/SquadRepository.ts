import { INewSquad } from "../../../common/interfaces";

const dbManager = require("../database/dbManager");

const getAll = async () => {
  const client = await dbManager.connect();
  const { rows } = await client.query("select * from get_squads()");
  await dbManager.disconnect(client);
  return rows;
};

const getById = async (id: number) => {
  const client = await dbManager.connect();
  const { rows } = await client.query("select * from get_squad_byId($1)", [id]);
  await dbManager.disconnect(client);

  if (rows.count !== 0) throw new Error("Squad not found");

  return rows[0];
};

const insert = async (squad: INewSquad) => {
  const client = await dbManager.connect();
  const res = await client.query("select * from insert_squad($1, $2)", [
    squad.name,
    squad.description,
  ]);

  if (res.rows[0].insert_squad === null)
    throw new Error("Error inserting squad");

  await dbManager.disconnect(client);

  return res.rows[0].insert_squad;
};

module.exports = { getAll, getById, insert };