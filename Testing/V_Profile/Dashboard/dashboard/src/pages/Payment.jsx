import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Box, Typography, TextField, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useContext } from "react";
import { myContext } from "../context/Appcontext";
import axios from "axios";

const Payment = () => {
  const [paymetId, setPaymentId] = useState("");
  const [userdetails, setUserdetails] = useState([]);
  const [bank, setbank] = useState("");
  const [upi, setupi] = useState("");
  const [qrcode, setqrcode] = useState("");
  const paymentContext = useContext(myContext);
  const {
    addPayment,
    updatePayment,
    deletePayment,
    token,
    url,
    userId,
    reload,
  } = paymentContext;

  const submitPaymentHandle = async (e) => {
    e.preventDefault();

    if (userdetails.length < 1) {
      await addPayment(bank, upi, qrcode);
    } else {
      await updatePayment(paymetId, bank, upi, qrcode);
    }
  };

  useEffect(() => {
    if (userdetails.length > 0) {
      setPaymentId(userdetails[0]._id);
      setbank(userdetails[0].bank);
      setupi(userdetails[0].upi);
      // setqrcode(userdetails[0].qrcode);
    } else {
      setbank("");
      setupi("");
      setqrcode("");
    }
  }, [userdetails, token, reload]);

  // fetch by userid.
  useEffect(() => {
    const getPaymentByuserId = async (userid) => {
      try {
        const api = await axios.get(
          `
        ${url}/payments/getpaymentByUserID/${userid}`,
          {
            headers: {
              "Content-Type": "application/json",
              Auth: token,
            },
            withCredentials: true,
          }
        );
        // console.log(api);
        if (api.data.payment) {
          setUserdetails(api.data.payment);
        } else {
          setUserdetails([]);
        }
        // return api.data;
      } catch (error) {
        console.log(error.message);
      }
    };

    getPaymentByuserId(userId);
  }, [token, userId, reload]);

  // delete submit
  const deleteSubmit = () => {
    deletePayment(paymetId);
    setbank("");
    setupi("");
    setqrcode("");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "rgb(238,238,238)",
          height: "100vh",
        }}
      >
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "3rem" }}>
          <Box
            sx={{ height: "87vh", backgroundColor: "rgb(255,255,255)" }}
            component={"div"}
            className="company-container d-flex justify-content-center align-items-center"
          >
            <Box
              sx={{ width: { sx: "100%", sm: "80%", md: "40%" } }}
              component="form"
              onSubmit={submitPaymentHandle}
              className="d-flex justify-content-center align-items-center flex-column gap-4 p-4 border"
            >
              <Typography variant="h4" className=" fw-bold ">
                {" "}
                Payments Details
              </Typography>
              <TextField
                size="small"
                sx={{ width: "90%" }}
                label="Bank"
                value={bank}
                onChange={(e) => setbank(e.target.value)}
              />
              <TextField
                size="small"
                sx={{ width: "90%" }}
                label="UPI "
                value={upi}
                onChange={(e) => setupi(e.target.value)}
              />

              {userdetails && (
                <>
                  {" "}
                  {userdetails.length > 0 ? (
                    <Button
                      className=" d-flex justify-content-center align-items-center"
                      component="label"
                      variant="outlined"
                      sx={{ width: "90%", padding: "5px", overflow: "hidden" }}
                      startIcon={<CloudUploadIcon />}
                    >
                      {userdetails[0].qrcode}

                      <input
                        type="file"
                        style={{ display: "none" }}
                        value={qrcode}
                        onChange={(e) => setqrcode(e.target.value)}
                      />
                    </Button>
                  ) : (
                    <Button
                      className=" d-flex justify-content-center align-items-center"
                      component="label"
                      variant="outlined"
                      sx={{ width: "90%", padding: "5px", overflow: "hidden" }}
                      startIcon={<CloudUploadIcon />}
                    >
                      {qrcode == "" ? "upload Qrcode" : qrcode}

                      <input
                        type="file"
                        style={{ display: "none" }}
                        value={qrcode}
                        onChange={(e) => setqrcode(e.target.value)}
                      />
                    </Button>
                  )}
                </>
              )}

              {userdetails && (
                <>
                  {" "}
                  {userdetails.length > 0 ? (
                    <Box className=" d-flex gap-3" sx={{ width: "90%" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        sx={{ width: "90%" }}
                      >
                        Update
                      </Button>
                      <Button
                        sx={{ width: "90%" }}
                        variant="contained"
                        onClick={deleteSubmit}
                        color="error"
                      >
                        Delete
                      </Button>
                    </Box>
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: "90%" }}
                      color="secondary"
                    >
                      {" "}
                      submit
                    </Button>
                  )}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Payment;
