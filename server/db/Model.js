const Sequelize = require("sequelize");
const db = require("./db");

const Model = db.define("model", {
  name: Sequelize.STRING,
});

module.exports = Model;
