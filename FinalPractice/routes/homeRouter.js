/**
 * homeRouter.js
 */

import express from "express";
export const HomeRouter = express.Router();

HomeRouter.get("/home", function (req, res) {
  res.render("./home/index");
});
HomeRouter.get("/index.html", function (req, res) {
  res.render("./home/index");
});

HomeRouter.get("/", function (req, res) {
  res.render("./home/index");
});
HomeRouter.use(function (req, res) {
  res.render("error/404");
});
