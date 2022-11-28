/**
 * dao.js
 */
"use strict";
import Student from "../model/student.js";
//this will be exported to controller in order to populate the table
export const students = [
  new Student("000-11-0001", "Anna LynnSmith", "Graduate"),
  new Student("000-11-0002", "Bob K. Jones", "Undergraduate"),
];
// this will be exported to controller to add new Students from form
export function addStudent(newStudent) {
  students.push(newStudent);
}
