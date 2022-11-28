/**
 * homeRoutes.js
 */
"use strict";

const express = require("express");
const path = require("path");
const HomeRouter = express.Router();

HomeRouter.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/public-pages/index.html"));
});
HomeRouter.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/public-pages/index.html"));
});


module.exports = HomeRouter;
