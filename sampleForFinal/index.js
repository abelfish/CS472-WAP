/**
 * index.js
 * 
 * A demo express.js webapp
 * 
 * 
 */

"use strict";

const express = require("express");
const path = require("path");
const homeRoutes = require("./routes/home/home");
const productRoutes = require("./routes/product/product.js");
const productAPIRoutes = require("./routes/api/product.js");

const app = express();

// Define middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));
// parse HttpRequest data to application/json format
 app.use(express.json());

// Set public folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "public")));

// Setup routes for homepage and other static pages
app.use("", homeRoutes);


app.use("/product", productRoutes);


app.use("/api/product", productAPIRoutes);


// app.get("/test",(req,res)=>{
//     res.sendFile(path.join(__dirname,"/views/index.html"))
// })
// app.use("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"/views/404.html"))
// })


app.use((req, res, next) => {
    console.log(`Responding by redirecting to the 404 Error page`);
    res.status(404);
    res.sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT_NUMBER = 9000;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});