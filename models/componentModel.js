const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },  // e.g., "banner", "text", etc.
    data: { type: mongoose.Schema.Types.Mixed, required: true },  
  },
  {
    timestamps: true, 
  }
);

const Component = mongoose.models.Component || mongoose.model("Component", componentSchema);

module.exports = Component;
