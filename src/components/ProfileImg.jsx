import "./ProfileImg.css";
import React from "react";

const ProfileImg = () => {
  return (
    <div className="profileImgContainer" style={{ width: "auto" }}>
      <img src="/logo.png" alt="" className="profileImg" />
      <div className="social-icons">
        <a
          href="https://www.facebook.com/hamza.alvi.9"
          target="_blank"
          style={{ textDecoration: "none", height: 30, width: 30 }}
        >
          <img src="/icons/facebook.svg" className="social-logo" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/hamza-alvi-378baa1ab"
          target="_blank"
          style={{ textDecoration: "none", height: 30, width: 30 }}
        >
          <img src="/icons/linkedIn.svg" className="social-logo" alt="" />
        </a>
        <a
          href="https://github.com/Hamza719alvi"
          target="_blank"
          style={{ textDecoration: "none", height: 30, width: 30 }}
        >
          <img src="/icons/github.svg" className="social-logo" alt="" />
        </a>
      </div>
    </div>
  );
};

export default ProfileImg;
