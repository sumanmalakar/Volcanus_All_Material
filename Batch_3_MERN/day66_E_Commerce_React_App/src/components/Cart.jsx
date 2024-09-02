import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }
  console.log("Total price = ", totalPrice);

  return (
    <div className="text-center my-5">
      <button className="btn btn-warning" style={{fontWeight:'bold',fontSize:'1.2rem'}}>Total Price = {totalPrice} </button>
      {cart?.map((d) => (
        <div
          key={Math.random()}
          style={{ textAlign: "center", margin: "10px" }}
        >
          <img
            src={d.imgSrc}
            alt=""
            style={{ width: "250px", borderRadius: "10px", margin: "10px" }}
          />
          <h3>{d.title}</h3>
          <h2>{d.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cart;
