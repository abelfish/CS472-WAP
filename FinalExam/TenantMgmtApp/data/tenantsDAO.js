/**
 * tenantsDAO.js
 */
"use strict";

const Tenant = require("../model/tenant");

const tenantsDAO = (function () {
  const tenants = [
    new Tenant(
      "Excelsior North Tower",
      3,
      "301A",
      "Alan K. Jones",
      "(641) 123-0009",
      "akjones@domain.com"
    ),
    new Tenant(
      "Excelsior South Tower",
      1,
      "148B",
      "Barbara Lynn Smith",
      "(312) 001-1234",
      "blsmith@email.com"
    ),
  ];
  return {
    tenants: tenants,
  };
})();

module.exports = tenantsDAO;
