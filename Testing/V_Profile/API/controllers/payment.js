// paymentController.js

import {Payment} from '../Models/Payment.js';

// Add a payment
export const addPayment = async (req, res) => {
    try {
        const { qrcode, upi, bank } = req.body;
        const newPayment = await Payment.create({
          qrcode,
          upi,
          bank,
          user: req.user,
        });
        res.json({message:"Payment Added Successfully", success: true, data: newPayment });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all payments
export const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json({ payments });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a specific payment by ID
export const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ success: false, error: 'Payment not found' });
        }
        res.json({ success: true, data: payment });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a payment by ID
export const updatePayment = async (req, res) => {
    try {
        const { qrcode, upi, bank } = req.body;
        const updatedPayment = await Payment.findByIdAndUpdate(
          req.params.id,
          { qrcode, upi, bank },
          { new: true }
        );
        if (!updatedPayment) {
            return res.status(404).json({ success: false, error: 'Payment not found' });
        }
        res.json({message:"payment Updated Successfully", success: true, data: updatedPayment });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete a payment by ID
export const deletePayment = async (req, res) => {
    try {
        const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
        if (!deletedPayment) {
            return res.status(404).json({ success: false, error: 'Payment not found' });
        }
        res.json({message:"Payment Method Deleted Successfully", success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


// getPaymentByUserID
export const getPaymentByUserID = async (req, res) => {
  const userID = req.params.id;
  const payment = await Payment.find({ user: userID });
  if (!payment) {
    return res.json({ message: "invalid userid" });
  }
  res.json({ message: "Payment", payment });
};