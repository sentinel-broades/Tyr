import { INewDiscipline } from "tyr-common";

const disciplineRepo = require("../repositories/DisciplineRepository");

const getAll = async () => {
  return await disciplineRepo.getAll();
};

const insert = async (discipline: INewDiscipline) => {
  return await disciplineRepo.insert(discipline);
};

module.exports = { getAll, insert };
