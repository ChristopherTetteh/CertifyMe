import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{width: "100%", height: "90vh"}}>
        {/* Add your banner image here */}
        <img src="./graduation.jpg" alt="Banner" className='w-100 h-90'/>
      </div>
      
    </div>
  );
};

export default Home;
