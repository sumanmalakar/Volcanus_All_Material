import mongoose from "mongoose";

const SocialMediaSchema = new mongoose.Schema({
    whatsApp: {
        type: String,
        // trim: true,
    },
    email: {
        type: String,
        // trim: true,
    },
    facebook: {
        type: String,
        // trim: true,
    },
    instagram: {
        type: String,
        // trim: true,
    },
    twitter: {
        type: String,
        // trim: true,
    },
    Skype: {
        type: String,
        // trim: true,
    },
    Discord: {
        type: String,
        // trim: true,
    },
    Linkdin: {
        type: String,
        // trim: true,
    },
    Website: {
        type: String,
        // trim: true,
    },
    location: {
        type: String,
        // trim: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    }
});


export const SocialMedia =  mongoose.model("SocialMedia", SocialMediaSchema);
