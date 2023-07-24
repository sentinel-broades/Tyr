import express, { Request, Response } from "express";

const personSalaryService = require("../../services/person/PersonSalaryService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.post("/api/person/salary", async (req: Request, res: Response) => {
  try {
    const personSalaryId = await personSalaryService.insertPersonSalary(
      req.body,
    );
    return res.status(201).send({ personSalaryId });
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as insertPersonSalaryRouter };
