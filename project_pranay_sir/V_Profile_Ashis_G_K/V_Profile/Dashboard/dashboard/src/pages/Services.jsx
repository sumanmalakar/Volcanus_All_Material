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
  CircularProgress, // Import CircularProgress for loader
} from '@mui/material';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SideBar from '../components/SideBar';
import { myContext } from '../context/Appcontext';
import Login_First from '../components/Login_First';

const Services = () => {
  const [servicesId, setservicesId] = useState('');
  const [serviceInput, setserviceInput] = useState({ title: '', description: '' });
  const [serviceImage, setServiceImage] = useState(null); // State to store selected image file
  const [previewServiceImage, setPreviewServiceImage] = useState(null); // State to store preview image URL
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading state
  const serviceContext = useContext(myContext);
  const {
    servicedetails,
    setservicedetails,
    addService,
    updateService,
    deleteService,
    token,
    url,
    userId,
    reload,
  } = serviceContext;
  const { title, description } = serviceInput;

  // Onchange handler for input fields
  const serviceHandleChange = (e) => {
    const { name, value } = e.target;
    setserviceInput({ ...serviceInput, [name]: value });
  };

  // Onchange handler for service image input
  const handleServiceImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setServiceImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewServiceImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit handler for adding service
  const addServiceSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader while submitting
    await addService(title, description, serviceImage);
    setLoading(false); // Hide loader after submission
    setserviceInput({ title: '', description: '' }); // Reset input fields
    setServiceImage(null); // Clear selected image
    setPreviewServiceImage(null); // Clear image preview
    handleCloseAddModal(); // Close modal after submission
  };

  // Submit handler for updating service
  const updateServiceSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader while submitting
    await updateService(servicesId, title, description, serviceImage);
    setLoading(false); // Hide loader after submission
    setServiceImage(null); // Clear selected image
    setPreviewServiceImage(null); // Clear image preview
    handleCloseEditModal(); // Close modal after submission
  };

  // Reset image states on modal close
  const handleModalClose = () => {
    setserviceInput({ title: '', description: '' }); // Clear input fields
    setServiceImage(null); // Clear selected image
    setPreviewServiceImage(null); // Clear image preview
    setOpenAddModal(false);
    setOpenEditModal(false);
    setservicesId('');
  };

  // Set service id and input fields when servicedetails change
  useEffect(() => {
    if (servicedetails.length > 0) {
      setservicesId(servicedetails[0]._id);
      setserviceInput({
        title: servicedetails[0].title,
        description: servicedetails[0].description,
      });
    } else {
      setserviceInput({ title: '', description: '' });
    }
  }, [servicedetails, token, reload]);

  // Fetch services by userId on initial load and reload
  useEffect(() => {
    const getServiceByuserId = async (userid) => {
      try {
        const api = await axios.get(
          `${url}/service/getservicesbyUserId/${userid}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Auth: token,
            },
            withCredentials: true,
          }
        );
        if (api.data.services) {
          setservicedetails(api.data.services);
        } else {
          setservicedetails([]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getServiceByuserId(userId);
  }, [token, userId, reload]);

  // Delete service by id
 // Delete service by id
const handleDelete = async (id) => {
  // Find the index of the service being deleted
  const index = servicedetails.findIndex(service => service._id === id);
  if (index !== -1) {
    // Create a copy of servicedetails and set loading true for the service being deleted
    const updatedServices = [...servicedetails];
    updatedServices[index] = { ...updatedServices[index], loading: true };
    setservicedetails(updatedServices);

    // Perform delete operation
    await deleteService(id);

    // Remove the service from servicedetails and reset loading
    const remainingServices = servicedetails.filter(service => service._id !== id);
    setservicedetails(remainingServices);
  }
};


  // Open modal for adding service
  const handleOpenAddModal = () => {
    setOpenAddModal(true);
    setserviceInput({ title: '', description: '' }); // Reset input fields
    setServiceImage(null); // Clear selected image
    setPreviewServiceImage(null); // Clear image preview
  };

  // Close modal for adding service
  const handleCloseAddModal = () => {
    setOpenAddModal(false);
    handleModalClose();
  };

  // Open modal for editing service
  const handleOpenEditModal = (service) => {
    setservicesId(service._id);
    setserviceInput({
      title: service.title,
      description: service.description,
    });
    setOpenEditModal(true);
  };

  // Close modal for editing service
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    handleModalClose();
  };

  return (
    <>
          {token ?(<> <Box
        sx={{
          display: 'flex',
          backgroundColor: 'rgb(238,238,238)',
          minHeight: '100vh', // Ensure sidebar extends to full height
        }}
      >
        <SideBar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, marginTop: '3rem', position: 'relative' }}
        >
          {servicedetails.length === 0 && (
            <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
              <CardContent>
                <Typography variant="h5" align="center" color="textSecondary">
                  No services available
                </Typography>
                <Typography variant="body1" align="center" color="textSecondary">
                  Click below to add a new service.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                  onClick={handleOpenAddModal}
                  startIcon={<AddIcon />}
                  variant="outlined"
                  color="primary"
                >
                  Add Service
                </Button>
              </CardActions>
            </Card>
          )}
          {servicedetails.length > 0 && (
            <Button
              onClick={handleOpenAddModal}
              startIcon={<AddIcon />}
              variant="outlined"
              color="primary"
              sx={{ position: 'absolute', top: '30px', right: '50px' }}
            >
              Add Service
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
          {servicedetails.map((service) => (
  <Card
    key={service._id}
    sx={{
      width: '100%',
      maxWidth: 'calc(33.33% - 16px)', // Adjust card width as needed
      marginBottom: '16px', // Add margin bottom to separate cards
      position: 'relative', // To position image overlay
    }}
  >
    {/* Image Area */}
    {service.serviceImage && (
      <Box
        component="img"
        src={service.serviceImage} // Replace with actual image URL or base64 encoded image
        alt={service.title}
        sx={{
          width: '100%',
          height: '200px', // Adjust image height as needed
          objectFit: 'cover',
        }}
      />
    )}
    {/* Content Area */}
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {service.title}
      </Typography>
      <Typography variant="body1">
        {service.description}
      </Typography>
    </CardContent>
    {/* Actions Area */}
    <CardActions>
      <Button
        startIcon={<EditIcon />}
        onClick={() => handleOpenEditModal(service)}
      >
        Edit
      </Button>
      <Button
        startIcon={<DeleteIcon />}
        onClick={() => handleDelete(service._id)}
        color="error"
        disabled={service.loading} // Disable button if loading is true
      >
        {service.loading ? <CircularProgress size={24} /> : 'Delete'}
      </Button>
    </CardActions>
  </Card>
))}

          </Box>
          {/* Add Service Modal */}
          <Modal
            open={openAddModal}
            onClose={handleCloseAddModal}
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
                Add Service
              </Typography>
           
              <form style={{ maxHeight: "70vh", overflow: "scroll" }} onSubmit={addServiceSubmit}>
  {/* Title and Description fields */}
  <TextField
    size="small"
    value={serviceInput.title}
    name="title"
    onChange={serviceHandleChange}
    label="Title"
    fullWidth
    sx={{ mb: 2 }}
    required
  />
  <TextField
    size="small"
    value={serviceInput.description}
    name="description"
    onChange={serviceHandleChange}
    label="Description"
    fullWidth
    sx={{ mb: 2 }}
    required
  />
  {/* Image Upload Input */}
  <label htmlFor="service-image-upload" style={{ cursor: 'pointer' }}>
    <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
      Upload Image
    </Typography>
    <input
      required
      id="service-image-upload"
      type="file"
      accept="image/*"
      onChange={handleServiceImageChange}
      style={{ display: 'none' }}
    />
  </label>
  {previewServiceImage && (
    <img
      src={previewServiceImage}
      alt="Preview"
      style={{ maxWidth: '100%', marginTop: '8px' }}
    />
  )}
  {/* Error message if file not selected */}
  {!serviceImage && (
    <Typography variant="body2" color="error">
      Please select an image.
    </Typography>
  )}
  {/* Buttons */}
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
    <Button
      onClick={handleCloseAddModal}
      variant="contained"
      sx={{ mr: 2, width: '100px' }}
      color="primary"
    >
      Cancel
    </Button>
    <Button
      variant="contained"
      type="submit"
      sx={{ width: '100px' }}
      disabled={loading || !serviceImage} // Disable button if no image selected
    >
      {loading ? <CircularProgress size={24} /> : 'Add'}
    </Button>
  </Box>
</form>
          
            </Box>
          </Modal>
          {/* Edit Service Modal */}
          <Modal
            open={openEditModal}
            onClose={handleCloseEditModal}
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
                Edit Service
              </Typography>
                         <form style={{maxHeight:"70vh",overflow:"scroll"}} onSubmit={updateServiceSubmit}>
                <TextField
                  size="small"
                  value={serviceInput.title}
                  name="title"
                  onChange={serviceHandleChange}
                  label="Title"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  size="small"
                  value={serviceInput.description}
                  name="description"
                  onChange={serviceHandleChange}
                  label="Description"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                {/* Image Upload Input */}
                <label htmlFor="edit-service-image-upload" style={{ cursor: 'pointer' }}>
                  <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
                    Change Image
                  </Typography>
                  <input
                    id="edit-service-image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleServiceImageChange}
                    style={{ display: 'none' }}
                  />
                </label>
                {previewServiceImage && (
                  <img
                    src={previewServiceImage}
                    alt="Preview"
                    style={{ maxWidth: '100%', marginTop: '8px' }}
                  />
                )}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button
                    onClick={handleCloseEditModal}
                    variant="contained"
                    sx={{ mr: 2, width: '100px' }}
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ width: '100px' }}
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? <CircularProgress size={24} /> : 'Update'}
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

export default Services;
