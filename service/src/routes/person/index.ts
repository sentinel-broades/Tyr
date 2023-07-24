import { Router } from "express";
import { getPeopleRouter } from "./GetPeople";
import { insertPersonRouter } from "./InsertPerson";
import { getPersonByIdRouter } from "./GetPersonById";
import { getPersonRoleHistoryRouter } from "./GetPersonRoleHistory";
import { insertPersonRoleRouter } from "./InsertPersonRole";
import { insertPersonSalaryRouter } from "./InsertPersonSalary";
import { getPersonSalaryHistoryRouter } from "./GetPersonSalaryHistory";

const personRoutes: Router[] = [
  getPeopleRouter,
  insertPersonRouter,
  insertPersonRoleRouter,
  insertPersonSalaryRouter,
  getPersonByIdRouter,
  getPersonRoleHistoryRouter,
  getPersonSalaryHistoryRouter,
];

export { personRoutes };
