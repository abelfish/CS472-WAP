/**
 * product.js
 */
"use strict";

const express = require("express");
const path = require("path");
const productRouter = express.Router();
// const product = require("../../model/product");
const productController = require("../../controller/productController.js");

// Define routes for product pages
productRouter.get("/list", (req, res, next) => {
    console.log(`Presenting list of products page`);
    const products = productController.getProducts(req, res);
    console.log(products);
    res.locals = {products: products};
    res.render("product-list");
    // res.render("product-list", {products: products});
});

productRouter.get("/new", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../../views", "product-form.html"));
});

productRouter.post("/new", (req, res, next) => {
    const result = productController.addNewProduct(req, res);
    res.redirect(303, "/product/list");
});

module.exports = productRouter;
