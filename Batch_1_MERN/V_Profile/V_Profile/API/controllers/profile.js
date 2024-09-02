
import Profile from "../Models/Profile.js";

// Create a new profile
export const createProfile = async (req, res) => {
    try {
        const { name, email, phoneNumber, address } = req.body;
        const newProfile = await Profile.create({ name, email, phoneNumber, address });
        res.json({ success: true, data: newProfile });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all profiles
export const getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json({ success: true, data: profiles });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a specific profile by ID
export const getProfileById = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        if (!profile) {
            return res.status(404).json({ success: false, error: 'Profile not found' });
        }
        res.json({ success: true, data: profile });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a profile by ID
export const updateProfile = async (req, res) => {
    try {
        const { name, email, phoneNumber, address } = req.body;
        const updatedProfile = await Profile.findByIdAndUpdate(
            req.params.id,
            { name, email, phoneNumber, address },
            { new: true }
        );
        if (!updatedProfile) {
            return res.status(404).json({ success: false, error: 'Profile not found' });
        }
        res.json({ success: true, data: updatedProfile });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete a profile by ID
export const deleteProfile = async (req, res) => {
    try {
        const deletedProfile = await Profile.findByIdAndDelete(req.params.id);
        if (!deletedProfile) {
            return res.status(404).json({ success: false, error: 'Profile not found' });
        }
        res.json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
