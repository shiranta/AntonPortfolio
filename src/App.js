import React from 'react';
import Home from './Components/Home.js';
import About from './Components/About.js';

function App() {
  const name = "Your Name";
  const bio = "A passionate React developer who loves building beautiful UIs.";
  const skills = ["React", "JavaScript", "HTML", "CSS", "Git"];
  return (
    <div className="App">
      <Home />
      <About name={name} bio={bio} skills={skills} />
    </div>
  );
}

export default App;

