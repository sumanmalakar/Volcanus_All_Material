// OurServicesRouter.js
import express from 'express';

import {
  createservice,
  deleteservice,
  getAllservices,
  getserviceById,
  updateservice,
  upload,
  getserviceByUserId,
    } from "../controllers/OurServiceController.js";
import { Authenticate } from '../middlewares/auth.js';
const servicesRouter = express.Router();

servicesRouter.post('/addservices',Authenticate,upload.single('file') , createservice );
servicesRouter.get('/getallservices',Authenticate, getAllservices);
servicesRouter.get('/getservicesbyid/:id',Authenticate,  getserviceById);
servicesRouter.get('/getservicesbyUserId/:id',Authenticate,  getserviceByUserId);
servicesRouter.put('/updateservicesbyid/:id',Authenticate, upload.single('file') ,updateservice);
servicesRouter.delete('/deleteservicesbyid/:id',Authenticate, deleteservice);
   
export default servicesRouter;    
 