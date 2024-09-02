// companyController.js

import Company from "../Models/CompanyModel.js";

// Create a new company
export const createCompany = async (req, res) => {
    try {
        const { name, tagline, logo } = req.body;
        const newCompany = await Company.create({
          name,
          tagline,
          logo,
          user: req.user,
        });
        res.json({message:"Company Created Successfully", success: true, data: newCompany });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all companies
export const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json({ success: true, data: companies });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a specific company by ID
export const getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return res.status(404).json({ success: false, error: 'Company not found' });
        }
        res.json({ success: true, data: company });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a company by ID
export const updateCompany = async (req, res) => {
    try {
        const { name, tagline, logo } = req.body;
        const updatedCompany = await Company.findByIdAndUpdate(
            req.params.id,
            { name, tagline, logo },
            { new: true }
        );
        if (!updatedCompany) {
            return res.status(404).json({ success: false, error: 'Company not found' });
        }
        res.json({
          message: "Company Updated Successfully",
          success: true,
          data: updatedCompany,
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete a company by ID
export const deleteCompany = async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id);
        if (!deletedCompany) {
            return res.status(404).json({ success: false, error: 'Company not found' });
        }
        res.json({ message:"company delete successfully",success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
