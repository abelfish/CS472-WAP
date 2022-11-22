/**
 * main.js
 */
"use strict";

import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";

const persons = [
  new Person("Ana Smith", new Date(1998, 11, 15)),
  new Person("Bob Jone", new Date(1945, 10, 16)),
  new Person("Carlos Slim Helu", new Date(1976, 8, 24)),
];

for (const person of persons) {
  console.log(person);
}

// persons.forEach((p) => {
//   console.log(p.toString());
// });

// for (const key in persons) {
//   console.log(persons[key].toString());
// }
const jim = new Employee(
  "Jim Hanson",
  new Date(1998, 10, 12),
  new Number(245994930257983750.328493475924380)
);

jim.doJob("Software Engineer");