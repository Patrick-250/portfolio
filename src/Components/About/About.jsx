import React from "react";
import "./About.css";

const About = () => (
  <div>
    <section>
      <h2 style={{ color: "white" }}>About Me</h2>
      <p style={{ color: "white" }}>
        Software Engineer with experience in full-stack development,Systems
        optimization, and cloud computing.
      </p>
    </section>
    <div className="about_me_tags">
      <div className="about_me_tags_list">
        <h3 style={{ color: "white" }}>Interests</h3>
        <p>Software Development</p>
        <p>Cloud Computing</p>
        <p>Artificial Intelligence</p>

        <p>Data Science</p>
      </div>
      <div className="">
        <h3 style={{ color: "white" }}>Education</h3>
        <p style={{ color: "white" }}>
          Bachelor of Science , University of Nebraska Lincoln, 2022
        </p>
      </div>
    </div>
  </div>
);

export default About;
