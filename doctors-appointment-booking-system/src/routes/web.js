const express = require("express");
const homepageController = require("../controllers/homepageController"); ;

/*
init all web routes
 */

let router = express.Router();

let initAllWebRoutes = (app) => {
  router.get("/", homepageController.getHomepage);

  return app.use("/", router);
};

module.exports = initAllWebRoutes;
