import express from "express";
import auth from "../store/authStore";
const FormRouter = express.Router();

FormRouter.get("/", (req, res) => res.render("form.ejs", { auth }));

export default FormRouter;
