import { INewSquad } from "tyr-common";

const squadRepo = require("../../repositories/squad/SquadRepository");

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
