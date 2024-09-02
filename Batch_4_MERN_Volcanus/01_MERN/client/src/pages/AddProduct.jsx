import React, { useState } from "react";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    qty: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { title, description, price, qty, img } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("your form has been submitted ...", formData);
    const result = await addProduct(title, description, price, qty, img);

    alert(result.message);
    if (result.success) {
      setFormData({
        title: "",
        description: "",
        price: "",
        qty: "",
        img: "",
      });

      navigate("/");
    }
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      <form
        onSubmit={submitHandler}
        className="container my-3 p-4"
        style={{
          width: "600px",
          border: "1px solid blue",
          borderRadius: "10px",
        }}
      >
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            type="text"
            value={formData.title}
            name="title"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            value={formData.description}
            name="description"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={formData.price}
            name="price"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">qty</label>
          <input
            type="number"
            className="form-control"
            value={formData.qty}
            name="qty"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">img</label>
          <input
            type="text"
            className="form-control"
            value={formData.img}
            name="img"
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-select bg-black text-light">
            <option selected>Select Category</option>
            <option value="mobiles">Mobiles</option>
            <option value="tablets">Tablets</option>
            <option value="laptops">Laptops</option>
            <option value="cameras">Cameras</option>
          </select>
        </div> */}
        <div className="d-grid col-6 mx-auto">
          <button className="btn btn-outline-warning ">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;


const sum = (a,b,c) =>{
  console.log(a+b+c)

}

// // sum(10,20,30) = 60
// sum(10,'20',30) = 4020