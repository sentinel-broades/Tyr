import { INewSquad } from "../../../common/interfaces";

const squadRepo = require("../repositories/SquadRepository");

const getAll = async () => {
  return await squadRepo.getAll();
};

const getById = async (id: number) => {
  return await squadRepo.getById(id);
};

const insert = async (squad: INewSquad) => {
  return await squadRepo.insert(squad);
};

module.exports = { getAll, getById, insert };
