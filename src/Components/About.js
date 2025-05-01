import React from 'react';
import './About.css';

function About({ name, bio, skills }) {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p><strong>{name}</strong> - {bio}</p>
      <h3>Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>✅ {skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
