import { Router } from "express";
import { getPeopleRouter } from "./GetPeople";
import { insertPersonRouter } from "./InsertPerson";

const personRoutes: Router[] = [getPeopleRouter, insertPersonRouter];

export { personRoutes };
