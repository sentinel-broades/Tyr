import { Router } from "express";
import { getDisciplinesRouter } from "./GetDisciplines";
import { insertDisciplineRouter } from "./InsertDiscipline";

const disciplineRoutes: Router[] = [
  getDisciplinesRouter,
  insertDisciplineRouter,
];

export { disciplineRoutes };
