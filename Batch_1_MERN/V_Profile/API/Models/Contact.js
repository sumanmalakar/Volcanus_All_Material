import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    dateOfBirth: {
        type: Date,
    },
});

export const Contact = mongoose.model("Contact", ContactSchema);
