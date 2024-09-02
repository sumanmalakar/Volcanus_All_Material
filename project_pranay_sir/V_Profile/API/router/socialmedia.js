// socialMediaRoutes.js

import express from 'express';
import {
    addsocialmedia,
    getsocialmediaById,
    updatesocialmedia,
    deletesocialmediae,
    getSocialMedia,
} from '../controllers/socialmedia.js';
import { Authenticate } from '../middlewares/auth.js';

const socialMediaRouter = express.Router();

// Route to add a social media link
socialMediaRouter.post('/socialmedia/addlink',Authenticate, addsocialmedia);

// Route to get a social media link by ID
socialMediaRouter.get('/socialmedia/getlink/:id', Authenticate ,getsocialmediaById);

// Get social media by userId
socialMediaRouter.get('/socialmediabyuserid/:id', Authenticate ,getSocialMedia);

// Route to update a social media link by ID 
socialMediaRouter.put('/socialmedia/updatelink/:id', updatesocialmedia);

// Route to delete a social media link by ID
socialMediaRouter.delete('/socialmedia/deletelink/:id', deletesocialmediae);

export default socialMediaRouter;
