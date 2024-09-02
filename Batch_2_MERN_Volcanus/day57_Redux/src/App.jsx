import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, itemsInCart, removeSpecificItem } from "./redux/cart";

import { Products } from "./data";
const App = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const ItemsIncart = useSelector(itemsInCart)
  console.log("my cart Items ",ItemsIncart)
  return (
    <>
      {Products.map((item) => (
        <div
          key={item.id}
          style={{
            width: "500px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <img src={item.imgSrc} alt="" style={{ width: "300px" }} />
          </div>
          <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
          <button onClick={() => dispatch(removeSpecificItem(item.id))}>Remove cart</button>
        </div>
      ))}
    </>
  );
};

export default App;
