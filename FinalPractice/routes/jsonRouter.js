/**
 * jsonRouter.js
 */
"use strict";
import express from "express";
import { students } from "../DataAccess/dao.js";
export const JSONRouter = express.Router();
JSONRouter.get("/", function (req, res) {
  res.json(students);
});

