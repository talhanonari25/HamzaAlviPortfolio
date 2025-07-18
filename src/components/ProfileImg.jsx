import "./ProfileImg.css";
import hamzaAlvi from "../assets/hamza_alvi.png";
import React from "react";

const ProfileImg = () => {
  return (
    <div className="profileImgContainer" style={{ width: "auto" }}>
      <img src={hamzaAlvi} alt="" className="profileImg" />
      <div className="social-icons">
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
