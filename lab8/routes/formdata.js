import express from "express";
import { auth, updateData } from "../store/authStore";

const FormDataRouter = express.Router();
FormDataRouter.get("/", (req, res) => {
  res.render("formdata", { auth });
});

FormDataRouter.post("/", (req, res) => {
  const { login, email, password } = req.body;
  updateData(login, email, password);
  res.redirect("");
});

export default FormDataRouter;
