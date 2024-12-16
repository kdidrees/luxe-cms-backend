const express = require("express");
const router = express.Router();
const faqController = require("../controllers/faqController");

router.post("/create", faqController.createFaq);
router.post("/add", faqController.addFaq);
router.delete("/delete/:id", faqController.deleteFaq);
module.exports = router;
