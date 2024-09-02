import React, { useContext, useState, useRef, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
  Menu,
  MenuItem,
  Modal,
  CircularProgress,
} from "@mui/material";
import SideBar from "../components/SideBar";
import { myContext } from "../context/Appcontext";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import Login_First from "../components/Login_First";

const Profile = () => {
  const profileContext = useContext(myContext);
  const {
    AddProfile,
    user,
    updateProfile,
    deleteProfileimg,
    token
  } = profileContext;

  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [inputData, setInputData] = useState({
    name:  "",
    email:  "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    
  if(user){
    setInputData({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      address: user.address || "",

    })
  

  }
   
  }, [user])

  
  

 

  const inputFileRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setEditMode(true);
    }
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAddProfile = () => {
    setAnchorEl(null);
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleUpdateProfile = () => {
    setAnchorEl(null);
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleViewProfile = () => {
    setAnchorEl(null);
    setViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setViewModalOpen(false);
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await AddProfile(profileImage);
      setPreviewImage("");
      setEditMode(false);
    } catch (error) {
      console.error("Error while saving profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setProfileImage(null);
    setPreviewImage(null);
    setEditMode(false);
  };

  const handleEditModalOpen = () => {
    setEditModalOpen(true);
    setInputData({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      address: user.address || "",
    });
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await deleteProfileimg();
    } catch (error) {
      console.error("Error while deleting profile image:", error);
    } finally {
      setDeleting(false);
    }
  };

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const profileSubmit = async () => {
    try { 
      const {name,email,phone,address}=inputData
      await updateProfile(user._id,name,email,phone,address );
      setEditMode(false);
      setEditModalOpen(false);
    } catch (error) {
      console.error("Error while updating profile:", error);
    }
  };

  return (
    <>
    {token ?(<> <Box
        sx={{
          display: "flex",
          backgroundColor: "rgb(238,238,238)",
          height: "100vh",
        }}
      >
        <SideBar />

        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "3rem" }}>
          <Box
            sx={{
              height: "87vh",
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "80%", md: "60%" },
                textAlign: "center",
                p: 4,
                border: "1px solid #ccc",
                borderRadius: 4,
                boxShadow: 1,
              }}
              component="form"
              onSubmit={profileSubmit}
            >
              {user &&  <Box sx={{ position: "relative" }}>
                <Avatar
                  alt={user.name || "P"}
                  src={previewImage || user.imgurl}
                  sx={{ width: 100, height: 100, mb: 2, alignSelf: "center", cursor: "pointer" }}
                  onClick={handleAvatarClick}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "50%",
                  }}
                  onClick={handleEditModalOpen}
                >
                  <EditIcon />
                </IconButton>
              </Box>}
             
{user &&  <Menu id="avatar-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {user.imgurl ? (
                  <>
                    <MenuItem onClick={handleUpdateProfile}>Update Profile Picture</MenuItem>
                    <MenuItem onClick={handleViewProfile}>View Profile Picture</MenuItem>
                    <MenuItem onClick={handleDelete} disabled={deleting}>
                      {deleting ? <CircularProgress size={24} /> : "Delete Profile Picture"}
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem onClick={handleAddProfile}>Add Profile Picture</MenuItem>
                )}
              </Menu>}
             

              <Modal
                open={viewModalOpen}
                onClose={handleCloseViewModal}
                aria-labelledby="view-profile-picture"
                aria-describedby="view-profile-picture"
              >
                <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", boxShadow: 24, p: 4 }}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={handleCloseViewModal} sx={{ color: "inherit", position: "absolute", top: 0, right: 0 }}>
                      <CancelIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="h6" id="view-profile-picture" gutterBottom>
                    View Profile Picture
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <Avatar alt={user.name || "P"} src={user.imgurl} sx={{ width: 250, height: 250 }} />
                  </Box>
                </Box>
              </Modal>

              {user && 
              <Modal
                open={editModalOpen}
                onClose={handleEditModalClose}
                aria-labelledby="edit-profile"
                aria-describedby="edit-profile"
              >
                <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, bgcolor: "background.paper", boxShadow: 24, p: 4 }}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton onClick={handleEditModalClose} sx={{ color: "inherit", position: "absolute", top: 0, right: 0 }}>
                      <CancelIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="h6" id="edit-profile" gutterBottom>
                    Edit Profile
                  </Typography>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                      <TextField
                        size="small"
                        value={inputData.name}
                        name="name"
                        label="Name"
                        fullWidth
                        sx={{ mb: 2 }}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        size="small"
                        value={inputData.email}
                        name="email"
                        label="Email"
                        fullWidth
                        sx={{ mb: 2 }}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        size="small"
                        value={inputData.phone}
                        name="phone"
                        label="Phone Number"
                        fullWidth
                        sx={{ mb: 2 }}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        size="small"
                        value={inputData.address}
                        name="address"
                        label="Address"
                        fullWidth
                        sx={{ mb: 2 }}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                  <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <Button variant="contained" color="primary" onClick={profileSubmit}>
                      Save
                    </Button>
                  </Box>
                </Box>
              </Modal>}


              <input ref={inputFileRef} id="avatar-input" type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />

              <Typography variant="h4" className="fw-bold mb-4">
                Profile
              </Typography>

              {user&&   <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <TextField size="small" value={user.name || "Not Available"} name="name" label="Name" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" value={user.email || "Not Available"} name="email" label="Email" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" value={user.phone || "Not Available"} name="phone" label="Phone Number" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" value={user.address || "Not Available"} name="address" label="Address" fullWidth sx={{ mb: 2 }} onChange={handleInputChange} />
                </Grid>
              </Grid>}

            

              {editMode && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  {loading ? (
                    <CircularProgress size={24} />
                  ) : (
                    <>
                      <Button variant="contained" color="primary" onClick={handleSave}>
                        Save
                      </Button>
                      <Button variant="contained" color="secondary" onClick={handleCancel} sx={{ ml: 2 }}>
                        Cancel
                      </Button>
                    </>
                  )}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box></>) :(<><Login_First/></>)}
     
    </>
  );
};

export default Profile;
