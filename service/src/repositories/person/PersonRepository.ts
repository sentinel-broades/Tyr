import { INewPerson, IPerson } from "tyr-common";

const dbManager = require("../../database/DbManager");

const getAll = async (): Promise<IPerson[]> => {
  const client = await dbManager.connect();
  const { rows } = await client.query("select * from get_people()");
  await dbManager.disconnect(client);
  return rows.map((row: any) => ({
    id: row.id,
    email: row.email,
    forename: row.forename,
    surname: row.surname,
  }));
};

const getById = async (id: number): Promise<IPerson> => {
  const client = await dbManager.connect();

  const { rows } = await client.query("select * from get_person_byId($1)", [
    id,
  ]);

  await dbManager.disconnect(client);
  return rows.map((row: any) => ({
    id: row.id,
    email: row.email,
    forename: row.forename,
    surname: row.surname,
  }))[0];
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

module.exports = { getAll, getById, insert };
