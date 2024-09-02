import { Contact } from "../Models/contact.js";

// Create - Add contact
export const addContact = async (req, res) => {
    try {
        const { email, phoneNumber, location, dateOfBirth } = req.body;

        const contactData = await Contact.create({
            email,
            phoneNumber,
            location,
            dateOfBirth,
        });

        const savedContact = await contactData.save();

        res.status(201).json({
            success: true,
            message: "Contact information added successfully",
            data: savedContact,
        });
    } catch (error) {
        console.error("Error adding contact information:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// Read - Get all contacts
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json({
            success: true,
            message: "Fetched all contacts successfully",
            data: contacts,
        });
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// // Read - Get a specific contact by ID
export const getContactById = async (req, res) => {
    try {
        const contactId = req.params.id;
        const contact = await Contact.findById(contactId);
        
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Fetched contact successfully",
            data: contact,
        });
    } catch (error) {
        console.error("Error fetching contact:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// // Update - Update a specific contact by ID
export const updateContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const { email, phoneNumber, location, dateOfBirth } = req.body;

        const contact = await Contact.findById(contactId);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        // Update only if the fields are present in the request body
        if (email) contact.email = email;
        if (phoneNumber) contact.phoneNumber = phoneNumber;
        if (location) contact.location = location;
        if (dateOfBirth) contact.dateOfBirth = dateOfBirth;

        const updatedContact = await contact.save();

        res.status(200).json({
            success: true,
            message: "Contact information updated successfully",
            data: updatedContact,
        });
    } catch (error) {
        console.error("Error updating contact information:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


// // Delete - Delete a specific contact by ID
export const deleteContact = async (req, res) => {
    try {
        const contactId = req.params.id;

        const deletedContact = await Contact.findByIdAndDelete(contactId);

        if (!deletedContact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Contact deleted successfully",
            data: deletedContact,
        });
    } catch (error) {
        console.error("Error deleting contact:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
