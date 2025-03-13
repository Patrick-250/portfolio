import React from "react";
import "./Experience.css";

const Experience = () => (
  <section>
    <h2>Experience</h2>
    <div className="experience-item">
      <h3>Front End Engineer</h3>
      <p>Quality Living Inc. | Omaha, NE | May 2024 – Present</p>
      <ul>
        <li>
          Leveraged expertise as Software Engineer to ensure robust performance
          and scalability across the systems, contributing to maintenance and
          enhancement of user-friendly platform built in React. Managed hosting,
          deployment, and backend logic improvements with Node.js and Express.
        </li>
        <li>
          Developed and optimized webpages using React, Redux, and SQL
          integration via RESTful APIs developed with Express.
        </li>
        <li>
          Migrated from React Class to functional components using Hooks,
          improving page load speed by almost 2x faster.
        </li>
        <li>Created tests with Vitest to ensure platform reliability.</li>
        <li>
          Developed healthcare platform for medical equipment and rehab tools
          with React.js, Redux, and TypeScript, optimized for mobile and desktop
          platforms with media query, flex box and grid on react components.
        </li>
        <li>
          Established network of 100+ insurance payers to enhance cost
          efficiency and easy tracking of different payer sources.
        </li>
        <li>
          Developed tool to compare medical expenses and equipment costs,
          aligning with cost-effective care.
        </li>
        <li>
          Provided advanced feedback system for families and healthcare teams to
          share recovery progress and documents.
        </li>
        <li>
          Mentored junior developers about best practices and agile methodology
          decreasing features delivery time from months to weeks.
        </li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>Coding Expert for AI Training</h3>
      <p>Scale AI, via Outlier | Remote, US | Jan 2022 – Apr 2024</p>
      <ul>
        <li>
          Used prompt engineering skills to craft and answer questions related
          to software engineering; enhancing accuracy of generative AI models.
        </li>
        <li>
          Evaluated and ranked different AI-generated code in Java, Python,
          JavaScript/TypeScript, providing detailed feedback to improve the
          quality, functionality and addressed security issues in code generated
          by models.
        </li>
        <li>
          Maintained attention to detail in grammar, punctuation, and style
          guidelines, ensuring clarity and professionalism in all code examples
          and prompts.
        </li>
        <li>
          Collaborated extensively with machine learning experts to enhance the
          AI's ability to understand and generate code, improving model
          performance.
        </li>
        <li>
          Participated in regular discussions aimed at reducing biases and
          promoting fairness in AI-generated codes.
        </li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>Backend Developer</h3>
      <p>Breezend Technologies | Remote, US | May 2019 – Mar 2022</p>
      <ul>
        <li>
          Contributed to optimization of a scalable eCommerce platform mainly as
          a Backend Developer, focusing on building and maintaining REST APIs,
          improving system performance.
        </li>
        <li>
          Developed 15+ REST APIs for sellers' CRUD operations to manage
          listings, handle orders, and interact with inventory using Java and
          Spring Boot framework in the first month.
        </li>
        <li>
          Modernized Legacy APIs to OpenAPI Schema 3 RESTful APIs standard
          format to describe request parameters, responses, authentication
          methods optimizing overall system architecture.
        </li>
        <li>
          Created unit tests to verify many individual parts of the application
          including adding products to the cart, calculating discounts.
        </li>
        <li>
          Utilized Mockito to test business logics mock external services,
          including inventory management systems.
        </li>
        <li>
          Enhanced security measures with Spring Security with JWT-based
          authentication and encryption to protect sensitive data.
        </li>
        <li>
          Implemented CI/CD pipelines, automating testing and deployment for
          faster feature delivery, and ensure zero downtime during high traffic
          promotions time.
        </li>
        <li>
          Utilized Splunk for logging, performance monitoring, and error
          tracking.
        </li>
        <li>
          Implemented Elasticsearch to enhance product search functionalities,
          enabling fast, accurate search based on keywords.
        </li>
      </ul>
    </div>
  </section>
);

export default Experience;
