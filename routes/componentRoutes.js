const express = require("express");
const componentController = require("../controllers/componentController");

const router = express.Router();

router
  .route("/:id")
  .get(componentController.getComponentById)
  .put(componentController.updateComponent);

module.exports = router;
