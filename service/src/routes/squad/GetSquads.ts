import express, { Request, Response } from "express";

const squadService = require("../../services/squad/SquadService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.get("/api/squads", async (req: Request, res: Response) => {
  try {
    const squads = await squadService.getAll();
    return res.status(200).send(squads);
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as getSquadsRouter };
