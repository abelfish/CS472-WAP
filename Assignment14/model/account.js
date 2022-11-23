export class Account {
  #accountNo;
  #name;
  #accountType;

  constructor(accountNo, name, accountType) {
    this.#accountNo = accountNo;
    this.#name = name;
    this.#accountType = accountType;
  }

  getAccountNo() {
    return this.#accountNo;
  }
  getName() {
    return this.#name;
  }
  getAccountType() {
    return this.#accountType;
  }
}
