// controllers/serviceController.js
import { OurService } from "../Models/OurServiceModel.js";
  
// CRUD operations

// Create
export const createservice = async (req, res) => {
  const {title, description } = req.body;
  try {
    const service = await OurService.create({
      title,
      description,
      user: req.user,
    });
    await service.save();
    res.status(201).json({message:"service added successfully",service});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read
export const getAllservices = async (req, res) => {
  try {
    const services = await OurService.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getserviceById = async (req, res) => {
  try {
    const service = await OurService.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ error: 'service not found' });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// getService by UserId

// Update
export const updateservice = async (req, res) => {
  try {
    const service = await OurService.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!service) {
      return res.status(404).json({ error: 'service not found' });
    }
    res.status(200).json({message:"service updated successfully..",service});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete
export const deleteservice = async (req, res) => {
  try {
    const service = await OurService.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ error: 'service not found' });
    }
    console.log("service delted successfully..")
    res.status(204).json({message:"Service deleted Successfully..!"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};