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
    <div className="contact-container">
      <p style={{ color: "black" }}>
        I am always open to new opportunities and collaborations. Feel free to
        reach out to me through any of the platforms below:{" "}
      </p>

      <a
        href="mailto:tpatrickrumanzi@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope className="contact-icon" style={{ color: "white" }} />
      </a>
      <a
        href="https://linkedin.com/in/patricktuyiringirerumanzi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="contact-icon" style={{ color: "white" }} />
      </a>
      <a
        href="https://github.com/Patrick-250"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="contact-icon" style={{ color: "white" }} />
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
        color: "black",
      }}
    >
      Download My Resume
      <FaFileDownload
        className="download-icon"
        style={{
          marginLeft: "5px",

          color: "black",
        }}
      />
    </a>
  </section>
);

export default Contact;
