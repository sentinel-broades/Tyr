import { INewPersonSalary, IPersonSalaryHistory } from "tyr-common";

const dbManager = require("../../database/DbManager");

const getHistory = async (
  personId: number,
): Promise<IPersonSalaryHistory[]> => {
  const client = await dbManager.connect();
  const { rows } = await client.query(
    "select * from get_person_salary_history($1)",
    [personId],
  );

  await dbManager.disconnect(client);
  return rows.map((row: any) => ({
    id: row.id,
    startDate: row.startdate,
    endDate: row.enddate,
    salary: row.salary,
  }));
};

const insertPersonSalary = async (personSalary: INewPersonSalary) => {
  const client = await dbManager.connect();
  const res = await client.query(
    "select * from insert_personSalary($1, $2, $3, $4, $5)",
    [
      personSalary.personId,
      personSalary.salary,
      personSalary.startDate,
      personSalary.endDate,
      personSalary.notes,
    ],
  );

  if (res.rows[0].insert_person_salary === null)
    throw new Error("Error inserting person salary");

  await dbManager.disconnect(client);

  return res.rows[0].insert_person_salary;
};

module.exports = { getHistory, insertPersonSalary };
