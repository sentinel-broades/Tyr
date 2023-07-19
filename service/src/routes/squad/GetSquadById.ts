import express, { Request, Response } from "express";

const squadService = require("../../services/SquadService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.get("/squad/:squadId", async (req: Request, res: Response) => {
  try {
    const { squadId } = req.params;
    const squad = await squadService.getById(parseInt(squadId));
    return res.status(200).send(squad);
  } catch (err) {
    errorService.handleError(res, err);
  }
});

export { router as getSquadByIdRouter };
