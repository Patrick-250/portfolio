import React from "react";
import "./Experience.css";

const Experience = () => (
  <section>
    <h2>Experience</h2>
    <div className="experience-item">
      <h3>Software Developer</h3>
      <p>Quality Living Inc. | Omaha, NE | May 2024 – Present</p>
      <ul>
        <li>
          working on development and improvement of in-house software
          applications developed in different stacks, enhancing efficiency
          across Company's departments.
        </li>
        <li>
          Reduced bugs and loading times by 20% through proactive
          troubleshooting and maintenance of React.js applications.
        </li>
        <li>
          Integrated machine learning algorithms with TensorFlow to boost
          decision-making processes by 25%.
        </li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>Coder and AI Consultant</h3>
      <p>Scale AI Outlier | Remote, US | Dec 2022 – May 2024</p>
      <ul>
        <li>
          Developed and trained generative AI models using PyTorch, improving
          model accuracy by 30%.
        </li>
        <li>
          Created coding prompts to test AI models and optimize interactions
          using Scikit-learn.
        </li>
        <li>
          Enhanced AI-based performance tracking systems through targeted
          feedback loops using Python.
        </li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>Fullstack Developer Intern</h3>
      <p>Society of Scholars | Remote, US | May 2020 – Dec 2020</p>
      <ul>
        <li>
          Implemented innovative features like personalized learning paths and
          progress tracking; Improved user experience with AI-powered real-time
          suggestions, boosting course completion rates by 18%.
        </li>
        <li>
          Used Docker to containerize the application, ensuring consistent
          deployment across different environments.
        </li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>Back-End Software Engineer</h3>
      <p>Andela | Kigali, Rwanda | May 2016 – Aug 2018</p>
      <ul>
        <li>
          Redesigned application modules using Flask and deployed on AWS,
          improving performance and reducing response time.
        </li>
        <li>
          Performed CRUD operations with Django ORM and integrated with
          PostgreSQL database.
        </li>
        <li>
          Worked on CI/CD pipelines with Azure DevOps and Docker to automate
          deployments.
        </li>
      </ul>
    </div>
  </section>
);

export default Experience;
