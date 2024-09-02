// profileModel.js

import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // You may want to add email validation here
  },
  phoneNumber: {
    type: String,
    required: true,
    // You may want to add phone number validation here
  },
  address: {
    type: String,
  },

   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
