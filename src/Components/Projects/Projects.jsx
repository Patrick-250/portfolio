import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./Projects.css";

const Projects = () => {
  const [showVideo, setShowVideo] = useState(false); // State to toggle video visibility

  return (
    <section className="projects">
      <h2 style={{ color: "#2589bd" }}>Projects</h2>

      <div>
        <h3>1. ELITESPACE</h3>
        <p style={{}}>
          A smart apartment tenant portal that solve the issues related to
          tenant experience and tenant retention for apartment companies.
        </p>
        <h4>Features</h4>
        <ul className="features-list">
          <li>Digital lease signing &amp; renewals within the app.</li>
          <li>
            Control smart locks &amp; Automated access control for guests
            (generate temporary digital keys).
          </li>
          <li>
            Easy one-tap reporting for noise complaints or neighbor
            disturbances.
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
            setShowVideo(true);
          }}
        >
          Live Demo
        </button>
        {showVideo && (
          <div style={{ marginTop: "20px" }}>
            <IoCloseCircleOutline />
            <iframe
              src="https://drive.google.com/file/d/1P3ZVYZTXRl1ZPiTJlgmxVShzRpoMmV-X/preview"
              title="Live Demo Video"
              width="100%"
              height="500px"
              allow="autoplay"
              style={{ border: "none" }}
            ></iframe>
          </div>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();

            window.location.href = "https://elitespace.netlify.app/"; // Redirect to the link after alert
          }}
        >
          Link
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://github.com/Patrick-250/Elitespace-frontend"; // Redirect to the GitHub repository
          }}
        >
          GitHub
        </button>
      </div>

      <div>
        <h3>2. ECHOVIBE</h3>
        <h4>Features</h4>
        <ul className="features-list">
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
            like live chats and user interactions to create a sense of
            belonging.
          </li>
          <li>
            Your Vibe. Your Stage: The app allows users to express themselves
            and create a unique experience.
          </li>
        </ul>
        <button
          onClick={(e) => {
            e.preventDefault();
            alert("Coming soon!.....");
          }}
        >
          Live Demo
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            alert("Coming soon!......");
          }}
        >
          Link
        </button>

        <button
          onClick={(e) => {
            window.location.href =
              "https://github.com/Patrick-250/Echovibe-frontend";
          }}
        >
          GitHub
        </button>
      </div>
    </section>
  );
};

export default Projects;
