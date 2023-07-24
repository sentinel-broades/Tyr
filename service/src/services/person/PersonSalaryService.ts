import { INewPersonSalary } from "tyr-common";

const personSalaryRepo = require("../../repositories/person/PersonSalaryRepository");

const getHistory = async (personId: number) => {
  return await personSalaryRepo.getHistory(personId);
};

const insertPersonSalary = async (personSalary: INewPersonSalary) => {
  return await personSalaryRepo.insertPersonSalary(personSalary);
};

module.exports = { getHistory, insertPersonSalary };
