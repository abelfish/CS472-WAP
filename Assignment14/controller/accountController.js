import {AccountDao} from "../dao/accountDao.js";
import { Account } from "../model/account.js";

export class AccountController {
  #accountDao = new AccountDao();
  getAccounts() {
    return this.#accountDao.getAccounts();
  }
  addAccount(accountNo, name, accountType) {
    this.#accountDao.addAccounts(new Account(accountNo, name, accountType));
  }
}
