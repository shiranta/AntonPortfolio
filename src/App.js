import React from 'react';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {
  const name = "Your Name";
  const bio = "A passionate React developer who loves building beautiful UIs.";
  const skills = ["React", "JavaScript", "HTML", "CSS", "Git"];
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About name={name} bio={bio} skills={skills} /></section>
      <section id="projects"><Projects /></section>
    </div>
  );
}

export default App;

