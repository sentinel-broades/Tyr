import { INewPerson } from "../../../common/interfaces";

const peopleRepo = require("../repositories/PeopleRepository");

const getAll = async () => {
  return await peopleRepo.getAll();
};

const insert = async (person: INewPerson) => {
  return await peopleRepo.insert(person);
};

module.exports = { getAll, insert };
