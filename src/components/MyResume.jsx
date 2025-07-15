import React from "react";
import "./MyResume.css";
import { Divider } from "antd";
import ExpCard from "./cards/expCard";
import { data } from "../assets/expData";
import { eduData } from "../assets/educationData";

const MyResume = () => {

  return (
    <div className="myResumeContainer">
      <h2 className="myResumeHeading">
        <span>My</span> Resume
      </h2>
      <div className="rulers">
        <hr className="leftRuler" />
        <div className="zigzagUnderline">
          <img src="/icons/zigzagLine.svg" alt="" />
        </div>
        <hr className="rightRuler" />
      </div>

      <div className="workExpriencesContainer">
        <div className="workExperienceHeading">
          <span>
            👨&zwj;💻
            <span>Work Experiences</span>
          </span>
        </div>
        <div className="timeline-container">
          <div className="timeline-line" />
          {data.map((item, index) => (
            <ExpCard
              index={index}
              key={index}
              timeSpan={item.timeSpan}
              designation={item.designation}
              mainData={item.mainData}
              position={item.position}
            />
          ))}
        </div>
      </div>

      <div className="educationContainer">
        <div className="educationHeading">
          <span>
            🎓 <span>Education</span>
          </span>
        </div>
        <div className="timeline-container">
          <div className="timeline-line" />
          {eduData.map((val, i) => (
            <ExpCard
              key={i}
              timeSpan={val.timeSpan}
              designation={val.designation}
              mainData={val.mainData}
              index={i}
              position={val.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyResume;
