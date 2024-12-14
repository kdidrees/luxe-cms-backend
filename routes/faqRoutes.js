const express = require("express");
const router = express.Router();
const faqController = require("../controllers/faqController");

router.post("/create", faqController.createFaq);
router.post("/add", faqController.addFaq);
module.exports = router;
