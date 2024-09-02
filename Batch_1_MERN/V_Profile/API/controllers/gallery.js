import { Gallery } from "../Models/Gallery.js";

export const addGallery = async (req, res) => {
    try {
        const { imgUrls } = req.body;

        const galleryData = await Gallery.create({
            imgUrls,
        });

        const savedGallery = await galleryData.save();

        res.status(201).json({
            success: true,
            message: "Gallery added successfully",
            data: savedGallery,
        });
    } catch (error) {
        console.error("Error adding gallery:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
