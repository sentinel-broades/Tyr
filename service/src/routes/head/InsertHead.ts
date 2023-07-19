import express, { Request, Response } from "express";

const HeadService = require("../../services/HeadService");
const errorService = require("../../services/ErrorService");

const router = express.Router();

router.put("/api/head", async (req: Request, res: Response) => {
  try {
    const newHead = await HeadService.insertHead(req.body);
    return res.status(200).send(newHead);
  } catch (err) {
    errorService.handleError(err, res);
  }
});

export { router as insertHeadRouter };
