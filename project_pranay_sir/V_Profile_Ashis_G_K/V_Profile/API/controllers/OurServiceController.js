// controllers/serviceController.js
import { OurService } from "../Models/OurServiceModel.js";
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

   // cloudinary Configuration
   cloudinary.config({ 
    cloud_name: 'db0hvarfh', 
    api_key: '856629464622132', 
    api_secret: 'D1v19ns23XqbJqOjRf5z2IBwzZQ' // Click 'View Credentials' below to copy your API secret
});

// Multer configuration
const storage = multer.diskStorage({});
 export const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit upload size to 5MB
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/)) {
      return cb(new Error('Only image and pdf files are allowed!'), false);
    }
    cb(null, true);
  }
});
  
// CRUD operations

// Create
export const createservice = async (req, res) => {
  const { title, description } = req.body;

  try {
    // Upload image to 
    let result = ""
    if (req.file){
      result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'v_profile_Services' // Specify the folder in Cloudinary
      });

    }
    // Check if image upload was successful
    let public_id = ""
    let serviceImage = ""; // Default value in case image upload fails
    if(result){
      if (result.secure_url) {
        serviceImage = result.secure_url; // Assign secure URL from Cloudinary
        public_id = result.public_id
      }
    }
   

    // Create new service instance
    const service = new OurService({
      title,
      description,
      serviceImage,
      public_id,
      user: req.user // Assuming req.user contains authenticated user details
    });

    // Save service to database
    await service.save();

    // Respond with success message and service details
    res.json({ message: "Service added successfully", service });
  } catch (error) {
    res.json({message:error.message})
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
  const { id } = req.params;

  try {
    // Find the service by id
    let service = await OurService.findById(id);
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    // Check if a new file is uploaded
    if (req.file) {
      // Delete the old image from Cloudinary if it exists
      if (service.public_id) {
        await cloudinary.uploader.destroy(service.public_id);
      }

      // Upload the new file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'v_profile_Services' // Specify the folder in Cloudinary
      });

      // Update the service with new image URL and public_id
      service = await OurService.findByIdAndUpdate(
        id,
        {
          ...req.body,
          serviceImage: result.secure_url, // Update serviceImage field with new URL
          public_id: result.public_id // Save the public_id for future deletion
        },
        { new: true }
      );
    } else {
      // Update only other fields if no new file is uploaded
      service = await OurService.findByIdAndUpdate(id, req.body, { new: true });
    }

    // Respond with updated service data
    res.status(200).json({ message: 'Service updated successfully', service });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete
export const deleteservice = async (req, res) => {
  try {
    
    const service = await OurService.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ error: 'service not found' });
    }

    if (service.public_id) {
      await cloudinary.uploader.destroy(service.public_id);
    }
    // console.log("service delted successfully..")
    res.status(204).json({message:"Service deleted Successfully..!" , delete:true});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 

export const getserviceByUserId = async (req, res) => {
  const userID = req.params.id;
  const services = await OurService.find({ user: userID });
  if(!services){return res.json({message:"invalid userid"})}
  res.json({ message: "Services", services });
};