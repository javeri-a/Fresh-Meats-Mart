import mongoose, { Schema, models } from "mongoose";

const OrderSchema = new Schema(
  {
    items: [
      {
        _id: String,
        name: String,
        price: Number,
        image: String,
        quantity: Number,
      },
    ],
    total: Number,
    createdAt: Date,
  },
  { timestamps: true }
);

const Order = models.Order || mongoose.model("Order", OrderSchema);
export default Order;
