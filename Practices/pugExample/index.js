"use strict";
const express = require("express");
const path = require("path");
const app = express();
app.use("static",express.static("./"))

app.post("/product",function (req,res) {
    req.body.name;
    req.body.price;

    res.render("productList",{products: products});
  })

app.use("/producstList", function (req,res) {
    res.sendFile(path.join(__dirname,"./productsList.html"));
  })
app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(4000);
