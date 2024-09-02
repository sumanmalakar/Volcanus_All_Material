import express  from "express";
import { addGallery } from "../controllers/gallery.js";

 export const galleryRouter = express.Router()

 galleryRouter.post("/addgallery" ,addGallery)