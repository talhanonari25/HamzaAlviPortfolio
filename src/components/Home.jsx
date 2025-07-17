import React from "react";
import ProfileImg from "./ProfileImg";
import Bio from "./bio";
import "./Home.css";
import WhatIDo from "./WhatIDo";

const Home = ({ homeElementRef }) => {
  return (
    <>
      <div id="home" ref={homeElementRef}>
        <div className="intro">
          <ProfileImg />
          <Bio />
        </div>
        <div>
          <p className="info">
            I hold a Bachelor's degree in Computer Science from Lahore Garrison
            University, where I engaged in rigorous academic exploration and
            practical application of cutting-edge technologies. My insatiable
            curiosity and innate ability to rapidly grasp complex concepts
            characterize me as a quick learner. Infused with an unwavering
            wellspring of energy, I approach challenges with enthusiasm,
            continuously seeking opportunities to expand my skill set and
            broaden my horizons. With an unquenchable thirst for knowledge, I am
            dedicated to embarking on a perpetual journey of learning and skill
            acquisition.
          </p>
        </div>
        <WhatIDo/>
      </div>
    </>
  );
};

export default Home;
