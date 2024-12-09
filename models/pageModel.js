const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema(
  {
    pageName: { type: String, required: true },
    components: [{ type: mongoose.Schema.Types.ObjectId, ref: "Components" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Page", pageSchema);
