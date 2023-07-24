import { INewPersonRole } from "tyr-common";

const personRoleRepo = require("../../repositories/person/PersonRoleRepository");

const getHistory = async (personId: number) => {
  return await personRoleRepo.getHistory(personId);
};

const insertPersonRole = async (personRole: INewPersonRole) => {
  return await personRoleRepo.insertPersonRole(personRole);
};

module.exports = { getHistory, insertPersonRole };
