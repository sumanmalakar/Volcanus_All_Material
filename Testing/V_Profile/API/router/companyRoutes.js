// companyRoutes.js

import express from 'express';
import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
  getCompanyByUserId,
} from "../controllers/companyController.js";

const companyRouter = express.Router();
import { Authenticate } from '../middlewares/auth.js';

// Route to create a new company
companyRouter.post('/createcompany',Authenticate, createCompany);

// Route to get all companies
companyRouter.get('/getallcompanies',Authenticate, getAllCompanies);

// Route to get a specific company by ID
companyRouter.get('/getcompany/:id',Authenticate, getCompanyById);

// Route to update a company by ID
companyRouter.put('/updatecompany/:id',Authenticate, updateCompany);

// Route to delete a company by ID
companyRouter.delete('/deletecompany/:id',Authenticate, deleteCompany);

companyRouter.get("/getcompanybyuserid/:id", Authenticate, getCompanyByUserId);

export default companyRouter;
