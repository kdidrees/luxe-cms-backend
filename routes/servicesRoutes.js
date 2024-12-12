const express = require("express");
const router = express.Router();
const serviceListController = require("../controllers/serviceController");

router.post("/create", serviceListController.createServiceList);

module.exports = router;
