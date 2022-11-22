/**
 * operation.js
 */
"use strict";

const operation = function (first, second, operator) {
  let result = 0;
  first = parseInt(first);
  second = parseInt(second);

  if (operator === "add") {
    result = first + second;
  }
  if (operator === "substract") {
    result = first - second;
  }
  if (operator === "multiply") {
    result = first * second;
  }
  if (operator === "divide") {
    result = first / second;
  }

  return result;
};

module.exports = operation;
