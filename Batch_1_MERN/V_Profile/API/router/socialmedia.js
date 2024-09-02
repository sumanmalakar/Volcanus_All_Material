import express  from "express";
import { addsocialmedia, deletesocialmediae, getsocialmediaById, updatesocialmedia } from "../controllers/socialmedia.js";
import { Authenticate } from "../middlewares/auth.js";
export const SocailMediaRoute = express.Router();

SocailMediaRoute.post("/addlink" , Authenticate,addsocialmedia);
SocailMediaRoute.get('/getlink/:id' ,Authenticate, getsocialmediaById );
SocailMediaRoute.put('/updatelink/:id' ,Authenticate, updatesocialmedia);
SocailMediaRoute.delete('/deletelink/:id' ,Authenticate,  deletesocialmediae);