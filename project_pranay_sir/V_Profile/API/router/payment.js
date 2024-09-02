// paymentRoutes.js

import express from "express";
import {
  addPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
  getPaymentByUserID,
} from "../controllers/payment.js";
import { Authenticate } from "../middlewares/auth.js";

export const paymentRouter = express.Router();

// Route to add a payment
paymentRouter.post("/addpayment",Authenticate, addPayment);

// Route to get all payments
paymentRouter.get("/getallpayments",Authenticate, getAllPayments);

// Route to get a specific payment by ID
paymentRouter.get("/getpayment/:id",Authenticate, getPaymentById);

// Route to get a specific payment by UserID
paymentRouter.get("/getpaymentByUserID/:id", Authenticate, getPaymentByUserID);

// Route to update a payment by ID
paymentRouter.put("/updatepayment/:id",Authenticate, updatePayment);

// Route to delete a payment by ID
paymentRouter.delete("/deletepayment/:id",Authenticate, deletePayment);


