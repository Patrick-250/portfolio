import React, { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";
import "./Contacts.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server or email service)
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-page">
      <h2>Contacts</h2>
      <div className="contact-container">
        <p style={{ color: "white" }}>
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
      {/* <a
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
          color: "white",
        }}
      >
        Download My Resume
        <FaFileDownload
          className="download-icon"
          style={{
            marginLeft: "5px",
            color: "white",
          }}
        />
      </a> */}

      {/* Contact Form */}
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        style={{
          marginTop: "30px",
          width: "50%",
        }}
      >
        <h3 style={{ color: "white" }}>Send Me a Message</h3>
        <div>
          <label style={{ color: "white" }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px",
              width: "100%",
              color: "white", // Text color
              backgroundColor: "transparent", // Transparent background
              border: "1px solid white", // White border
              outline: "none",
            }}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label style={{ color: "white" }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px",
              width: "100%",
              color: "white", // Text color
              backgroundColor: "transparent", // Transparent background
              border: "1px solid white", // White border
              outline: "none",
            }}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label style={{ color: "white" }}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px",
              width: "100%",
              color: "white", // Text color
              backgroundColor: "transparent", // Transparent background
              border: "1px solid white", // White border
              outline: "none",
            }}
            placeholder="Enter your message"
          />
        </div>
        <button type="submit" className="send-button" style={{}}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
