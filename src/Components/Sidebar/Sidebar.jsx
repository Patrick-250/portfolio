import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Profile from "../Profile/Profile";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Profile />
      <nav>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
