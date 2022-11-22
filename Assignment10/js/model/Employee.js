/**
 * Employee.js
 *
 * @author Abel Kifletsion
 * @version 2022.11.17
 */
"use strict";

import { Person } from "./Person.js";


export class Employee extends Person {

  salary = 0;
  constructor(name, dateOfBirth, salary, hireDate) {
    super(name, dateOfBirth);
    this.salary = salary;
    this.hireDate = hireDate;
  }
  toString() {
    return (
      super.toString() + `, salary: ${this.salary}, hire date: ${this.hireDate}`
    );
  }
  doJob(jobTitle) {
    console.log(`${this.getName()} is a ${jobTitle} who earns $${this.salary}`);
  }
}
