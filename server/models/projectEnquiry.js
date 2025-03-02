const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const projectEnquirySchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Projects",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isViewed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

projectEnquirySchema.plugin(mongoosePaginate);

module.exports = mongoose.model("ProjectEnquiry", projectEnquirySchema);
