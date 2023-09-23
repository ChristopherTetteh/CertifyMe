import React from 'react';
import { Link } from 'react-router-dom';
import MetaMaskConnect from './MetaMaskConnect';

const Navbar = () => {
  const navbarStyle = {
    marginTop: '15px',
  };

  return (
    <div className="container">
      <div className="row">
        <div className="span12">
          <div className="head">
            <div className="row-fluid">
              <div className="span12">
                <div className="span6">
                  <h1 className="muted">CertifyMe</h1>
                </div>

                <div className="span4 offset2" style={navbarStyle}>
                 <MetaMaskConnect />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
