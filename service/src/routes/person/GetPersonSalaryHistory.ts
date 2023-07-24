import express, { Request, Response } from "express";

const personSalaryService = require("../../services/person/PersonSalaryService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.get(
  "/api/person/salary/history/:id",
  async (req: Request, res: Response) => {
    try {
      const personSalaryHistory = await personSalaryService.getHistory(
        parseInt(req.params.id),
      );
      res.status(200).send(personSalaryHistory);
    } catch (err) {
      errorService.handleError(res, err);
    }
  },
);

export { router as getPersonSalaryHistoryRouter };
