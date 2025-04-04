import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <a className="open-sidebar" onClick={toggleSidebar}>
          <IoMdMenu style={{ color: "black" }} />
        </a>
      )}
      {isOpen && (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="close-sidebar" onClick={toggleSidebar}>
            Close
          </button>
          <Profile />
          <nav>
            <Link to="/about" onClick={toggleSidebar}>
              About
            </Link>
            <Link to="/skills" onClick={toggleSidebar}>
              Skills
            </Link>
            <Link to="/experience" onClick={toggleSidebar}>
              Experience
            </Link>
            <Link to="/projects" onClick={toggleSidebar}>
              Projects
            </Link>
            <Link to="/contact" onClick={toggleSidebar}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;
