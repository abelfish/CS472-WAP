/**
 * server.js
 *
 * @author
 * @since
 */
"use strict";

const express = require("express");
const path = require("path");
const HomeRouter = require("./routes/homeRoutes");
const TenantRouter = require("./routes/tenantRoutes");
const PORT_NUMBER = 3000;
const app = express();
console.log(`Starting the Web Application Server... Please wait.`);

// Middlewares
app.set("views", path.join(__dirname, "./views/public-pages"));
app.set("view engine", "pug");
app.use("/static", express.static(path.join(__dirname, "./static-resources/")));

// End Middlewares
app.use("/tenant", TenantRouter);
app.use("/", HomeRouter);
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "./views/public-pages/404.html"));
});

app.listen(PORT_NUMBER, () => {
  console.log(
    `Web Application Server started successfully.\nListening on ${PORT_NUMBER}.`
  );
  console.log(
    `To access the homepage, open a browser window and visit http://localhost:${PORT_NUMBER}/`
  );
});
