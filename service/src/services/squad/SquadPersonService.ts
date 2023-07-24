import { INewHeadPerson } from "tyr-common";

const squadPersonRepo = require("../../repositories/squad/SquadPersonRepository");

const getByDate = async (squadId: number) => {
  return await squadPersonRepo.getByDate(squadId);
};

const insert = async (headPerson: INewHeadPerson) => {
  return await squadPersonRepo.insert(headPerson);
};

module.exports = { getByDate, insert };
