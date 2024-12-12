const express = require("express");
const router = express.Router();
const serviceListController = require("../controllers/serviceController");

router.post("/create", serviceListController.createServiceList);
router.get("/all", serviceListController.getServiceList);

module.exports = router;
