import express from "express";
import { addAppointment, getAllAppointments, getAppointmentById, updateAppointment, deleteAppointment } from "../controllers/Appointment.js";
import { Authenticate } from "../middlewares/auth.js";

export const appointmentRouter = express.Router();

// Add Appointment
appointmentRouter.post("/addappointment", Authenticate, addAppointment);

// Get all Appointments
appointmentRouter.get("/getallappointments", Authenticate, getAllAppointments);

// Get a specific Appointment by ID
appointmentRouter.get("/getappointment/:id", Authenticate, getAppointmentById);

// Update Appointment by ID
appointmentRouter.put("/updateappointment/:id", Authenticate, updateAppointment);

// Delete Appointment by ID
appointmentRouter.delete("/deleteappointment/:id", Authenticate, deleteAppointment);

export default appointmentRouter;
