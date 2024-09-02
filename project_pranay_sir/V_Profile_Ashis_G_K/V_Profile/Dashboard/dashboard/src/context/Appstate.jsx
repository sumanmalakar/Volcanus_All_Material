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

  const getThemelocalStorage = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      return theme;
    } else {
      return "1";
    }
  };
 
  const [token, setToken] = useState(getTokenbylocalStorage());
  const [reload, setreload] = useState(true);
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");
  const [active, setActive] = useState(false);
  const [userdetails, setUserdetails] = useState([]);
  const [companyDetails, setcompanyDetails] = useState([]);
   const [ appointmentDetails,setappointmentDetails]=useState([]);
   const [vcardtheme, setvcardtheme] = useState(getThemelocalStorage())
   const [servicedetails, setservicedetails] = useState([]);
   const [paymentDetails, setPaymentDetails] = useState([]);
  const url = "http://localhost:1000/api";

  console.log(user)

   useEffect(() => {
    localStorage.setItem("theme" , vcardtheme)
   }, [vcardtheme])

 
  
 

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
        // console.log(api)
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

  // add profile img
  const AddProfile = async (p) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append('file', p);

    try {
 
      const api = await axios.post(`${url}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Auth":token
        }
      });
      
   console.log(api);
   setreload(!reload)
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

   return api
    } catch (err) {
      console.error(err);
    }
  };
  
  // update profile information
 const updateProfile = async (id, name, email, phone, address) => {
  try {
    const api = await axios.put(
      `
      ${url}/user/update/${id}`,
      {
        name,
        email,
        phone,
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
      autoClose: 2000,
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
 

  const deleteProfileimg = async ()=>{
    try {
      const api =await axios.delete(`${url}/deleteimage`,{headers:{
        "Content-Type":"Application/json",
        "Auth":token
      }})
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
      setreload(!reload)
      return api
    } catch (error) {
      console.log(error);
    }
  }

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
      // console.log(api)
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
      console.log(api , "register");
      console.log(api)
      return api.data
      
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
  // fetch company
    // fetch company by userid
    useEffect(() => {
      const getCompanyByUserId = async (userId) => {
        try {
          const api = await axios.get(
            `
          ${url}/companies/getcompanybyuserid/${userId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Auth: token,
              },
              withCredentials: true,
            }
          );
          // console.log("company", api);
          // console.log(api , "company")
          if (api.data.company) {
            // console.log(api.data.company)
            setcompanyDetails(api.data.company);
          } else {
            setcompanyDetails([]);
          }
          // return api.data;
        } catch (error) {
          console.log(error.message);
        }
      };
      getCompanyByUserId(userId);
    }, [token, reload, userId]);


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

  
 

  
  // Services page
  const addService = async (title, description, imageFile) => {
    try {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('title', title);
      formData.append('description', description);
  
      const response = await axios.post(`${url}/service/addservices`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Auth': token // Assuming you have token for authentication
        },
        withCredentials: true // Optional, depending on your CORS policy
      });
  
      console.log(response.data.message); // Log success message from backend
      setreload(!reload)
      toast.success(response.data.message, {
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
      return response.data.service; // Optionally return the created service object
    } catch (error) {
      console.error('Error while adding service:', error.message);
      throw error; // Rethrow the error for further handling in the UI
    }
  };
  
  // 
  // Fetch services by userId on initial load and reload
  useEffect(() => {
    const getServiceByuserId = async (userid) => {
      try {
        const api = await axios.get(
          `${url}/service/getservicesbyUserId/${userid}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Auth: token,
            },
            withCredentials: true,
          }
        );
        if (api.data.services) {
          setservicedetails(api.data.services);
        } else {
          setservicedetails([]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getServiceByuserId(userId);
  }, [token, userId, reload]);

  // update service
  const updateService = async (id, title, description ,servicesimage) => {
    try {
      const formData = new FormData();
      formData.append('file', servicesimage);
      formData.append('title', title);
      formData.append('description', description);
      const api = await axios.put(
        `
        ${url}/service/updateservicesbyid/${id}`,
      formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
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
  const addPayment = async ( bank,
    upi,
    accountNumber,
    ifscCode,
    paytm,
    phonePe,
    googlePay,
    qrcode,) => {
    try {
      const api = await axios.post(
        `
        ${url}/payments/addpayment`,
        {
          bank,
          upi,
          accountNumber,
          ifscCode,
          paytm,
          phonePe,
          googlePay,
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

  // FETCH PAYMENT DETAILS BY USER ID
  
  useEffect(() => {
    const fetchPaymentByUserId = async () => {
      try {
        const response = await axios.get(
          `${url}/payments/getpaymentByUserID/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Auth: token,
            },
            withCredentials: true,
          }
        );
        if (response.data.payment) {
          setPaymentDetails(response.data.payment);
        } else {
          setPaymentDetails([]);
        }
      } catch (error) {
        console.error("Error fetching payment details:", error.message);
      }
    };

    fetchPaymentByUserId();
  }, [token, userId, reload]);

  // update payment
  const updatePayment = async (id, 
    bank,
    upi,
    accountNumber,
    ifscCode,
    paytm,
    phonePe,
    googlePay,
    qrcode,) => {
    try {
      const api = await axios.put(
        `
        ${url}/payments/updatepayment/${id}`,
        {
          bank,
          upi,
          accountNumber,
          ifscCode,
          paytm,
          phonePe,
          googlePay,
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
  // 
   // fetch Appointment by User Id
   useEffect(() => {
    const getAppointmentByUserId = async (userId) => {
      try {
        const api = await axios.get(
          `
        ${url}/appointment/userid/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Auth: token,
            },
            withCredentials: true,
          }
        );
        // console.log(api);
        if (api.data.appointment) {
          setappointmentDetails(api.data.appointment);
        } else {
          setappointmentDetails([]);
        }
        // return api.data;
      } catch (error) {
        console.log(error.message);
      }
    };
    getAppointmentByUserId(userId);
  }, [token, reload, userId]);

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
  // 
  useEffect(() => {
    const getSocialMediaByUserId = async (userId) => {
      try {
        const api = await axios.get(
          `
        ${url}/socialmediabyuserid/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Auth: token,
            },
            withCredentials: true,
          }
        );
        // console.log(" user", api);
        if (api.data.media) {
          setUserdetails(api.data.media);
        } else {
          setUserdetails([]);
        }

        // return api.data;
      } catch (error) {
        console.log(error.message);
      }
    };
    getSocialMediaByUserId(userId);
  }, [token, reload, userId]);

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
       
        addService,
        updateService,
        deleteService,
        url,
        userId,
        reload,
        setreload,
        token,
        setToken,
        logout,
        userdetails,
         setUserdetails,
         companyDetails,
         setcompanyDetails,
         appointmentDetails,
         setappointmentDetails,
         setvcardtheme,
         vcardtheme,
         servicedetails, 
         setservicedetails,
         setPaymentDetails,
         paymentDetails,
         AddProfile,
         updateProfile,
         deleteProfileimg
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default Appstate;
