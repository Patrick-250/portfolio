import React from "react";
import "./About.css";

const About = () => (
  <div className="about_me">
    <section>
      <h2 style={{ color: "white" }}>About Me</h2>
      <p style={{ color: "white" }}>
        Software Engineer with experience in full-stack development,Systems
        optimization, and cloud computing. My overall career goal is To lead
        innovative projects in artificial intelligence and cloud computing, and
        to contribute to building cutting-edge solutions that solve real-world
        problems.
      </p>
    </section>
    <div className="about_me_tags">
      <div className="about_me_tags_list">
        <h3 style={{ color: "white", marginBottom: "5px" }}>Interests</h3>
        <p>Software Development</p>
        <p>Cloud Computing</p>
        <p>Artificial Intelligence</p>
        <p>Data Science</p>
      </div>
      <div className="about_me_tags_list">
        <h3 style={{ color: "white" }}>Certifications</h3>
        <p style={{ color: "white" }}>Generative AI Engineer, Databricks</p>
        <p style={{ color: "white" }}>AWS Certified Solutions Architect, AWS</p>
        <p style={{ color: "white" }}>Creative Skills - For Creatives, Adobe</p>
      </div>
      <div className="about_me_tags_list">
        <h3 style={{ color: "white" }}>Education</h3>
        <p style={{ color: "white" }}>
          Bachelor of Science , University of Nebraska Lincoln, 2022
        </p>
        <p style={{ color: "white" }}>
          Master of Science in Computer Science, Arizona State University, 2025
        </p>
      </div>

      <div className="about_me_tags_list">
        <h3 style={{ color: "white" }}>Hobbies</h3>

        <p> Video games</p>
        <p>Musics</p>
        <p>sport/Soccer</p>
        <p>movies</p>
      </div>
    </div>
  </div>
);

export default About;
