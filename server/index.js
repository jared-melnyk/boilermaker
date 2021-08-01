const express = require("express");
const path = require("path");
const app = express();
const volleyball = require("volleyball");

// logging middleware
app.use(volleyball);

// static assets middleware
app.use(express.static(path.join(__dirname, "../public")));

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mount api routes
app.use("/api", require("./api"));

// serve up index.html for any request that doesn't match /api
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// handle 500 and log out errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
