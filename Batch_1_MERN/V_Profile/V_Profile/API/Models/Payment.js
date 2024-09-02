import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
  qrcode: {
    type: String,
  },
  upi: {
    type: String,
  },
  bank: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});
export const Payment = mongoose.model("payment" , paymentSchema);