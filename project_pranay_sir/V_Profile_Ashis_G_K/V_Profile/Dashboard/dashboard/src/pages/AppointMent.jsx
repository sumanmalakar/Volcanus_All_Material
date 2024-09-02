import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SideBar from '../components/SideBar';
import { myContext } from '../context/Appcontext';
import Login_First from '../components/Login_First';

const AppointMent = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [appointmentId, setAppointmentId] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [appointmentToEdit, setAppointmentToEdit] = useState(null); // Track appointment to edit
  const [validationError, setValidationError] = useState({ date: false, time: false });

  const appointmentContext = useContext(myContext);
  const {
    appointmentDetails,
    setAppointmentDetails,
    addAppointment,
    updateAppointment,
    deleteAppointment,
    token,
    url,
    userId,
    reload,
  } = appointmentContext;

  useEffect(() => {
    if (appointmentDetails.length > 0) {
      setAppointmentId(appointmentDetails[0]._id);
      setDate(formatDate(appointmentDetails[0].date));
      setTime(formatTime(appointmentDetails[0].time));
    } else {
      setAppointmentId('');
      setDate('');
      setTime('');
    }
  }, [appointmentDetails, token, reload]);

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const parsedHours = parseInt(hours, 10);
    const ampm = parsedHours >= 12 ? 'PM' : 'AM';
    const formattedHours = parsedHours % 12 || 12; // Convert hour 0 to 12 in 12-hour format
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const handleAddAppointment = () => {
    setOpenModal(true);
    setAppointmentToEdit(null); // Reset appointmentToEdit when adding new appointment
    setAppointmentId('');
    setDate('');
    setTime('');
    setValidationError({ date: false, time: false });
  };

  const handleEditAppointment = (appointment) => {
    setOpenModal(true);
    setAppointmentToEdit(appointment); // Set appointmentToEdit with the appointment data
    setAppointmentId(appointment._id);
    setDate(formatDate(appointment.date));
    setTime(formatTime(appointment.time));
    setValidationError({ date: false, time: false });
  };

  const handleDeleteAppointment = async (id) => {
    await deleteAppointment(id);
    handleCloseModal();
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    if (!date) {
      setValidationError((prev) => ({ ...prev, date: true }));
      return;
    }
    if (!time) {
      setValidationError((prev) => ({ ...prev, time: true }));
      return;
    }

    if (appointmentToEdit) {
      await updateAppointment(appointmentId, date, time);
    } else {
      await addAppointment(date, time);
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setAppointmentToEdit(null); // Clear appointmentToEdit after modal is closed
  };

  return (
    <>
    {token ?(<>  <Box
        sx={{
          display: 'flex',
          backgroundColor: 'rgb(238,238,238)',
          height: '100vh',
        }}
      >
        <SideBar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, marginTop: '3rem', position: 'relative' }}
        >
          {appointmentDetails.length === 0 && (
            <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
              <CardContent>
                <Typography variant="h5" align="center" color="textSecondary">
                  No appointments available
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  color="textSecondary"
                >
                  Click below to add a new appointment.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                  onClick={handleAddAppointment}
                  startIcon={<AddIcon />}
                  variant="outlined"
                  color="primary"
                >
                  Add Appointment
                </Button>
              </CardActions>
            </Card>
          )}
          {appointmentDetails.length > 0 && (
            <Button
              onClick={handleAddAppointment}
              startIcon={<AddIcon />}
              variant="outlined"
              color="primary"
              sx={{ position: 'absolute', top: '30px', right: '50px' }}
            >
              Add Appointment
            </Button>
          )}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              mt: 4,
              gap: '16px', // Adjust spacing between cards
              marginTop:"50px"
            }}
          >
            {appointmentDetails.map((appointment) => (
              <Card
                key={appointment._id}
                sx={{
                  width: '100%',
                  maxWidth: 'calc(33.33% - 16px)', // Adjust card width as needed
                  marginBottom: '16px', // Add margin bottom to separate cards
                }}
              >
                <CardContent>
                  <Typography variant="h6  " sx={{fontWeight:"bold"}} gutterBottom>
                    {formatDate(appointment.date)} - {formatTime(appointment.time)}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button onClick={() => handleEditAppointment(appointment)} startIcon={<EditIcon />}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDeleteAppointment(appointment._id)} startIcon={<DeleteIcon />} color="error">
                    Delete
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
          {/* Modal for Adding and Editing Appointments */}
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                maxWidth: 600,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-title" variant="h6">
                {appointmentToEdit ? 'Edit Appointment' : 'Add Appointment'}
              </Typography>
              <form onSubmit={handleAppointmentSubmit}>
                <TextField
                  size="small"
                  type="date"
                  sx={{ width: '100%', mb: 2 }}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  error={validationError.date}
                  helperText={validationError.date ? 'Date is required' : ''}
                />
                <TextField
                  size="small"
                  type="time"
                  sx={{ width: '100%', mb: 2 }}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  error={validationError.time}
                  helperText={validationError.time ? 'Time is required' : ''}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={handleCloseModal}
                    sx={{ mr: 2 }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    {appointmentToEdit ? 'Update' : 'Add'}
                  </Button>
                </Box>
              </form>
            </Box>
          </Modal>
        </Box>
      </Box></>):(<><Login_First/></>)}
    </>
  );
};

export default AppointMent;
