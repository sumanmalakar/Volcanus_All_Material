// models/OurService.js
import mongoose from 'mongoose';

const ourServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  serviceImage :{type:String ,required: true},
  public_id:{
    type:String ,default:""
},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});  

export const OurService = mongoose.model('OurService', ourServiceSchema);

