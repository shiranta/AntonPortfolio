import React from 'react';
import './Home.css'; // Create this file for styling

function Home() {
  return (
    <div className="home-container">
      <img
        src="/assets/anton.png"
        alt="Anton"
        className="profile-pic"
      />
      <h1>Anton Fonseka</h1>
      <h2>Frontend Developer | React Enthusiast</h2>
    </div>
  );
}

export default Home;
