import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";
import "./Contacts.css";

const Contact = () => (
  <section>
    <h2>Contacts</h2>
    <div className="contact-links">
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
    <a
      href="/Resume.docx"
      download="Patrick_Resume.docx"
      className="resume-link "
      style={{
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        marginTop: "20px",
      }}
    >
      Download My Resume
      <FaFileDownload className="download-icon" style={{ marginLeft: "5px" }} />
    </a>
  </section>
);

export default Contact;
