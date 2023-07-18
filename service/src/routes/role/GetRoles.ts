import express, { Request, Response } from "express";

const roleService = require("../../services/RoleService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.get("/api/roles", async (req: Request, res: Response) => {
  try {
    const roles = await roleService.getAll();
    return res.status(200).send(roles);
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as getRolesRouter };
