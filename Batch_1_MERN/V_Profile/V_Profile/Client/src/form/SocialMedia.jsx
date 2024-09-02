import React, { useContext, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from '../context/App_context';
import { useNavigate } from 'react-router-dom';

const SocialMediaForm = () => {
  const navigate =useNavigate()
  const [whatsApp, setWhatsApp] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [Skype, setSkype] = useState("");
  const [Discord, setDiscord] = useState("");
  const [Linkdin, setLinkdin] = useState("");
  const [Website, setWebsite] = useState("");
  const [location, setLocation] = useState("");

  const data = useContext(AppContext)
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("response=== ")
    // Handle form submission logic here
    // console.log('Social Media Links:', socialMediaLinks);
    const res = await data.SocialMedia(whatsApp, email, facebook, instagram, twitter,Skype,Discord,Linkdin,Website,location)
    console.log("response=== ",res)
    toast.success(res.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/home ");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Social Media Links</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsApp">
              WhatsApp:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="whatsApp"
              value={whatsApp}
              onChange={(e) => setWhatsApp(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Facebook */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="facebook">
              Facebook:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="facebook"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>

          {/* Instagram */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instagram">
              Instagram:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">
              Twitter:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="twitter"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">
              Skype:
            </label>
            <input  
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="Skype"
              value={Skype}
              onChange={(e) => setSkype(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">
              Discord:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="Discord"
              value={Discord}
              onChange={(e) => setDiscord(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">
              linkdin:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="Linkdin"
              value={Linkdin}
              onChange={(e) => setLinkdin(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">
            Website:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="Website"
              value={Website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitter">
            location:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SocialMediaForm;
