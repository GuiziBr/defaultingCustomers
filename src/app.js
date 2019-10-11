const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();
const mongoose = require("mongoose");
const databaseConfig = require("./config/database");

class App {
  constructor() {
    this.server = express();
    this.server.use(cors());
    this.database();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

module.exports = new App().server;
