import React from "react";

import "./Profile.css";

const Profile = () => (
  <div className="profile">
    <a className="profile-link" href="/">
      <img
        src="/images/profile.jpeg"
        alt="Profile"
        className="profile-picture"
      />
    </a>

    <h3>Patrick Tuyiringire</h3>
    <p className="profile title" style={{}}>
      Software Engineer & More
    </p>
    <hr />
  </div>
);

export default Profile;
