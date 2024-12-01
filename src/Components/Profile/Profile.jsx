import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";

const Profile = () => (
  <div className="profile">
    <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
  </div>
);

export default Profile;
