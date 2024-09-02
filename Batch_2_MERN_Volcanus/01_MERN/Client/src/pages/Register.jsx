import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "", // Added phone field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const url = "http://localhost:1000/api";


  const { name, email, password, phone } = formData; // Destructuring phone field

  const register = async (name, email, password, phone) => {
    const api = await axios.post(
      `${url}/user/register`, // Adjust the URL as needed
      { name, email, password, phone }, // Passing phone field
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return api.data;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("User Register", formData);
    const res = await register(name, email, password, phone); // Passing phone field
    alert(res.message);
    if (res.success) {
      navigate("/login");
    }
  };

  return (
    <div
      className="container mx-auto p-5 bg-black text-light"
      style={{
        width: "600px",
        border: "1px solid yellow",
        borderRadius: "10px",
        marginTop: "5rem",
      }}
    >
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            value={formData.name}
            name="name"
            onChange={handleChange}
            type="text"
            className="form-control bg-black text-light"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            value={formData.email}
            name="email"
            onChange={handleChange}
            type="email"
            className="form-control bg-black text-light"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            value={formData.password}
            name="password"
            onChange={handleChange}
            type="password"
            className="form-control bg-black text-light"
            required
          />
        </div>

        <div className="mb-3">
          {" "}
          {/* Added phone number field */}
          <label className="form-label">Phone</label>
          <input
            value={formData.phone}
            name="phone"
            onChange={handleChange}
            type="text"
            className="form-control bg-black text-light"
            required
          />
        </div>

        <div className="d-grid col-6 mx-auto">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
