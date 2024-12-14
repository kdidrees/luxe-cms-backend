const mongoose = require("mongoose");

const toggleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
});

const faqSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  Image: { type: String, required: true },
  faqs: [toggleSchema],
});

const FaqModel = mongoose.model("faqs", faqSchema);
module.exports = FaqModel;


