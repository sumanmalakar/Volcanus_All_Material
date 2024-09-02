import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../data";
import Products from "./Products";

const Search_Product = () => {
  const { term } = useParams();
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    setSearchData(
      items.filter((data) =>
        data.title.toLowerCase().includes(term.toLowerCase())
      )
    );
    console.log(searchData);
  }, [term]);

  return (
    <div>
      <Products data={searchData} />
    </div>
  );
};

export default Search_Product;
