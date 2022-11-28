/**
 * registrationRouter.js
 */
"use strict";

import express from "express";
import { students } from "../DataAccess/dao.js";
import { addStudent } from "../DataAccess/dao.js";
import Student from "../model/student.js";

export const RegistrationRouter = express.Router();

RegistrationRouter.get("/", function (req, res) {
  res.render("registration/registration", { students: students });
});

RegistrationRouter.post("/submit-form", function (req, res) {
  addStudent(
    new Student(req.body.studentId, req.body.fullName, req.body.levelOfStudy)
  );
  res.redirect(303, "/registration");
});
RegistrationRouter.use(function (req, res) {
  res.render("error/404");
});
