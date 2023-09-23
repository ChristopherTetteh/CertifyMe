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
      
    </div>
  );
};

export default Home;
