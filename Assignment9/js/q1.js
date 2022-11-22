/**
 * assignment9.js
 *
 *
 */

"use strict";

// 1

const person = {
  name: "",
  dateOfBirth: "",
  getName: function () {
    return this.name;
  },
  setName: function (newName) {
    this.name = newName;
  },
};

const person2 = Object.create(person, {
  name: {
    value: "John",
  },
  dateOfBirth: {
    value: "1998-12-10",
  },
});
console.log(
  `The person’s name is ${person2.getName()}\n${person2.getName()} was born on ${
    person2.dateOfBirth
  }`
);


