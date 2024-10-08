// OurServicesRouter.js
import express from 'express';

import { createservice, deleteservice, getAllservices, getserviceById, updateservice } from '../controllers/OurServiceController.js'
;
import { Authenticate } from '../middlewares/auth.js';
const servicesRouter = express.Router();

servicesRouter.post('/addservices',Authenticate, createservice );
servicesRouter.get('/getallservices',Authenticate, getAllservices);
servicesRouter.get('/getservicesbyid/:id',Authenticate,  getserviceById);
servicesRouter.put('/updateservicesbyid/:id',Authenticate, updateservice);
servicesRouter.delete('/deleteservicesbyid/:id',Authenticate, deleteservice);

export default servicesRouter;
