/**
 * index.js
 */
const express = require("express");
const path = require("path");
// import { Express } from "express";
const app = express();
app.use("/css",express.static("./views/css"));
app.use("/pages",express.static("./views/pages"));
app.use("/images",express.static("./views/images"));
app.use("/", (req, res) => {
  console.log("serving home page");
  res.sendFile(
    "D:\\Git\\MyWorkSpace\\CS472-WAP\\Practices\\express-demo\\views\\index.html"
  );
});
app.listen(3000, () => {
  console.log("Serving on port 3000");
});




