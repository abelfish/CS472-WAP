/**
 * 
 */
"use strict"
// 2
const employee = Object.create(person, {
    salary: {
      value: 0,
    },
    hireDate: {
      value: new Date(),
    },
  });
  
  employee.doJob = function (jobTitle) {
    console.log(`${this.name} is a ${jobTitle} who earns $${this.salary}`);
  };
  
  const person3 = Object.create(employee, {
    name: {
      value: "Anna",
    },
    salary: {
      value: 249995.5,
    },
  });
  
  person3.doJob("Programmer");