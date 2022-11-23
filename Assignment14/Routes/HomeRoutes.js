/**
 * HomeRoutes.js
 */

"use strict";
import express from "express";
import url from "url";
export const homeRouter = express.Router();
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

homeRouter.get("/", (req, res) => {
  res.render("index");
});
homeRouter.get("/home", (req, res) => {
  res.render("index");
});
homeRouter.get("/index", (req, res) => {
  res.render("index");
});
homeRouter.get("/index.html", (req, res) => {
  res.render("index");
});
