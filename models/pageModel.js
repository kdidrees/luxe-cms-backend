const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, required: true }, // e.g - "banner", "testimonial" etc.
  data: { type: mongoose.Schema.Types.Mixed, required: true },
});

const pageSchema = new mongoose.Schema({
  pageName: { type: String, required: true, unique: true },
  components: [componentSchema], // array of components
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Page = mongoose.model("page", pageSchema);
module.exports = Page;