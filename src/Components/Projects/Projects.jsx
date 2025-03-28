import React from "react";
import "./Projects.css";

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <p style={{ color: "#a4b8c4" }}>
      My passion for Software engineering pushes me to be innovative with
      cutting-edge technology. As a software engineer, I see the development
      process as an ongoing journey—one that thrives on continuous growth and
      adaptation. Every project is an opportunity to push boundaries and shape
      technology that evolves with the future.
    </p>
    <div>
      <h3>1. ELITESPACE</h3>
      <p style={{ color: "#fcfafa" }}>
        A smart apartment tenant portal that solve the issues related to tenant
        experience and tenant retention for apartment companies.
      </p>
      <h4>Features</h4>
      <ul>
        <li>Digital lease signing &amp; renewals within the app.</li>
        <li>
          Control smart locks &amp; Automated access control for guests
          (generate temporary digital keys).
        </li>
        <li>
          Easy one-tap reporting for noise complaints or neighbor disturbances.
        </li>
        <li>
          AI-based detection of repeated complaints and escalation to
          management.
        </li>
        <li>Smart package locker integration for secure pickup.</li>
        <li>Temporary guest parking permits issued via the app.</li>
      </ul>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://elitespace.netlify.app/";
        }}
      >
        Live Demo
      </button>
      <button
        onClick={(e) => {
          window.location.href =
            "https://github.com/Patrick-250/Patrick-250-EliteSpace-v2/tree/master";
        }}
      >
        GitHub
      </button>
    </div>

    <div>
      <h3>2. ECHOVIBE</h3>
      <h4>Features</h4>
      <ul>
        <li>
          Live Streaming/Go Live: ability for users to broadcast their content
          to others in the app.
        </li>
        <li>
          Music and Movie Sharing: Users can share music and movies, and allow
          others to listen or watch along.
        </li>
        <li>Real-Time Chat: A feature for users to chat in real time.</li>
        <li>
          Community Building: building a community through social interactions
          like live chats and user interactions to create a sense of belonging.
        </li>
        <li>
          Your Vibe. Your Stage: The app allows users to express themselves and
          create a unique experience.
        </li>
      </ul>
      <button
        onClick={(e) => {
          e.preventDefault();
          alert(
            "Note that some functionalities won't be available as I am using a free third party tier to host this."
          );
          window.location.href =
            "https://echovibe-frontend-ex5ysmgiw-patrick-tuyiringires-projects.vercel.app/"; // Redirect to the link after alert
        }}
      >
        Live Demo
      </button>
      <button
        onClick={(e) => {
          window.location.href =
            "https://github.com/Patrick-250/Echovibe-frontend"; // Redirect to the link after alert
        }}
      >
        GitHub
      </button>
    </div>
  </section>
);

export default Projects;
