import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Company = () => {
  const [companyName, setCompanyName] = useState("");
  const [logo, setLogo] = useState(null);
  const [tagline, setTagline] = useState("");
  const navigate = useNavigate();

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleTaglineChange = (e) => {
    setTagline(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      companyName,
      logo,
      tagline,
    });

    // Navigate to "/socialMedia" after form submission
    navigate("/socialMedia");
  };

  return (
    <div className="company flex w-full m-auto h-[100vh] items-center justify-center h-screen  bg-opacity-50 text-white">
      <div className="IMG hidden md:block mt-5">
        {/* Hide image for mobile devices */}
      </div>
      <div className="FORM w-full md:w-1/2 p-4 bg-opacity-80">
        {/* Make form responsive and apply hover effect */}
        <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg bg-opacity-70">
          <h1 className="text-2xl font-semibold mb-4">
            Company Information Form
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Company Name */}
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={companyName}
                onChange={handleCompanyNameChange}
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
                placeholder="Enter your company name"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <label
                htmlFor="logo"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Company Logo
              </label>
              <input
                type="file"
                id="logo"
                name="logo"
                onChange={handleLogoChange}
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
                accept="image/*"
                required
              />
            </div>

            {/* Tagline */}
            <div className="mb-4">
              <label
                htmlFor="tagline"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Tagline
              </label>
              <input
                type="text"
                id="tagline"
                name="tagline"
                value={tagline}
                onChange={handleTaglineChange}
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
                placeholder="Enter your company tagline"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Company;
