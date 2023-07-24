import { INewPerson } from "tyr-common";

const personRepo = require("../../repositories/person/PersonRepository");

const getAll = async () => {
  return await personRepo.getAll();
};

const getById = async (id: number) => {
  return await personRepo.getById(id);
};

const insert = async (person: INewPerson) => {
  return await personRepo.insert(person);
};

module.exports = { getAll, getById, insert };
