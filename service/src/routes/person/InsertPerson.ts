import express, { Request, Response } from "express";

const peopleService = require("../../services/person/PersonService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.post("/api/person", async (req: Request, res: Response) => {
  try {
    const personId = await peopleService.insert(req.body);
    return res.status(201).send({ personId });
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as insertPersonRouter };
