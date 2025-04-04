import React from "react";
import "./Skills.css";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGit,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSpring,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiJenkins,
  SiMicrosoftazure,
  SiGooglecloud,
} from "react-icons/si";

const Skills = () => (
  <section className="skill-page">
    <h2 style={{ color: "white" }}>Skills</h2>
    <div className="skills-category">
      <ul className="skills-list">
        <li>
          <FaJava className="devicon" title="Java" />
          <span>Java</span>
        </li>
        <li>
          <FaPython className="devicon" title="Python" />
          <span>Python</span>
        </li>
        <li>
          <FaJs className="devicon" title="JavaScript" />
          <span>JavaScript</span>
        </li>
        <li>
          <SiTypescript className="devicon" title="TypeScript" />
          <span>TypeScript</span>
        </li>
        <li>
          <SiSpring className="devicon" title="Spring Boot" />
          <span>Spring Boot</span>
        </li>
        <li>
          <FaReact className="devicon" title="React" />
          <span>React</span>
        </li>
        <li>
          <FaNodeJs className="devicon" title="Node.js" />
          <span>Node.js</span>
        </li>
        <li>
          <SiDjango className="devicon" title="Django" />
          <span>Django</span>
        </li>
        <li>
          <SiRedux className="devicon" title="Redux" />
          <span>Redux</span>
        </li>
        <li>
          <FaGit className="devicon" title="Git" />
          <span>Git</span>
        </li>
        <li>
          <SiNextdotjs className="devicon" title="Next.js" />
          <span>Next.js</span>
        </li>

        <li>
          <SiMysql className="devicon" title="MySQL" />
          <span>MySQL</span>
        </li>
        <li>
          <SiPostgresql className="devicon" title="PostgreSQL" />
          <span>PostgreSQL</span>
        </li>
        <li>
          <SiMicrosoftazure className="devicon" title="Azure DevOps" />
          <span>Azure DevOps</span>
        </li>
        <li>
          <SiJenkins className="devicon" title="CI/CD" />
          <span>CI/CD</span>
        </li>

        <li>
          <FaAws className="devicon" title="AWS" />
          <span>AWS</span>
        </li>

        <li>
          <SiMongodb className="devicon" title="MongoDB" />
          <span>MongoDB</span>
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
