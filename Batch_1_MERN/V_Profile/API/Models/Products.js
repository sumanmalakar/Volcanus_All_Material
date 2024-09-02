import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    img: {
        type: String,
        trim: true,
        required: true,
    },
    title: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
});

export const Product = mongoose.model("Product", ProductSchema);
