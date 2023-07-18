import express, { Request, Response } from "express";

const peopleService = require("../../services/PeopleService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.post("/api/person", async (req: Request, res: Response) => {
  try {
    const personId = await peopleService.insert(req.body);
    return res.status(200).send({ personId });
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as insertPersonRouter };
