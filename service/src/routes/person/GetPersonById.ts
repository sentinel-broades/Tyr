import express, { Request, Response } from "express";

const personService = require("../../services/person/PersonService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.get("/api/person/:id", async (req: Request, res: Response) => {
  try {
    const person = await personService.getById(req.params.id);
    res.status(200).send(person);
  } catch (err) {
    errorService.handleError(res, err);
  }
});

export { router as getPersonByIdRouter };
