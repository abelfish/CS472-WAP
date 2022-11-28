/**
 * tenantRoutes.js
 */
 "use strict";

 const express = require("express");
 const path = require("path");
 const TenantRouter = express.Router();
 const tenantsController = require("../controller/tenantsController")

 const tenants = tenantsController.getTenants();

TenantRouter.get("/list",function (req,res) {
    res.render("tenantsPage",{tenants:tenants})
  })

 module.exports = TenantRouter;