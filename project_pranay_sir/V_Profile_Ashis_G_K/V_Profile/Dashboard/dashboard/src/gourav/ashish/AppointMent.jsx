import React, { useContext, useEffect } from "react";
import { myContext } from "../context/Appcontext";
import { TextField } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const AppointMent = () => {
  const appointmentcontext = useContext(myContext);
  const { appointmentDetails, companyDetails } = appointmentcontext;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for animation
      once: true, // Whether animation should only happen once
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [appointmentDetails]);

  return (
    <div className="w-75 pb-3 bg-dark m-auto text-light flex-column d-flex  align-items-center ">
      <div
        style={{ width: "95%" }}
        className=" d-flex flex-column align-items-center justify-content-center bg-black"
        data-aos="fade-up"
      >
        {/* heading */}
        <h2 className="py-3">
          ------{"<"}{" "}
          <span style={{ color: "rgb(207,241,30)" }}>
            Available AppointMent
          </span>{" "}
          {">"}
          ------
        </h2>

        <div className="d-flex flex-column align-items-center p-4 w-100">
          <div
            style={{ width: "90%" }}
            className="d-flex bg-dark p-4 justify-content-around"
          >
            <h4 style={{ color: "rgb(207,241,30)" }}>Select Date</h4>
            <TextField
              sx={{
                width: "85%",
                "& .MuiInputBase-input": {
                  backgroundColor: "#333", // Adjust this color to suit your background
                  color: "#fff", // Text color
                  borderRadius: "4px", // Optional: Rounded corners
                  paddingLeft: "8px", // Optional: Adjust padding for input text
                },
              }}
              type="date"
              InputLabelProps={{ shrink: true }} // Ensures the label floats properly
              InputProps={{
                style: { color: "#fff" }, // Text color (optional)
              }}
            />
          </div>

          <div
            style={{ width: "90%" }}
            className="bg-dark d-flex flex-column align-items-center my-4 p-4 "
            data-aos="fade-up"
          >
            <h3 className="py-2">
              {appointmentDetails[0]?.date.substring(0, 10)}
            </h3>

            {appointmentDetails.map((e, i) => (
              <div
                key={i}
                style={{ width: "90%", color: "rgb(207,241,30)" }}
                className="bg-black my-2 d-flex justify-content-center align-items-center p-1 flex-column"
                data-aos="fade-up"
              >
                <h3>
                  {`${e.time} am`} -- {`${e.time + i} pm`}
                </h3>
                <h5>{i + 1} SPACE AVAILABLE</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointMent;
