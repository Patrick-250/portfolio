import React, { useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import { IoLogoWechat } from "react-icons/io5";
import logo from "../../assets/images/profilelogo.png";

import {
  FaLinkedinIn,
  FaTwitter,
  FaBars,
  FaTimes,
  FaUserAlt,
  FaCogs,
  FaBriefcase,
  FaLaptopCode,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="profile-container">
        <a href="/">
          <img className="profile-logo" src={logo} alt="logo" />
        </a>
        {/*<span class="tooltip-text">return to home</span>*/}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/about">
          <FaUserAlt className="nav-icon" /> Who I Am
        </Link>
        <Link to="/projects">
          <FaLaptopCode className="nav-icon" /> What I've Built
        </Link>
        <Link to="/skills">
          <FaCogs className="nav-icon" /> Stack Behind My Work
        </Link>
        <Link to="/experience">
          <FaBriefcase className="nav-icon" /> Work History
        </Link>

        <Link to="/contact">
          <FaEnvelope className="nav-icon" /> Get in Touch
        </Link>
      </nav>
      <div className="social-media-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a href="mailto:your-email@example.com">
          <HiOutlineMail />
        </a>
      </div>
      <div className="chat-me-container">
        <Link to="/chat">
          <IoLogoWechat
            className="chat-with-me-icon"
            style={{
              color: "white",
              fontSize: "60px",
              marginRight: "20px",
            }}
          />
        </Link>

        <span
          style={{ color: "white", fontSize: "10px" }}
          className="Chat-icon-text"
        >
          {" "}
          Ask Me About Me{" "}
        </span>
      </div>
    </header>
  );
};

export default Header;
