import express from "express";
import {
  addAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  getAppointmentByUserId,
} from "../controllers/AppointmentController.js";
// import { Authenticate } from "../middlewares/auth.js";

export const appointmentRouter = express.Router();
import { Authenticate } from "../middlewares/auth.js";

// Add Appointment
appointmentRouter.post("/addappointment",Authenticate,  addAppointment);

// Get all Appointments
appointmentRouter.get("/getallappointments",Authenticate,  getAllAppointments);

// Get a specific Appointment by ID
appointmentRouter.get("/getappointment/:id",Authenticate,  getAppointmentById);

// Get Appointment by User Id
appointmentRouter.get("/userid/:id", Authenticate, getAppointmentByUserId);

// Update Appointment by ID
appointmentRouter.put("/updateappointment/:id",Authenticate,  updateAppointment);

// Delete Appointment by ID
appointmentRouter.delete("/deleteappointment/:id",Authenticate,  deleteAppointment);

export default appointmentRouter;
