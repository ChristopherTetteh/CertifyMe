import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        {/* Add your banner image here */}
        <img src="./graduation.jpg" alt="Banner" />
      </div>
      <div className="button-links">
        <a href="/about-us" className="button-link">About Us</a>
        <a href="/our-mission" className="button-link">Our Mission</a>
        <a href="/contact" className="button-link">Contact</a>
      </div>
    </div>
  );
};

export default Home;
