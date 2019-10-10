const { Router } = require("express");

const routes = new Router();

const DefaulterController = require("./app/controllers/DefaulterController");

routes.get("/defaulters", DefaulterController.list);
routes.post("/defaulters", DefaulterController.store);

module.exports = routes;
