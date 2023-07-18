import express, { Request, Response } from "express";

const disciplineService = require("../../services/DisciplineService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.get("/api/disciplines", async (req: Request, res: Response) => {
  try {
    const disciplines = await disciplineService.getAll();
    return res.status(200).send(disciplines);
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as getDisciplinesRouter };
