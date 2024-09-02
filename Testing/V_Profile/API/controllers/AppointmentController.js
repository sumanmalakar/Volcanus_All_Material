import { Appointment } from "../Models/AppointmentModel.js";


// Create - Add appointment
export const addAppointment = async (req, res) => {
    try {
        const { date, time } = req.body;
        const appointmentData = await Appointment.create({
          date,
          time,
          user: req.user,
        });
        const savedAppointment = await appointmentData.save();
        res.status(201).json({
            success: true,
            message: "Appointment added successfully",
            data: savedAppointment,
        });
    } catch (error) {
        console.error("Error adding appointment:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// Read - Get all appointments
export const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json({
            success: true,
            message: "Fetched all appointments successfully",
            data: appointments,
        });
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// Read - Get a specific appointment by ID
export const getAppointmentById = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const appointment = await Appointment.findById(appointmentId);
        
        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Fetched appointment successfully",
            data: appointment,
        });
    } catch (error) {
        console.error("Error fetching appointment:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// get appointment by userId
export const getAppointmentByUserId = async (req, res) => {
  const userID = req.params.id;
  const appointment = await Appointment.find({ user: userID });
  res.json({ message: "User Appointement", appointment });
};

// Update - Update a specific appointment by ID
export const updateAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const { date, time } = req.body;

        const appointment = await Appointment.findById(appointmentId);

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
            });
        }

        appointment.date = date;
        appointment.time = time;

        const updatedAppointment = await appointment.save();

        res.status(200).json({
            success: true,
            message: "Appointment information updated successfully",
            data: updatedAppointment,
        });
    } catch (error) {
        console.error("Error updating appointment information:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// Delete - Delete a specific appointment by ID
export const deleteAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.id;

        const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);

        if (!deletedAppointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Appointment deleted successfully",
            data: deletedAppointment,
        });
    } catch (error) {
        console.error("Error deleting appointment:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
