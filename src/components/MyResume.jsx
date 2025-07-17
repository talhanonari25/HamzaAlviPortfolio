import React from "react";
import "./MyResume.css";
import { Divider } from "antd";
import ExpCard from "./cards/expCard";
import { data } from "../assets/expData";
import { eduData } from "../assets/educationData";
import { useInView } from "react-intersection-observer";
import MySkills from "./MySkills";

const MyResume = ({resumeElementRef}) => {
  const { ref:ref1, inView:inView1 } = useInView({ 
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref:ref2, inView:inView2 } = useInView({ 
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="myResumeContainer" ref={resumeElementRef}>
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
        <div className="timeline-container" ref={ref1}>
          <div className="timeline-line" />
          {data.map((item, index) => (
            <ExpCard
              index={index}
              key={index}
              timeSpan={item.timeSpan}
              designation={item.designation}
              mainData={item.mainData}
              position={item.position}
              inView={inView1}
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
        <div className="timeline-container" ref={ref2}>
          <div className="timeline-line" />
          {eduData.map((val, i) => (
            <ExpCard
              key={i}
              timeSpan={val.timeSpan}
              designation={val.designation}
              mainData={val.mainData}
              index={i}
              position={val.position}
              inView={inView2}
            />
          ))}
        </div>
      </div>
      <MySkills/>
    </div>
  );
};

export default MyResume;
