import express  from "express";
import { addContact, deleteContact, getAllContacts, getContactById, updateContact } from "../controllers/contact.js";
import { Authenticate } from "../middlewares/auth.js";
export const contactRoute = express.Router();

contactRoute.post("/addcontact",Authenticate, addContact)

contactRoute.get("/getAllContacts" ,Authenticate, getAllContacts)

contactRoute.get("/getAllContacts/:id" ,Authenticate, getContactById)

contactRoute.put("/updateContact/:id" ,Authenticate, updateContact)

contactRoute.delete("/deleteContact/:id" ,Authenticate, deleteContact)
