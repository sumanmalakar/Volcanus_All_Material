import express from "express";
import {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
  getProfileByUserID,
} from "../controllers/profile.js";

const profileRouter = express.Router();

// Route to create a new profile
profileRouter.post("/createprofile", createProfile);

// Route to get all profiles
profileRouter.get("/getallprofiles", getAllProfiles);

// Route to get a specific profile by ID
profileRouter.get("/getprofile/:id", getProfileById);

// Route to get a specific profile by UserID
profileRouter.get("/profileByUserID/:id", getProfileByUserID);

// Route to update a profile by ID
profileRouter.put("/updateprofile/:id", updateProfile);

// Route to delete a profile by ID
profileRouter.delete("/deleteprofile/:id", deleteProfile);

export default profileRouter;
