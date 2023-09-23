import React from "react";
import { Link } from "react-router-dom";
import MetaMaskConnect from "./MetaMaskConnect";

const Navbar = () => {
  const navbarStyle = {
    marginTop: "15px",
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-3 px-5 ">
        <div className="span6">
          <h1 className="muted">CertifyMe</h1>
        </div>

        <div className="span4 offset2" style={navbarStyle}>
          <MetaMaskConnect />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
