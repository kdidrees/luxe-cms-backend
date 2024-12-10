const express = require("express");
const componentController = require("../controllers/componentController");

const router = express.Router();

router.put("/:id", componentController.updateComponent);

module.exports = router;
