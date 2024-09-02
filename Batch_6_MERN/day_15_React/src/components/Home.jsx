import React from 'react'
import Person from "./components/Person";
import Product from "./components/Product";
import Courses from "./components/Courses";
import Counter from "./components/Counter";
import Image from "./components/Image";
import Map from "./components/Map";
import UseEffect from "./components/UseEffect";
import FetchDataFromAPI from "./components/FetchDataFromAPI";
import MealDB from "./components/MealDb";
import Form from "./components/Form";

export const Home = () => {
  return (
    <div>
      <div>
        {/* <div>
          <h1>This is my h1</h1>
          <h2>2+5</h2>
          <h2>{2 - 5}</h2>
          <h1>Name :- {name}</h1>
          <ul>
            <li>title :- {product.title}</li>
            <li>price :- {product.price}</li>
            <li>ram :- {product.ram}</li>
            <li>rom :- {product.rom}</li>
          </ul>
        </div>

        <h1>this is h1</h1>
        <div>
          <h1>This is my brand new h1</h1>
        </div> */}
      </div>
      <div>{/* <Person /> */}</div>
      {/* <Product /> */}
      {/* 
      <div>
        <Courses
          courseName="Python full Stack"
          price={150000}
          duration="6 - Months"
          discount="20 %"
          code="24PY01"
        />
        <Courses
          courseName="Java Full Stack"
          price={100000}
          duration="5 - Months"
          discount="30 %"
        />
        <Courses
          courseName="MERN Full Stack"
          price={170000}
          duration="5 - Months"
          discount="50 %"
        />
      </div> */}
      {/* 
      <div>
        <Counter />
      </div> */}
      {/* <div>
        <Image />
      </div> */}
      {/* <div>
        <Map />
      </div> */}
      {/* <div>
        <UseEffect />
      </div> */}
      <div>
        {/* <FetchDataFromAPI /> */}
        {/* <MealDB /> */}
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}
