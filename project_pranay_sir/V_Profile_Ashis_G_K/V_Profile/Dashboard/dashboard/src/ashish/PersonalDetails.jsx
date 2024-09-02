import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../context/Appcontext";
import {
  BugReport,
  Dashboard,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library

const PersonalDetails = () => {
  const navigate = useNavigate();
  const hercontext = useContext(myContext);
  const { user, userdetails } = hercontext;

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration (in milliseconds)
  }, []); // Run only once when component mounts

  return (
    <div
      style={{ height: "65vh" }}
      className="w-75 bg-dark m-auto text-light flex-column d-flex"
    >
      {/* top content */}
      <div className="w-100 d-flex justify-content-around align-items-center">
        <div
          className="py-2 d-flex gap-1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <BugReport
            onClick={() => navigate("/")}
            fontSize="large"
            style={{ color: "rgb(207,241,30)",cursor:"pointer" }}
          />
          <h3> I-SoftZone</h3>
        </div>
        <div
          className="py-2 d-flex gap-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a
            className="bg-dark text-light"
            href={`https://wa.me/${userdetails[0]?.whatsApp}`}
            target="_blank"
          >
            <WhatsApp />
          </a>
          <a
            className="bg-dark text-light"
            href={userdetails[0]?.facebook}
            target="_blank"
          >
            <Facebook />
          </a>
          <a
            className="bg-dark text-light"
            href={userdetails[0]?.Linkdin}
            target="_blank"
          >
            <LinkedIn />
          </a>
          <a
            className="bg-dark text-light"
            href={userdetails[0]?.twitter}
            target="_blank"
          >
            <Twitter />
          </a>
          <a
            className="bg-dark text-light"
            href={userdetails[0]?.instagram}
            target="_blank"
          >
            <Instagram />
          </a>
        </div>
        <div
          className="py-2 d-flex gap-2 align-items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h5>{user.name}</h5>
          <Dashboard
            onClick={() => navigate("/")}
            fontSize="large"
            style={{ color: "rgb(207,241,30)", cursor: "pointer" }}
          />
        </div>
      </div>

      {/* bottom content */}
      <div className="w-100 pt-5 px-3 d-flex justify-content-around align-items-center">
        {/* details content */}
        <div
          style={{ width: "20rem", height: "15rem" }}
          className="d-flex gap-2 justify-content-center p-2 gap-3 flex-column"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* User details */}
          <div className="d-flex align-items-center gap-2 ">
            <span
              className=" fw-bold fs-5"
              style={{ color: "rgb(207,241,30)" }}
            >
              Name:-
            </span>
            <span className=" fs-5">{user.name}</span>
          </div>

          <div className="d-flex align-items-center gap-2 ">
            <span
              className=" fw-bold fs-5"
              style={{ color: "rgb(207,241,30)" }}
            >
              Email:-
            </span>
            <span className=" fs-5">{user.email}</span>
          </div>

          <div className="d-flex align-items-center gap-2 ">
            <span
              className=" fw-bold fs-5"
              style={{ color: "rgb(207,241,30)" }}
            >
              Phone:-
            </span>
            <span className=" fs-5">{user.phone}</span>
          </div>
          <div className="d-flex align-items-center gap-2 ">
            <span
              className=" fw-bold fs-5"
              style={{ color: "rgb(207,241,30)" }}
            >
              Address:-
            </span>
            <span className=" fs-5">{user.address}</span>
          </div>
        </div>

        {/* image content */}
        <div
          style={{
            borderRadius: "50%",
            marginRight: "1.7rem",
            width: "17rem",
            height: "17rem",
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            style={{ borderRadius: "50%", width: "17rem", height: "17rem" }}
            src={user.imgurl}
            alt=""
          />
        </div>

        {/* Score content */}
        <div
          className="bg-black d-flex flex-column justify-content-around p-3 px-4 gap-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="d-flex flex-column">
            <span
              className="fw-bolder fs-2"
              style={{ color: "rgb(207,241,30)" }}
            >
              13+
            </span>
            <span>Lorem, ipsum dolor.</span>
          </div>
          <div className="d-flex flex-column">
            <span
              className="fw-bolder fs-2"
              style={{ color: "rgb(207,241,30)" }}
            >
              14+
            </span>
            <span>Lorem, ipsum dolor.</span>
          </div>
          <div className="d-flex flex-column">
            <span
              className="fw-bolder fs-2"
              style={{ color: "rgb(207,241,30)" }}
            >
              18+
            </span>
            <span>Lorem, ipsum dolor.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
