import React, { useState, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { url, reload, setReload } = useContext(ProductContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    qty: "",
    img: "",
  });

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await axios.get(`${url}/products/${id}`);
      console.log("products  = ", api.data.product);
      let product = api.data.product[0];
      if (product) {
        setFormData({
          title: product.title,
          description: product.description,
          price: product.price,
          qty: product.qty,
          img: product.img,
        });
      }
    };

    fetchDataFromAPI();
  }, [id, url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { title, description, price, qty, img } = formData;

  const editProduct = async (title, description, price, qty, img) => {
    const api = await axios.put(
      `${url}/products/${id}`,
      {
        title,
        description,
        price,
        qty,
        img,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setReload(!reload);
    // console.log("adding product ... ", api);
    return api.data;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("your form has been submitted ...", formData);
    const result = await editProduct(title, description, price, qty, img);

    alert(result.message);
    if (result.success) {
      setFormData({
        title: "",
        description: "",
        price: "",
        qty: "",
        img: "",
      });

      navigate("/admin");
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
          <button className="btn btn-outline-warning ">Edit Product</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
