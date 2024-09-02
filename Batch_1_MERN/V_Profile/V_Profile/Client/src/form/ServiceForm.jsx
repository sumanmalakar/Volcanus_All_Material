import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceForm = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
  });

  const getAllServices = async () => {
    try {
      const response = await axios.get('http://localhost:1000/api/service/getAllservices');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const addService = async () => {
    try {
      await axios.post('http://localhost:1000/api/service/Addservices', newService);
      getAllServices(); // Refresh the list of services after adding a new one
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({ ...prevService, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Services</h2>

        {/* Add Service Form */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            type="text"
            name="title"
            value={newService.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            className="border rounded-md py-2 px-3 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
            name="description"
            value={newService.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={addService}
        >
          Add Service
        </button>

        {/* Display All Services */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-blue-500">All Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service._id} className="mb-2">
                <strong className="text-blue-500">{service.title}</strong>: {service.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
