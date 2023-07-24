import { IHeadPerson, INewHeadPerson } from "tyr-common";

const dbManager = require("../../database/DbManager");

const getByDate = async (squadId: number): Promise<IHeadPerson[]> => {
  const client = await dbManager.connect();
  const { rows } = await client.query(
    "select * from get_squadHeads_ByDate($1)",
    [squadId],
  );
  await dbManager.disconnect(client);
  return rows.map((row: any) => ({
    headId: row.headid,
    squadId: row.squadid,
    roleName: row.rolename,
    personName: row.forename ? `${row.forename} ${row.surname}` : "Vacant",
    hpStartDate: row.hpstartdate,
    hpEndDate: row.hpenddate,
    headStartDate: row.headstartdate,
    headEndDate: row.headenddate,
    budget: row.budget,
    salary: row.salary ? row.salary : 0,
  }));
};

const insert = async (headPerson: INewHeadPerson) => {
  const client = await dbManager.connect();
  const res = await client.query(
    "select * from insert_headPerson($1, $2, $3, $4, $5)",
    [
      headPerson.headId,
      headPerson.personId,
      headPerson.startDate,
      headPerson.endDate,
      headPerson.notes,
    ],
  );
};

module.exports = { getByDate, insert };
