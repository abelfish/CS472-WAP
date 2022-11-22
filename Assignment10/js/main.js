/**
 * main.js
 *
 * @author Abel Kifletsion
 * @version 2022.11.17
 */
"use strict";

import { Person } from "./model/Person.js";
import { Employee } from "./model/Employee.js";

let persons = [
  new Person("Ana Smith", new Date(1998, 11, 15)),
  new Person("Bob Jone", new Date(1945, 10, 16)),
  new Person("Carlos Slim Helu", new Date(1976, 9, 24)),
];

persons.forEach((p) => console.log(p.toString()));

const jim = new Employee(
  "Jim Hanson",
  new Date(1991, 10, 10),
  245990.0,
  new Date()
);

jim.doJob('Software Engineer');
