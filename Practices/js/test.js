// const makeAdder = function (inc) {
// 	let counter = 0;
// 	return function () {
// 	  counter = counter += inc;
// 	  return counter;
// 	};
//   };

//   const adder5 = makeAdder(5);
//   adder5();
//   adder5();
//   console.log(adder5());

// var add = (function () {
//   var counter = 0;
//   return function () {
//     return (counter += 1);
//   };
// })();

// {
//   let count = 0;
//   function s() {
//     console.log("test");
//   }
//   s();
// }

// (function () {
//   let counter = 0;
//   function add() {
//     counter += 1;
//   }
//   function reset() {
//     counter = 0;
//   }

//   return {
//     counter: counter,
//     add: add,
//     reset: reset,
//   };
// })();

// const count2 = {
//   counter: 0,
//   reset: function () {
//     this.counter = 0;
//     return this.counter;
//   },
//   add: function () {
//     this.counter += 1;
//     return this.counter;
//   },
// };
// count.add();
// count.add();
// count.reset();

// let make_adder = function (inc) {
//   var counter = 0;
//   return function () {
//     return (counter += inc);
//   };
// };

// const Employee = (function () {
//   let name = "";
//   let age = 0;
//   let salary = 0;

//   function setAge(newAge) {
//     age = newAge;
//   }
//   function setSalary(newSalary) {
//     salary = newSalary;
//   }
//   function setName(newName) {
//     name = newName;
//   }
//   function getAge() {
//     return age;
//   }
//   function getName() {
//     return name;
//   }
//   function getSalary() {
//     return salary;
//   }
//   function increaseSalary(percentage) {
//     const addedSalary = getSalary() * percentage;
//     salary += addedSalary;
//   }
//   function incrementAge() {
//     setAge(getAge() + 1);
//   }
//   return {
//     setAge: setAge,
//     setSalary: setSalary,
//     setName: setName,
//     increaseSalary: increaseSalary,
//     incrementAge: incrementAge,
//   };
// })();

// Employee.address = { street: "", city: "", state: "", zip: "" };
// Employee.setAddress = function (street, city, state, zip) {
//   this.address = {
//     street: street,
//     city: city,
//     state: state,
//     zip: zip,
//   };
// };
// Employee.getAddress = function () {
//   return this.address;
// };
// Employee.setAddress("100 Main", "Fairfield", "Iowa", "52556");
// console.log(Employee.getAddress());
// const Employee2 = {
//   name: "test",
//   age: "23",
//   address: undefined,
// };

// Employee.setAddress.call(Employee2, "100 Main", "Fairfield", "Iowa", "52556");

// console.log(Employee2.address);
// const z = { f: 1, r: 4, s: 6 };

// const yz = { d: 4, e: 5 };

// const x = { a: 1, b: 2, c: 3 };

// x.__proto__ = yz;
// yz.__proto__ = z;

// const y = Object.keys(x);
// console.log(y);

// const w = [];
// for (const z in x) {
//   w.push(z);
// }
// console.log(w);

// function User(name) {
//   this.name = name;
// }

// let user = new User("yodit");

// function Employee(salary) {
//   this.salary = salary;
// }
// Employee.prototype = user;

// let emp = new Employee(23423);

// console.log(Employee.prototype);
// console.log(emp.__proto__);
// Object.setPrototypeOf(emp, user);
// Object.getPrototypeOf(emp);
// for (let key in emp) {
//   console.log(`${key}: ${emp[key]}`);
// }

// for (const key in emp) {
//   console.log(`${key}: ${emp[key]}`);
// }
// console.log([1,2,3]);

// "use strict";

// const person = {
//   name: "",
//   age: 0,
//   height: 0,
// };

// // Constructor function
// function Employee2(name) {
//   this.salary = 0;
// }
// console.log(Employee2.prototype);
// console.log(Employee2.__proto__);

// Employee2.prototype = person;

// let suzi = new Employee2("Suzana");
// console.log(suzi.__proto__);
// console.log(typeof suzi);

// class User {
//   constructor(name = "Anonymous") {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }

// class Employee extends User{
//   constructor(name,salary){
//     super(name);
//     this.salary = salary;
//   }

// }
// const emp = new Employee("test","9023");
// const user1 = new User("test");

// console.log(emp.__proto__);

// console.log(Employee.prototype.__proto__);
// console.log(Employee.__proto__);

// fred = new User();
// console.log(fred);
// console.log(fred.__proto__ === User.prototype);
// console.log(User.prototype);
// fred.sayHi();
// bob = new User("Bob");
// console.log(bob);
// bob.sayHi();

const account = {
  accountNo: 1001,
  customer: {
    customerld: "0157",
    firstName: " Anna ",
    lastName: " Smith ",
  },
  balance: 1750.95,
  getBalance: function () {
    const self = this;
    const innerFunction = function (param) {
      self.balance = 5000;
    };
    innerFunction();
    return this.balance;
  },
};
console.log(account.getBalance());

class Account {
  #accountNumber;
  #customerName;
  #balance;
  constructor(accountNumber, customerName, balance) {
    this.#accountNumber = accountNumber;
    this.#customerName = customerName;
    this.#balance = balance;
  }

  getAccountNumber() {
    return this.#accountNumber;
  }
}
class CheckingAccount extends Account {
  #monthlyFee;
  constructor(accountNumber, customerName, balance, monthlyFee) {
    super(accountNumber, customerName, balance);
    this.#monthlyFee = monthlyFee;
  }
}
.__proto__

const acct = new Account(1234, "Tesfay", 12314.12);
console.log(acct.getAccountNumber());

const Employee2 = (function () {
  let name = "";
  let age = 0;
  let salary = 0;

  function setAge(newAge) {
    age = newAge;
  }
  function setSalary(newSalary) {
    salary = newSalary;
  }
  function setName(newName) {
    name = newName;
  }
  function getAge() {
    return age;
  }
  function getName() {
    return name;
  }
  function getSalary() {
    return salary;
  }
  function increaseSalary(percentage) {
    const addedSalary = getSalary() * percentage;
    salary += addedSalary;
  }
  function incrementAge() {
    setAge(getAge() + 1);
  }
  return {
    setAge: setAge,
    setSalary: setSalary,
    setName: setName,
    increaseSalary: increaseSalary,
    incrementAge: incrementAge,
  };
})();

$("#element").on("click","button", function(evt){
    evt.preventDefault();
    evt.stopImmediatePropagation();
} )