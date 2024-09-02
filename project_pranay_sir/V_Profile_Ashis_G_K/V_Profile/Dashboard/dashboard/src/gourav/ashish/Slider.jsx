import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div
      className="slider-container"
      style={{
        backgroundColor: "grey",
        color: "white",
        width: "97%",
        margin: "auto",
        marginTop: "1rem",
        height: "320px",
        padding: "20px",
      }}
    >
      <Slider {...settings}>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/375c3b2e1958adfd.jpeg?q=20"
            alt=""
            srcset=""
          />
        </div>

        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0e4fae4d5fcab33b.jpg?q=20"
            alt=""
            srcset=""
          />
        </div>

        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e7230486b354e4d7.jpg?q=20"
            alt=""
            srcset=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default ProductSlider;
