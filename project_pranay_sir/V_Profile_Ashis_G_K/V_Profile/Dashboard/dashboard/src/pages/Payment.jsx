import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
  Card,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useContext } from "react";
import { myContext } from "../context/Appcontext";
import axios from "axios";
import Login_First from "../components/Login_First";

const Payment = () => {
  const [paymentId, setPaymentId] = useState("");
 
  const [bank, setBank] = useState("");
  const [upi, setUpi] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [paytm, setPaytm] = useState("");
  const [phonePe, setPhonePe] = useState("");
  const [googlePay, setGooglePay] = useState("");
  const [qrcode, setQrcode] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const paymentContext = useContext(myContext);
  const {
    setPaymentDetails,
    paymentDetails,
    addPayment,
    updatePayment,
    deletePayment,
    token,
    url,
    userId,
    reload,
  } = paymentContext;

  useEffect(() => {
    if (paymentDetails.length > 0) {
      const payment = paymentDetails[0];
      setPaymentId(payment._id);
      setBank(payment.bank);
      setUpi(payment.upi);
      setAccountNumber(payment.accountNumber);
      setIfscCode(payment.ifscCode);
      setPaytm(payment.paytm || "");
      setPhonePe(payment.phonePe || "");
      setGooglePay(payment.googlePay || "");
      setQrcode(payment.qrcode);
    } else {
      setBank("");
      setUpi("");
      setAccountNumber("");
      setIfscCode("");
      setPaytm("");
      setPhonePe("");
      setGooglePay("");
      setQrcode("");
    }
  }, [paymentDetails, token, reload]);


  const submitPaymentHandle = async (e) => {
    e.preventDefault();

    if (paymentDetails.length < 1) {
      await addPayment(
        bank,
        upi,
        accountNumber,
        ifscCode,
        paytm,
        phonePe,
        googlePay,
        qrcode
      );
    } else {
      await updatePayment(
        paymentId,
        bank,
        upi,
        accountNumber,
        ifscCode,
        paytm,
        phonePe,
        googlePay,
        qrcode
      );
    }
  };

  const deleteSubmit = async () => {
    await deletePayment(paymentId);
    setBank("");
    setUpi("");
    setAccountNumber("");
    setIfscCode("");
    setPaytm("");
    setPhonePe("");
    setGooglePay("");
    setQrcode("");
  };

  const handleModalOpen = (content) => {
    setModalContent(content);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setModalContent("");
  };

  return (
    <>

        {token ?(<><Box
        sx={{
          display: "flex",
          backgroundColor: "rgb(238,238,238)",
          minHeight: "100vh",
        }}
      >
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "3rem" }}>
          <Box
            sx={{
              minHeight: "87vh",
              backgroundColor: "rgb(255,255,255)",
            }}
            className="company-container d-flex justify-content-center align-items-center"
          >
            <Paper elevation={3} sx={{ width: { xs: "100%", sm: "80%", md: "70%" }, p: 4 , }}>
              <Typography variant="h4" className="fw-bold mb-4">
                Payments Details
              </Typography>
              <form onSubmit={submitPaymentHandle}>
                <Grid container spacing={3}>
                  <Grid item xs={6} md={6}>
                    <TextField
                      size="small"
                      fullWidth
                      label="Bank"
                      value={bank}
                      onChange={(e) => setBank(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      size="small"
                      fullWidth
                      label="UPI"
                      value={upi}
                      onChange={(e) => setUpi(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      size="small"
                      fullWidth
                      label="Account Number"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      size="small"
                      fullWidth
                      label="IFSC Code"
                      value={ifscCode}
                      onChange={(e) => setIfscCode(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <TextField
                      size="small"
                      fullWidth
                      label="Paytm"
                      value={paytm}
                      onChange={(e) => setPaytm(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <TextField
                      size="small"
                      fullWidth
                      label="PhonePe"
                      value={phonePe}
                      onChange={(e) => setPhonePe(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <TextField
                      size="small"
                      fullWidth
                      label="Google Pay"
                      value={googlePay}
                      onChange={(e) => setGooglePay(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      component="label"
                      variant="outlined"
                      fullWidth
                      startIcon={<CloudUploadIcon />}
                    >
                      {qrcode ? qrcode.name : "Upload QR Code"}
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setQrcode(e.target.files[0])}
                      />
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    {paymentDetails.length > 0 ? (
                      <Box display="flex" justifyContent="space-between">
                        <Button
                          type="submit"
                          variant="contained"
                          color="warning"
                          sx={{ width: "45%" }}
                        >
                          Update
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          sx={{ width: "45%" }}
                          onClick={deleteSubmit}
                        >
                          Delete
                        </Button>
                      </Box>
                    ) : (
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="secondary"
                      >
                        Add
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Box>
        </Box>
      </Box></>):(<><Login_First/></>)}
      
    </>
  );
};

export default Payment;
