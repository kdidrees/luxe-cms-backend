const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.post("/create", pageController.createPage);

module.exports = router;
