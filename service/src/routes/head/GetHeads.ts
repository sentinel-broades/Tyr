import express, { Request, Response } from "express";

const headService = require("../../services/HeadService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.get("/api/heads/:squadId", async (req: Request, res: Response) => {
  try {
    const { squadId } = req.params;

    const heads = await headService.getAll(parseInt(squadId));
    return res.status(200).send(heads);
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as getHeadsRouter };
