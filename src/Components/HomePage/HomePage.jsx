import "./Homepage.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
function HomePage() {
  return (
    <div className="home-page">
      <h1>Hey, I'm Patrick</h1>

      <p>Software Engineer</p>
      <hr />

      <div className="contact-linkss">
        <a
          href="mailto:tpatrickrumanzi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="contact-icon" />
        </a>
        <a
          href="https://linkedin.com/in/patricktuyiringirerumanzi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" />
        </a>
        <a
          href="https://github.com/Patrick-250"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="contact-icon" />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
