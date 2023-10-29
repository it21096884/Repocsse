const mongoose = require("mongoose");

var Site = mongoose.model("Site", {
  orderNo: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  selectedSite: {
    type: String,
    required: true,
  },
  constructionPhase: {
    type: String,
  },
  location: {
    type: String,
  },
  specialRequirements: {
    type: String,
  },
});

module.exports = { Site };
