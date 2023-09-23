import React from 'react';
import { Link } from 'react-router-dom';

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
                  <button className="btn pull-right" type="button">
                    Sign Up
                  </button>

                  <button className="btn pull-right" type="button">
                    Sign In
                  </button>

                </div>
              </div>
            </div>

            <div className="navbar">
              <div className="navbar-inner">
                <div className="container">
                  <nav className="nav">
                

                      <Link to='/Schools'>
                        Schools
                      </Link>

                    
                      <Link to='/AddQualifications'>
                        AddQualifications
                      </Link>

                      <Link to='/ViewingofCertificate'>
                        Viewing of Certificate
                      </Link>

                      <Link to='/ControlPrivacy'>
                        Control Privacy
                      </Link>
                  </nav>
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
