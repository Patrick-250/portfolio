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
      <h3>Modern Fullstack Media and Chat Application</h3>
      <p>
        Developed a modern chat application similar to Facebook using React.js,
        Redux, Node.js,Mysql and Socket.io for real-time communication.
      </p>
      <a
        href="https://chat-app-ydrz.vercel.app/"
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
        href="https://inventory-tracking.example.com"
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
        href="https://hospital-housing.example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </a>
    </div>
  </section>
);

export default Projects;
