
// 6

const count = (function () {
  let counter = 0;
  function reset() {
    counter = 0;
    return counter;
  }
  function add() {
    return counter + 1;
  }
  return {
    add: add,
    reset: reset,
  };
})();

// 7
const makeAdder = function (inc) {
  let counter = 0;
  return function () {
    counter = counter += inc;
    return counter;
  };
};

const adder5 = makeAdder(5);
adder5();
adder5();
console.log(adder5());

// 10
const Employee = (function () {
  let name = "";
  let age = 0;
  let salary = 0;
  const setAge = function (newAge) {
    age = newAge;
  };
  const setSalary = function (newSalary) {
    salary = newSalary;
  };
  const setName = function (newName) {
    name = newName;
  };
  const getName = function () {
    return name;
  };
  const getAge = function () {
    return age;
  };
  const getSalary = function () {
    return salary;
  };
  const increaseSalary = function (percentage) {
    addedSalary = (getSalary() * percentage) / 100;

    setSalary(salary + addedSalary);
  };
  const incrementAge = function () {
    setSalary(getSalary() + 1);
  };
  return {
    setName: setName,
    setSalary: setSalary,
    setAge: setAge,
    increaseSalary: increaseSalary,
    incrementAge: incrementAge,
  };
})();

// 11
Employee.address = { street: "", city: "", state: "", zipcode: "" };
Employee.setAddress = function (street, city, state, zipcode) {
  Employee.address = {
    street: street,
    city: city,
    state: state,
    zipcode: zipcode,
  };
};
Employee.getAddress = function () {
  return Employee.address;
};
