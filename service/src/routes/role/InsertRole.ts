import express, { Request, Response } from "express";

const roleService = require("../../services/RoleService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.post("/api/role", async (req: Request, res: Response) => {
  try {
    const roleId = await roleService.insert(req.body);
    return res.status(200).send({ roleId });
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as insertRoleRouter };
