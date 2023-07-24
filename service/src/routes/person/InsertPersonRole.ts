import express, { Request, Response } from "express";

const personRoleService = require("../../services/person/PersonRoleService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.post("/api/person/role", async (req: Request, res: Response) => {
  try {
    const personRoleId = await personRoleService.insertPersonRole(req.body);
    return res.status(201).send({ personRoleId });
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as insertPersonRoleRouter };
