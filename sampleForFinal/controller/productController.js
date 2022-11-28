/**
 * productController.js
 */
"use strict";

const productDAO = require("../dao/productDAO.js");
const Product = require("../model/product.js");

const productController = (function(){

    const getProducts = function(req, res) {
        try {
            const products = productDAO.getProducts();
            console.log(`Controller: Products list: ${products}`);
            return products;
        } catch (error) {
            res.status(500);
            res.render("50x", {error: error});
        }
    };

    const addNewProduct = function(req, res) {
        const product = new Product(null, parseInt(req.body.productNo), req.body.productName, parseFloat(req.body.unitPrice));
        try {
            const opRes = productDAO.saveProduct(product);
            console.log(`ProductController: Save Product output: ${opRes}`);
            return opRes;
        } catch (error) {
            res.status(500);
            res.render("50x", {error: error});
        }
    }

    return {
        getProducts: getProducts,
        addNewProduct: addNewProduct
    }
})();

module.exports = productController;