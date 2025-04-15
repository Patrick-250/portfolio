import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/profilelogo.png";

import { FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="profile-container">
        <a href="/">
          <img className="profile-logo" src={logo} alt="logo"></img>
        </a>
      </div>
      <nav className="nav-links">
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
