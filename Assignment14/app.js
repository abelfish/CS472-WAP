/**
 * app.js
 *
 */
"use strict";

import express, { application } from "express";
import path, { dirname } from "path";
import url from "url";
import { homeRouter } from "./Routes/HomeRoutes.js";
import { AccountRouter } from "./Routes/AccountRoutes.js";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "views")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/accounts", AccountRouter);
app.use("/", homeRouter);

app.post("/submit-form", AccountRouter);

app.listen(PORT, function () {
  console.log("Listening on port " + PORT);
});
