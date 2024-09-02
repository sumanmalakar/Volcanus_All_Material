import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
    imgUrls: [{
        type: String,
        trim: true,
        required: true,
    }],
});

export const Gallery = mongoose.model("Gallery", GallerySchema);
