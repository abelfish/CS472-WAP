/**
 * index.js
 */
"use strict";
import express from "express";
import path from "path";
import url from "url";
import { HomeRouter } from "./routes/homeRouter.js";
import { RegistrationRouter } from "./routes/registrationRouter.js";
import { JSONRouter } from "./routes/jsonRouter.js";

const PORT = 3000;
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "views/public"));
app.set("view engine", "pug");

app.use("/static", express.static("./static-assets"));
// routing all registration page requests to be handled in RegistrationRouter

app.use("/registration", RegistrationRouter);
app.post("/submit-form", RegistrationRouter);
app.use("/json", JSONRouter);
// routing all home page requests to be handled in HomeRouter
app.use("/", HomeRouter);

app.listen(PORT);
