import React from "react";
import SignUpForm from "../components/Forms/SignUpStuForm";
import SignUpAdminFm from "../components/Forms/SignUpAdminFm";
import Navbar from "../components/Navbar";

const Singup = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="row">
      <div className="col-md-6">
        <SignUpForm />
      </div>

      <div className="col-md-6">
        <SignUpAdminFm />
      </div>
    </div>
    </div>
    
  );
};

export default Singup;
