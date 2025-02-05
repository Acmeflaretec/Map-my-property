const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const buildersSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Projects",
      },
    ],
    description: {
      type: String,
      required: true,
    },
    vision: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    features: [
      {
        text: String,
        helpertext: String,
      },
    ],
    url: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    testimonials: [
      {
        name: String,
        rating: String,
        review: String,
        image: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

buildersSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Builders", buildersSchema);
