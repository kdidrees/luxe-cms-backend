const express = require("express");
const router = express.Router();
const serviceListController = require("../controllers/serviceController");

router.post("/create", serviceListController.createServiceList);
router.get("/all", serviceListController.getServiceList);
router.put("/update/:id", serviceListController.updateService);

module.exports = router;
