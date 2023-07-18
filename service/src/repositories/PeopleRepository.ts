import { INewPerson } from "../../../common/interfaces";

const dbManager = require("../database/dbManager");

const getAll = async () => {
  const client = await dbManager.connect();
  const { rows } = await client.query("select * from get_people()");
  await dbManager.disconnect(client);
  return rows;
};

const insert = async (person: INewPerson): Promise<number> => {
  const client = await dbManager.connect();
  const res = await client.query(
    "select * from insert_person($1, $2, $3, $4)",
    [person.email, person.forename, person.surname, person.roleId],
  );

  if (res.rows[0].insert_person === null)
    throw new Error("Error inserting person");

  await dbManager.disconnect(client);

  return res.rows[0].insert_person;
};

module.exports = { getAll, insert };
