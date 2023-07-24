import express, { Request, Response } from "express";

const peopleService = require("../../services/person/PersonService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.get("/api/people", async (req: Request, res: Response) => {
  try {
    const people = await peopleService.getAll();
    return res.status(200).send(people);
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as getPeopleRouter };
