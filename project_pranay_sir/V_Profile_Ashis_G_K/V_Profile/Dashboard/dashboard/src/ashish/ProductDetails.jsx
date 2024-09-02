import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { myContext } from "../context/Appcontext";

const ProductDetails = () => {
  const { servicedetails } = useContext(myContext);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      easing: "ease-in-out", // easing function for animation
      once: true, // whether animation should only happen once
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [servicedetails]); // Refresh AOS when servicedetails change

  return (
    <div
      className="w-75 py-4 bg-dark m-auto text-light flex-column d-flex align-items-center"
      data-aos="fade-up"
    >
      <div
        style={{ width: "95%" }}
        className="bg-black d-flex flex-column align-items-center justify-content-center"
      >
        <h2 className="py-3">
          ------{"<"}{" "}
          <span style={{ color: "rgb(207,241,30)" }}>Our Products</span> {">"}{" "}
          ------
        </h2>

        <div className="d-flex py-2 gap-3">
          <div
            style={{ borderRight: "2px solid yellow", borderRadius: "1rem" }}
            className="d-flex align-items-center py-2 gap-3 w-50 justify-content-center"
            data-aos="fade-right"
          >
            <div
              style={{ width: "50%" }}
              className="content d-flex gap-1 flex-column"
            >
              <h4 style={{ color: "rgb(207,241,30)" }}>
                {servicedetails[0]?.title}
              </h4>
              <span>{servicedetails[0]?.description}</span>
              <button
                style={{ width: "7rem" }}
                className="btn btn-warning my-1 fw-bold"
              >
                $899.99
              </button>
            </div>
            <div
              style={{ width: "10rem", height: "10rem", borderRadius: "1rem" }}
              className="image"
            >
              <img
                style={{ width: "100%", height: "11rem", borderRadius: "1rem" }}
                src="https://m.media-amazon.com/images/I/71DFCg4yVBL._SL1500_.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            style={{ borderLeft: "2px solid yellow", borderRadius: "1rem" }}
            className="d-flex align-items-center gap-3 py-4 w-50 justify-content-center"
            data-aos="fade-left"
          >
            <div className="image">
              <img
                style={{
                  width: "10rem",
                  height: "11rem",
                  borderRadius: "1rem",
                }}
                src="https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg"
                alt=""
              />
            </div>
            <div
              style={{ width: "50%" }}
              className="content gap-1 d-flex flex-column"
            >
              <h4 style={{ color: "rgb(207,241,30)" }}>
                {servicedetails[1]?.title}
              </h4>
              <span>{servicedetails[1]?.description}</span>
              <button
                style={{ width: "7rem" }}
                className="btn btn-warning my-1 fw-bold"
              >
                $299.99
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex py-2 gap-3">
          <div
            style={{ borderRight: "2px solid yellow", borderRadius: "1rem" }}
            className="d-flex align-items-center py-2 gap-3 w-50 justify-content-center"
            data-aos="fade-right"
          >
            <div
              style={{ width: "50%" }}
              className="content d-flex gap-1 flex-column"
            >
              <h4 style={{ color: "rgb(207,241,30)" }}>
                {servicedetails[2]?.title}
              </h4>
              <span>{servicedetails[2]?.description}</span>
              <button
                style={{ width: "7rem" }}
                className="btn btn-warning my-1 fw-bold"
              >
                $499.99
              </button>
            </div>
            <div
              style={{ width: "10rem", height: "10rem", borderRadius: "1rem" }}
              className="image"
            >
              <img
                style={{ width: "100%", height: "11rem", borderRadius: "1rem" }}
                src="https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            style={{ borderLeft: "2px solid yellow", borderRadius: "1rem" }}
            className="d-flex align-items-center gap-3 py-4 w-50 justify-content-center"
            data-aos="fade-left"
          >
            <div className="image">
              <img
                style={{
                  width: "10rem",
                  height: "11rem",
                  borderRadius: "1rem",
                }}
                src="https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg"
                alt=""
              />
            </div>
            <div
              style={{ width: "50%" }}
              className="content gap-1 d-flex flex-column"
            >
              <h4 style={{ color: "rgb(207,241,30)" }}>
                {servicedetails[3]?.title}
              </h4>
              <span>{servicedetails[3]?.description}</span>
              <button
                style={{ width: "7rem" }}
                className="btn btn-warning my-1 fw-bold"
              >
                $699.99
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
