import React from "react";
import PersonalDetails from "./PersonalDetails";
import ProductDetails from "./ProductDetails";
import AppointMent from "./AppointMent";
import PaymentInformation from "./PaymentInformation";
import ContactPage from "./ContactPage";
import Footer from "./Footer";

const AshishHome = () => {
  return (
    <div>
      <PersonalDetails />
      <ProductDetails />
      <PaymentInformation />
      <AppointMent />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default AshishHome;
