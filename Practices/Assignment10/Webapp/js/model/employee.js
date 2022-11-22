import { Person } from "./person.js";

export class Employee extends Person {
  constructor(name, dateOfBirth, salary) {
    super(name, dateOfBirth);
    this.salary = salary;
    this.hireDate = new Date();
  }

  doJob(jobTitle) {
    console.log(
      `${this.name} is a ${jobTitle} who earns $${this.salary.toLocaleString(
        undefined,
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      )}`
    );
  }
}
