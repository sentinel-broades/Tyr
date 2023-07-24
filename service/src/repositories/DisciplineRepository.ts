import { INewDiscipline } from "tyr-common";

const dbManager = require("../database/dbManager");

const getAll = async () => {
  const client = await dbManager.connect();
  const { rows } = await client.query("select * from get_disciplines()");
  await dbManager.disconnect(client);
  return rows;
};

const insert = async (discipline: INewDiscipline): Promise<number> => {
  const client = await dbManager.connect();
  const res = await client.query("select * from insert_discipline($1, $2)", [
    discipline.name,
    discipline.description,
  ]);

  if (res.rows[0].insert_discipline === null)
    throw new Error("Error inserting discipline");

  await dbManager.disconnect(client);

  return res.rows[0].insert_discipline;
};

module.exports = { getAll, insert };
