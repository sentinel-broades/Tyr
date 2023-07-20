import { Response } from "express";

const handleError = (error: any, res: Response, msg?: string) => {
  throw error;
  //  res.status(500).send(error.message ? error.message : msg);
};

module.exports = { handleError };
