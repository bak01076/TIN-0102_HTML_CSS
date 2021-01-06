import express from "express";
import { info, updateData } from "../store/personalInfoStore";
const JsonDataRouter = express.Router();

JsonDataRouter.get("/", (req, res) => {
  res.render("jsondata", { info });
});

JsonDataRouter.post("/", (req, res) => {
  const { name, surname, age } = req.body;
  if (!name || !surname || !age) res.send(400, "Invalid JSON input");
  updateData(name, surname, age);
  res.json(info);
});

export default JsonDataRouter;
