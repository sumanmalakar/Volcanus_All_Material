import React from "react";
import Products from "../components/Products";
import {items} from '../Data'

const Home = () => {
  return (
    <div>
      <Products product={items} />
    </div>
  );
};

export default Home;
