/**
 * tenantsController.js
 */
 "use strict";

const tenantsDAO = require("../data/tenantsDAO");


 module.exports.getTenants = function(){
    return tenantsDAO.tenants;
 }