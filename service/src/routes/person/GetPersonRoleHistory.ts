import express, { Request, Response } from "express";

const personRoleService = require("../../services/person/PersonRoleService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.get(
  "/api/person/role/history/:id",
  async (req: Request, res: Response) => {
    try {
      const personRoleHistory = await personRoleService.getHistory(
        parseInt(req.params.id),
      );
      res.status(200).send(personRoleHistory);
    } catch (err) {
      errorService.handleError(res, err);
    }
  },
);

export { router as getPersonRoleHistoryRouter };
