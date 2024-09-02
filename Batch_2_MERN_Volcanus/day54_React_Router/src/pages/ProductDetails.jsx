import { useParams } from "react-router-dom";
import { items } from "../Data";

const ProductDetails = () => {
  //   console.log("This is my useParams = ", useParams());
  const { id } = useParams();
  
  const data = items.filter((prodcut) => prodcut.id == id);
  console.log(data)
  return (
    <>
      <div className="container my-5 ">
        <div
          className="card bg-dark text-center mx-auto"
          style={{ width: "18rem" }}
        >
          <div className="d-flex justify-content-center align-items-center p-3">
            <img
              src={data[0].imgSrc}
              className="card-img-top"
              alt="..."
              style={{ width: "120px" }}
            />
          </div>
          <div className="card-body bg-dark text-light">
            <h5 className="card-title">{data[0].title}</h5>
            <p className="card-text">{data[0].description}</p>
            <a href="#" className="btn btn-primary mx-3">
              {data[0].price}
            </a>
            <a href="#" className="btn btn-warning">
              Add To cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
