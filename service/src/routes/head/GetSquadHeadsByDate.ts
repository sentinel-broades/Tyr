import express, { Request, Response } from "express";

const squadPersonService = require("../../services/squad/SquadPersonService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.get("/api/head/person/:squadId", async (req: Request, res: Response) => {
  try {
    const squadId = parseInt(req.params.squadId);
    const squadHeads = await squadPersonService.getByDate(squadId);
    res.json(squadHeads);
  } catch (err) {
    errorService.handleError(res, err);
  }
});

export { router as getSquadHeadsByDateRouter };
