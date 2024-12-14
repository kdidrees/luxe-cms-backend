const express = require("express");
const router = express.Router();
const faqController = require("../controllers/faqController");

router.post("/create", faqController.createFaq);
module.exports = router;
