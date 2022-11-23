import express from "express";
import { AccountController } from "../controller/accountController.js";

export const AccountRouter = express.Router();
const accountController = new AccountController();
const accounts = accountController.getAccounts();

AccountRouter.post("/submit-form", (req, res) => {
  const accountNo = req.body.txtAccountNo;
  const name = req.body.txtCustomerName;
  const accountType = req.body.txtAccountType;
  accountController.addAccount(accountNo, name, accountType);
  res.redirect(303, "/accounts");
});

AccountRouter.get("/accounts", (req, res) => {
  res.render("accounts", { accounts: accounts });
});

AccountRouter.get("/account", (req, res) => {
  res.render("accounts", { accounts: accounts });
});
