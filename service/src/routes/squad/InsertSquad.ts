import express, { Request, Response } from "express";

const squadService = require("../../services/SquadService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.post("/api/squad", async (req: Request, res: Response) => {
  try {
    const squad = await squadService.insert(req.body);
    return res.status(201).send({ squad });
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as insertSquadRouter };
