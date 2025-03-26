import React from "react";

import "./Profile.css";

const Profile = () => (
  <div className="profile">
    <img src="/images/profile.jpeg" alt="Profile" className="profile-picture" />

    <h3>Patrick Tuyiringire</h3>
    <p className="profile title" style={{}}>
      Software Engineer
    </p>
    <hr />
  </div>
);

export default Profile;
