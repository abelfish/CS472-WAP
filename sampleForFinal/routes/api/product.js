/**
 * product.js
 */
"use strict";

const express = require("express");
const productAPIRouter = express.Router();

const productController = require("../../controller/productController.js");

productAPIRouter.get("/list", (req, res) => {
    const products = productController.getProducts(req, res);
    res.json(products);
});

module.exports = productAPIRouter;