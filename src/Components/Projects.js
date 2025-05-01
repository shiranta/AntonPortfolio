import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "Personal site built with React and hosted on AWS.",
      link: "https://your-portfolio-link.com",
    },
    {
      title: "Job Tracker App",
      description: "Tracks jobs applied for, built with Firebase.",
      link: "https://your-job-tracker-link.com",
    },
    {
      title: "Weather Dashboard",
      description: "Shows real-time weather using an open API.",
      link: "https://your-weather-app-link.com",
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
