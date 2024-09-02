import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        trim: true,
        required: true,
    },
});

export const Appointment = mongoose.model("Appointment", AppointmentSchema);
