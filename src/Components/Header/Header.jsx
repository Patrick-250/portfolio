import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <img className="profile-logo" src={logo} alt="logo"></img>
        </a>
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
    </header>
  );
};

export default Header;
