import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectCartItems ,selectCartTotalPrice, clearCart} from '../redux/cartSlice'
import { Link } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
    const cartItem = useSelector(selectCartItems)
    const CartItemPrice = useSelector(selectCartTotalPrice)
    const dispatch = useDispatch()
  return (
    <>
      <ToastContainer />

      <div className="container text-center my-5">
        {cartItem.map((data) => (
          <div
            key={data.id}
            className="container my-5"
            style={{ width: "700px" }}
          >
            <div className="card mb-3 bg-dark" style={{ maxWidth: "640px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="p-3">
                    <img
                      style={{ borderRadius: "10px" }}
                      src={data.imgSrc}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body text-light text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <button className="btn btn-primary mx-3">
                      {data.price} ₹
                    </button>
                    <button className="btn btn-warning">Buy Now</button>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {cartItem.length == 0 && (
          <>
            <h1>Your Cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning my-5">
              Continue Shopping...
            </Link>
          </>
        )}
        {cartItem.length != 0 && (
          <button
            className="btn btn-warning"
            onClick={() => {
                toast.success("Cart Cleared", {
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
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
        )}
      </div>
    </>
  );
}

export default Cart