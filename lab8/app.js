import express from "express";
import path from "path";
import hello from "./routes/hello";
import form from "./routes/form";
import formdata from "./routes/formdata";
import jsondata from "./routes/jsondata";

const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", hello);
app.use("/form", form);
app.use("/formdata", formdata);
app.use("/jsondata", jsondata);

app.listen(PORT, () =>
  console.log(`Listening on port: http://localhost:${PORT} `)
);
