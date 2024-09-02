import React from "react";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const AdminProduct = () => {
  const { data, Products, deleteProduct } = useContext(ProductContext);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "15px",
        width: "900px",
        margin: "auto",
      }}
    >
      {Products.map((data) => (
        <div
          key={data._id}
          style={{
            padding: "10px",
            margin: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "10px",
          }}
          className="bg-dark"
        >
          <div style={{ width: "250px" }}>
            <div>
              <img
                src={data.img}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  border: "2px solid blue",
                }}
              />
            </div>
            <div className="m-2">
              <h5>{data.title}</h5>
              <p>{data.price} ₹</p>
            </div>
          </div>
          <div>
            <Link to={`/admin/edit/${data._id}`} className="btn btn-warning mx-3">Edit</Link>
            <button
              onClick={async () => {
                if (confirm("Are you are want to deleted")) {
                  const result = await deleteProduct(data._id);
                  console.log("delted ", result);
                  alert(result.message);
                }
              }}
              className="btn btn-danger mx-3"
            >
              Delete
            </button>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default AdminProduct;
