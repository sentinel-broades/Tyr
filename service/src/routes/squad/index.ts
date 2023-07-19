import { Router } from "express";
import { getSquadsRouter } from "./GetSquads";
import { insertSquadRouter } from "./InsertSquad";
import { getSquadByIdRouter } from "./GetSquadById";

const squadRoutes: Router[] = [
  getSquadsRouter,
  insertSquadRouter,
  getSquadByIdRouter,
];

export { squadRoutes };
