import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/profilelogo.png";

import { FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

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
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="social-media-icons">
        <FaTwitter />
        <FaLinkedinIn />
        <HiOutlineMail />
      </div>
    </header>
  );
};

export default Header;
