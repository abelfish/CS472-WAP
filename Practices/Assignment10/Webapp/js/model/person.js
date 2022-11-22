/**
 * person.js
 */
"use strict"

export class Person {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }

  setName(newName) {
    this.name = newName;
  }
  getName = function () {
    return this.name;
  };
  setDateOfBirth(newDate) {
    this.dateOfBirth = newDate;
  }
  getDateOfBirth() {
    return this.dateOfBirth;
  }
  toString() {
    return `{name: ${this.name}, dateOfBirth: ${this.dateOfBirth.getFullYear()}-${
      this.dateOfBirth.getMonth() + 1
    }-${this.dateOfBirth.getDate()}}`;
  }
}
