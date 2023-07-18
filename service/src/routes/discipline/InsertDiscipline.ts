import express, { Request, Response } from "express";

const disciplineService = require("../../services/DisciplineService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.post("/api/discipline", async (req: Request, res: Response) => {
  try {
    const disciplineId = await disciplineService.insert(req.body);
    return res.status(200).send({ disciplineId });
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as insertDisciplineRouter };
