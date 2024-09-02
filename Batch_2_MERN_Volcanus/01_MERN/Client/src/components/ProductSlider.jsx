import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div
      className="slider-container"
      style={{
        position:'relative',
        // backgroundColor: "#343a40",
        width: "97%",
        margin: "auto",
        marginTop: "1rem",
        height: "320px",
        padding: "20px",
        zIndex:'-1'
      }}
    >
      <Slider {...settings}>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f241e768f8367561.jpg?q=20"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1e31c9d65e3b4592.jpg?q=20"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0e4fae4d5fcab33b.jpg?q=20"
            alt=""
          />
        </div>
        {/* <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    </div>
  );
}

export default ProductSlider;
