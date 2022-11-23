import { Account } from "../model/account.js";

export class AccountDao {
  #accounts = [
    new Account("01-980-0001", "James H. Karvill", "Savings"),
    new Account("01-980-0002", "Anna Hernandez-Diaz", "Checking"),
  ];

  getAccounts() {
    return this.#accounts;
  }

  addAccount(newAccount) {
    this.#accounts.push(newAccount);
  }
}
