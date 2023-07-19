import { json } from "body-parser";
import express from "express";
import {
  disciplineRoutes,
  headRoutes,
  personRoutes,
  roleRoutes,
  squadRoutes,
} from "./routes";

const cors = require("cors");
const app = express();

app.use(json());
app.use(cors());

app.use(personRoutes);
app.use(disciplineRoutes);
app.use(roleRoutes);
app.use(squadRoutes);
app.use(headRoutes);

app.all("*", async (req, res) => {
  console.log("route not found", req.path);

  res.status(404).send("Route Not Found");
  return;
});

export { app };
