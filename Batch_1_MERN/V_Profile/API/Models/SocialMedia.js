import mongoose from "mongoose";

const SocialMediaSchema = new mongoose.Schema({
    WhatsApp: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    facebook: {
        type: String,
        trim: true,
    },
    instagram: {
        type: String,
        trim: true,
    },
    twitter: {
        type: String,
        trim: true,
    },
});

export const SocialMedia =  mongoose.model("SocialMedia", SocialMediaSchema);
