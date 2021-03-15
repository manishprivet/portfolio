import React from "react";

function ProfilePhoto() {
  return (
    <div>
      <img
        src={require("../../images/profile.jpeg")}
        height='200px'
        alt=''
        style={{
          border: "none",
          borderRadius: "50%",
          boxShadow: "2px 2px 10px black",
        }}
      />
    </div>
  );
}

export default ProfilePhoto;
