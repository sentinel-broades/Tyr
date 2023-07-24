import express, { Request, Response } from "express";

const squadPersonService = require("../../services/squad/SquadPersonService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.post("/api/head/person/", async (req: Request, res: Response) => {
  try {
    const headPerson = req.body;
    const newHeadPerson = await squadPersonService.insert(headPerson);
    res.status(201).send({ newHeadPerson });
  } catch (err) {
    errorService.handleError(res, err);
  }
});

export { router as insertHeadPersonRouter };
