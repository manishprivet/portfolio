import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import TextLoop from "react-text-loop";
import "./Profile.css";

function Profile() {
  return (
    <div className='profileCard'>
      <div className='profileText'>
        <h1>
          <span className='hello'>Hello</span>
          <br />
          My name is Manish...
        </h1>
        <h2>I'm a student at IIIT Gwalior</h2>
        <h2>
          and a{" "}
          <TextLoop>
            <span style={{ color: "#ff8906" }}>Web Developer</span>
            <span style={{ color: "#eebbc3" }}>Graphic Designer</span>
            <span style={{ color: "#f9bc60" }}>Cloud Architect</span>
          </TextLoop>{" "}
        </h2>
      </div>
      <ProfilePhoto />
    </div>
  );
}

export default Profile;
