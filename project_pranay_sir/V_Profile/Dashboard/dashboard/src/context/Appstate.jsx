import { myContext } from "./Appcontext";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appstate = (props) => {
  const getTokenbylocalStorage = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return token;
    } else {
      return "";
    }
  };
  const [token, setToken] = useState(getTokenbylocalStorage());
  const [reload, setreload] = useState(true);
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");
  const [active, setActive] = useState(false);

  const url = "http://localhost:1000/api";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const api = await axios.get(`${url}/user`, {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        });
        setUser(api.data.user);
        if (api.data.user._id) {
          setUserId(api.data.user._id);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
    // console.log(user, userId);
  }, [token, reload]);

  // logout
  const logout = () => {
    localStorage.removeItem("token");
    setreload(!reload);
    toast.success("!Logout!", {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  // login
  const login = async (email, password) => {
    try {
      const api = await axios.post(
        `${url}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(api.data);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setreload(!reload);
      if (api.data.token) {
        setToken(api.data.token);
        localStorage.setItem("token", api.data.token);
      }

      return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // SignUp
  const signUp = async (name, email, password, phone, address, description) => {
    try {
      const api = await axios.post(
        `${url}/register`,
        {
          name,
          email,
          password,
          phone,
          address,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      // console.log(api.data);
      return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // company page companies
  const createCompany = async (name, tagline, logo) => {
    try {
      const api = await axios.post(
        `
        ${url}/companies/createcompany`,
        {
          name,
          tagline,
          logo,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      // console.log(api);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // updatecompany
  const updateCompany = async (id, name, tagline, logo) => {
    try {
      const api = await axios.put(
        `
        ${url}/companies/updatecompany/${id}`,
        {
          name,
          tagline,
          logo,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      // console.log(api);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      // return api.data;
      setreload(!reload);
    } catch (error) {
      console.log(error.message);
    }
  };

  //  deletecompany
  const deleteCompany = async (id) => {
    try {
      const api = await axios.delete(
        `
        ${url}/companies/deletecompany/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      // console.log(api);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // create profile
  const createProfile = async (name, email, phoneNumber, address) => {
    try {
      const api = await axios.post(
        `
        ${url}/profiles/createprofile`,
        {
          name,
          email,
          phoneNumber,
          address,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(api);
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // update Profile
  const updateProfile = async (id, name, email, phoneNumber, address) => {
    try {
      const api = await axios.put(
        `
        ${url}/profiles/updateprofile/${id}`,
        {
          name,
          email,
          phoneNumber,
          address,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setreload(!reload);
      console.log(api);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // delete profile
  const deleteProfile = async (id) => {
    try {
      const api = await axios.delete(
        `
        ${url}/profiles/deleteprofile/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(api);
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // Services page
  const addService = async (title, description) => {
    try {
      const api = await axios.post(
        `
        ${url}/service/addservices`,
        {
          title,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(api);
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // update service
  const updateService = async (id, title, description) => {
    try {
      const api = await axios.put(
        `
        ${url}/service/updateservicesbyid/${id}`,
        {
          title,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(api);
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // delete service
  const deleteService = async (id) => {
    try {
      const api = await axios.delete(
        `
        ${url}/service/deleteservicesbyid/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      toast.success("Deleted", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(api, "delete");
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // addpayment
  const addPayment = async (bank, upi, qrcode) => {
    try {
      const api = await axios.post(
        `
        ${url}/payments/addpayment`,
        {
          bank,
          upi,
          qrcode,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(api);
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // update payment
  const updatePayment = async (id, bank, upi, qrcode) => {
    try {
      const api = await axios.put(
        `
        ${url}/payments/updatepayment/${id}`,
        {
          bank,
          upi,
          qrcode,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(api);
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // delete payment
  const deletePayment = async (id) => {
    try {
      const api = await axios.delete(
        `
        ${url}/payments/deletepayment/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(api);
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // add appointment
  const addAppointment = async (date, time) => {
    try {
      const api = await axios.post(
        `
        ${url}/appointment/addappointment`,
        {
          date,
          time,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      console.log(api);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //  Update Appointment by ID
  const updateAppointment = async (id, date, time) => {
    try {
      const api = await axios.put(
        `
        ${url}/appointment/updateappointment/${id}`,
        {
          date,
          time,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      console.log(api);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //  Delete Appointment by ID
  const deleteAppointment = async (id) => {
    try {
      const api = await axios.delete(
        `
        ${url}/appointment/deleteappointment/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      console.log(api);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //  socialmedia page
  const addSocialmedia = async (
    whatsApp,
    instagram,
    facebook,
    email,
    location,
    Discord,
    twitter,
    Skype,
    Linkdin,
    Website
  ) => {
    try {
      const api = await axios.post(
        `
        ${url}/socialmedia/addlink`,
        {
          whatsApp,
          instagram,
          facebook,
          email,
          location,
          Discord,
          twitter,
          Skype,
          Linkdin,
          Website,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      // console.log(api);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //  update
  const updatesocialMedia = async (
    id,
    whatsApp,
    instagram,
    facebook,
    email,
    location,
    Discord,
    twitter,
    Skype,
    Linkdin,
    Website
  ) => {
    try {
      const api = await axios.put(
        `
        ${url}/socialmedia/updatelink/${id}`,
        {
          whatsApp,
          instagram,
          facebook,
          email,
          location,
          Discord,
          twitter,
          Skype,
          Linkdin,
          Website,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      // console.log(api);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setreload(!reload);
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //  delete
  const deleteSocialMedia = async (id) => {
    try {
      const api = await axios.delete(
        `
        ${url}/socialmedia/deletelink/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        }
      );
      setreload(!reload);
      // console.log(api);
      toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      // return api.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <myContext.Provider
      value={{
        user,
        login,
        signUp,
        setActive,
        addAppointment,
        updateAppointment,
        deleteAppointment,
        addPayment,
        updatePayment,
        deletePayment,
        createCompany,
        updateCompany,
        deleteCompany,
        addSocialmedia,
        updatesocialMedia,
        deleteSocialMedia,
        createProfile,
        updateProfile,
        deleteProfile,
        addService,
        updateService,
        deleteService,
        url,
        userId,
        reload,
        token,
        logout,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default Appstate;
