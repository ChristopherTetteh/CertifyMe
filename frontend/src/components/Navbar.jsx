import React from 'react';

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
                  <ul className="nav">
                    <li>
                      <a href="#">About</a>
                    </li>

                    <li>
                      <a href="#">Schools</a>
                    </li>

                    <li>
                      <a href="#">Add Qualifications</a>
                    </li>

                    <li>
                      <a href="#">Viewing of Certificate</a>
                    </li>

                    <li>
                      <a href='#'>Control Privacy</a>
                    </li>
                  </ul>
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
