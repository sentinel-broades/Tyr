import { INewHead } from "tyr-common";

const headRepo = require("../repositories/HeadRepository");

const getAll = async (squadId: number) => {
  return await headRepo.getAll(squadId);
};

const insert = async (head: INewHead) => {
  return await headRepo.insert(head);
};

module.exports = { getAll, insert };
