// models/OurService.js
import mongoose from 'mongoose';

const ourServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});  

export const OurService = mongoose.model('OurService', ourServiceSchema);

