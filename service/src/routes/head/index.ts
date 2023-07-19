import { Router } from "express";
import { getHeadsRouter } from "./GetHeads";
import { insertHeadRouter } from "./InsertHead";

const headRoutes: Router[] = [getHeadsRouter, insertHeadRouter];

export { headRoutes };
