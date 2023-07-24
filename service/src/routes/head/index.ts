import { Router } from "express";
import { getHeadsRouter } from "./GetHeads";
import { insertHeadRouter } from "./InsertHead";
import { getSquadHeadsByDateRouter } from "./GetSquadHeadsByDate";
import { insertHeadPersonRouter } from "./InsertHeadPerson";

const headRoutes: Router[] = [
  getHeadsRouter,
  getSquadHeadsByDateRouter,
  insertHeadRouter,
  insertHeadPersonRouter,
];

export { headRoutes };
