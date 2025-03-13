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
  SiSqlite,
  SiKubernetes,
  SiJenkins,
  SiMicrosoftazure,
  SiGooglecloud,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiFlask,
} from "react-icons/si";

const Skills = () => (
  <section>
    <h2>Skills</h2>
    <div className="skills-category">
      <h3>Programming Languages and Tools</h3>
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
          <SiHtml5 className="devicon" title="HTML" />
          <span>HTML</span>
        </li>
        <li>
          <SiCss3 className="devicon" title="CSS" />
          <span>CSS</span>
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
          <FaDocker className="devicon" title="Docker" />
          <span>Docker</span>
        </li>
        <li>
          <FaAws className="devicon" title="AWS" />
          <span>AWS</span>
        </li>
        <li>
          <SiGooglecloud className="devicon" title="GCP" />
          <span>GCP</span>
        </li>
        <li>
          <SiKubernetes className="devicon" title="Kubernetes" />
          <span>Kubernetes</span>
        </li>
        <li>
          <SiMongodb className="devicon" title="MongoDB" />
          <span>MongoDB</span>
        </li>
        <li>
          <SiSqlite className="devicon" title="SQLite" />
          <span>SQLite</span>
        </li>
        <li>
          <SiTensorflow className="devicon" title="TensorFlow" />
          <span>TensorFlow</span>
        </li>
        <li>
          <SiPytorch className="devicon" title="PyTorch" />
          <span>PyTorch</span>
        </li>
        <li>
          <SiScikitlearn className="devicon" title="Scikit-learn" />
          <span>Scikit-learn</span>
        </li>
        <li>
          <SiPandas className="devicon" title="Pandas" />
          <span>Pandas</span>
        </li>
        <li>
          <SiNumpy className="devicon" title="NumPy" />
          <span>NumPy</span>
        </li>
        <li>
          <SiFlask className="devicon" title="Flask" />
          <span>Flask</span>
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
