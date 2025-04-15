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
  SiOpenai,
} from "react-icons/si";

const Skills = () => (
  <section className="skill-page">
    <h2 style={{ color: "white" }}>Skills</h2>
    <div className="skills-category">
      <h3>Programming Languages</h3>
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
      </ul>

      <h3>Frameworks & Libraries</h3>
      <ul className="skills-list">
        <li>
          <SiSpring className="devicon" title="Spring Boot" />
          <span>Spring Boot</span>
        </li>
        <li>
          <FaReact className="devicon" title="React" />
          <span>React</span>
        </li>
        <li>
          <SiRedux className="devicon" title="Redux" />
          <span>Redux</span>
        </li>
        <li>
          <SiNextdotjs className="devicon" title="Next.js" />
          <span>Next.js</span>
        </li>
        <li>
          <FaNodeJs className="devicon" title="Node.js" />
          <span>Node.js</span>
        </li>
        <li>
          <SiDjango className="devicon" title="Django" />
          <span>Django</span>
        </li>
      </ul>

      <h3>Databases</h3>
      <ul className="skills-list">
        <li>
          <SiMysql className="devicon" title="MySQL" />
          <span>MySQL</span>
        </li>
        <li>
          <SiPostgresql className="devicon" title="PostgreSQL" />
          <span>PostgreSQL</span>
        </li>
        <li>
          <SiMongodb className="devicon" title="MongoDB" />
          <span>MongoDB</span>
        </li>
      </ul>

      <h3>DevOps & Cloud</h3>
      <ul className="skills-list">
        <li>
          <FaGit className="devicon" title="Git" />
          <span>Git</span>
        </li>
        <li>
          <FaDocker className="devicon" title="Docker" />
          <span>Docker</span>
        </li>
        <li>
          <SiKubernetes className="devicon" title="Kubernetes" />
          <span>Kubernetes</span>
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
          <SiMicrosoftazure className="devicon" title="Azure DevOps" />
          <span>Azure DevOps</span>
        </li>
      </ul>

      <h3>Generative AI</h3>
      <ul className="skills-list">
        <li>
          <SiOpenai className="devicon" title="OpenAI API" />
          <span>OpenAI API</span>
        </li>
        <li>
          <span className="devicon" title="LangChain">
            🔗
          </span>
          <span>LangChain</span>
        </li>
        <li>
          <span className="devicon" title="RAG">
            📚
          </span>
          <span>Retrieval-Augmented Generation (RAG)</span>
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
