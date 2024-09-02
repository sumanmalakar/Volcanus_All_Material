import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,selectCartItems } from "../redux/cartSlice";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Products } from "../data";
const Cart = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (items) => {
    toast.success("Item Added To Cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    dispatch(addToCart(items));
  };


  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row">
          {Products.map((data) => (
            <div key={data.id} className="container col-md-4 text-center my-3">
              {/* <div className=""> */}
              <div className="card bg-dark" style={{ width: "18rem" }}>
                <div className="p-3">
                  <img
                    src={data.imgSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-light">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <button className="btn btn-primary mx-3">
                    {data.price} ₹
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleAddToCart(data)}
                  >
                    Add To Cart
                  </button>
                  {/* </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
