/**
 * productDAO.js
 */
"use strict";


const Product = require("../model/product.js")

const productDAO = (function() {
    const products = [];
        products.push(new Product(1001, "Apple iPhone15", 1700));
        products.push(new Product(1002, "Samsung Android S22", 1500));
        products.push(new Product(1001, "Google Pixel 11", 1200));


    const getProducts = function() {
        
        return products;
    }


    const saveProduct = function(product) {
      
        products.push(product);
        
    }

    return {
        getProducts: getProducts,
        saveProduct: saveProduct
    }
})();

module.exports = productDAO;