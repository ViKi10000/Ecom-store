import mongoose from "mongoose";

const bannerSchema = mongoose.Schema(
  {
    title: {
      typeof: String,
      require: true,
    },
    subtitle: {
      typeof: String,
      require: true,
    },
    image: {
      typeof: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
