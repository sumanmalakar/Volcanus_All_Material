import { Box, TextField, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { myContext } from "../context/Appcontext";
import axios from "axios";

const AppointMent = () => {
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [appointementId, setAppointementId] = useState("");
  const [userdetails, setUserdetails] = useState([]);
  const appointmentContext = useContext(myContext);
  const {
    addAppointment,
    updateAppointment,
    deleteAppointment,
    token,
    url,
    userId,
    reload,
  } = appointmentContext;

  // add appointment handler
  const addAppointmentHandler = async (e) => {
    e.preventDefault();
    if (userdetails.length < 1) {
      await addAppointment(date, time);
    } 
    else {
      await updateAppointment(appointementId, date, time);
    }
  };

  useEffect(() => {
    if (userdetails.length > 0) {
      setAppointementId(userdetails[0]._id);
      setdate(userdetails[0].date.slice(0,10));
      // setdate(`${user}`)
      settime(userdetails[0].time);
    } else {
      setdate("");
      settime("");
    }
  }, [userdetails, token, reload]);

  // fetch Appointment by User Id
  useEffect(() => {
    const getAppointmentByUserId = async (userId) => {
      try {
        const api = await axios.get(
          `
        ${url}/appointment/userid/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Auth: token,
            },
            withCredentials: true,
          }
        );
        // console.log(api);
        if (api.data.appointment) {
          setUserdetails(api.data.appointment);
        } else {
          setUserdetails([]);
        }
        // return api.data;
      } catch (error) {
        console.log(error.message);
      }
    };
    getAppointmentByUserId(userId);
  }, [token, reload, userId]);

  // delete submit
  const deleteSubmit = () => {
  deleteAppointment(appointementId)
   setdate("")
   settime("")
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
            className=" d-flex justify-content-center  align-items-center "
          >
            <Box
              onSubmit={addAppointmentHandler}
              component={"form"}
              sx={{ width: { xs: "100%", sm: "70%", md: "50%" } }}
              className=" d-flex justify-content-center align-items-center flex-column gap-3 border p-4"
            >
              <Typography variant="h4" className=" fw-bold ">
                Appointment
              </Typography>
              <TextField
                size="small"
                type="date"
                sx={{ width: "50%" }}
                value={date}
                onChange={(e) => setdate(e.target.value)}
              />
              <TextField
                size="small"
                type="time"
                sx={{ width: "50%" }}
                value={time}
                onChange={(e) => settime(e.target.value)}
              />
              {userdetails && (
                <>
                  {" "}
                  {userdetails.length > 0 ? (
                    <Box className=" d-flex gap-3 justify-content-center" sx={{ width: "90%" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        // sx={{ width: "90%" }}
                      >
                        Update
                      </Button>
                      <Button
                        // sx={{ width: "90%" }}
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
                      sx={{ width: "50%" }}
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

export default AppointMent;
