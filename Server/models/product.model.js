import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    whatinbox: {
      type: String,
    },
    image: {
      type: String,
      require: true,
    },
    video: {
      type: String,
    },
    wholesalePrice: {
      type: Number,
    },
    wholesaleMinimumQuantity: {
      type: Number,
    },
    categories: {
      type: Array,
    },
    concern: {
      type: Array,
    },
    brand: {
      type: String,
    },
    skintype: {
      type: Array,
    },
    originalPrice: {
      type: Number,
    },
    discountedPrice: {
      type: Number,
    },
    inStock: {
      type: Boolean,
      require: true,
    },
    ratings: [
      {
        star: {
          type: Number,
        },
        name: {
          type: String,
        },
        comment: {
          type: String,
        },
        postedBy: {
          type: String,
        },
      },
    ],
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
