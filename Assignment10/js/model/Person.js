/**
 * Person.js
 *
 * @author Abel Kifletsion
 * @version 2022.11.17
 */

"use strict";

export class Person {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
  getName() {
    return this.name;
  }
  setName(newName) {
    this.name = newName;
  }
  getDateOfBirth() {
    return this.dateOfBirth;
  }
  setDateOfBirth(newDate) {
    this.dateOfBirth = newDate;
  }
  toString() {
    return `{Name: ${this.getName()}, DateOfBirth: ${this.getDateOfBirth()}}`;
  }
}
