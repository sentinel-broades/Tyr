import { INewRole } from "../../../common/interfaces";

const roleRepo = require("../repositories/RoleRepository");

const getAll = async () => {
  return await roleRepo.getAll();
};

const insert = async (role: INewRole) => {
  return await roleRepo.insert(role);
};

module.exports = { getAll, insert };
