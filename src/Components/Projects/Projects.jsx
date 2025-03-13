import React from "react";
import "./Projects.css";

const Projects = () => (
  <section>
    <h2>Projects</h2>
    <p>
      In addition to cooporates projects i worked on, Below are some of my
      personal projects I have worked on, showcasing my skills in full-stack
      development. These projects demonstrate my ability to build scalable and
      robust applications using modern technologies. Please note that these
      projects are privately hosted on github due to confidentiality, but I am
      happy to provide more details or a demonstration upon request.
    </p>
    <div>
      <h3>ELITESPACE</h3>
      <h4>faeatures</h4>
      <ul>
        <li> Digital lease signing &amp; renewals within the app.</li>
        <li>Control smart locks &amp; Automated access control for guests (generate temporary digital keys).</li>
        <li> Easy one-tap reporting for noise complaints or neighbor disturbances.</li>
        <li> AI-based detection of repeated complaints and escalation to management.</li>
        <li> Digital lease signing &amp; renewals within the app.</li>
        <li>Smart package locker integration for secure pickup</li>
        <li>Temporary guest parking permits issued via the app.</li>
        
      
      </ul>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </a>
    </div>
    <div>
      <h3>Company Inventory Tracking Application</h3>
      <p>
        Built an inventory tracking system with React.js,Node Js and PostgreSQL,
        enabling efficient management and tracking of company assets.
      </p>
      <a
        href="https://inventory-tracking.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </a>
    </div>
    <div>
      <h3>Hospital Housing Management System</h3>
      <p>
        Developed a hospital housing management system using React.js, Flask,
        and MongoDB to manage housing and room allocations and track occupancy.
      </p>
      <a
        href="https://hospital-housing.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </a>
    </div>
  </section>
);

export default Projects;
