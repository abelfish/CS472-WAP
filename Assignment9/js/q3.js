/**
 *
 */
"use strict";
// 3

function Person(name, dateOfBirth) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.setName = function (newName) {
    this.name = newName;
  };
  this.getName = function () {
    return this.name;
  };
  this.toString = function () {
    return `{Name: ${this.name}, Date of Birth: ${this.dateOfBirth}}`;
  };
}
const person4 = new Person("Peter", new Date(1985, 10, 10));
console.log(person4.toString());
