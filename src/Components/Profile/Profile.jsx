import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";

const Profile = () => (
  <div className="profile">
    <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
    <h2>Patrick Tuyiringire</h2>
    <p style={{ color: "#020609", fontSize: "20px" }}>Software Engineer</p>
  </div>
);

export default Profile;
