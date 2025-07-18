import React, {useEffect} from "react";
import "./MySkills.css";
import { Col, Divider, Row } from "antd";
// import ProgressBar from "./cards/progressBar";
// import { languageData } from "../assets/languageData";
import {speakingLanguage} from '../assets/speakingLanguage'
import LineProgressBar from "./cards/lineProgressBar";
import { cloudData } from "../assets/cloudData";
import { codingData } from "../assets/codingData";

const style = { padding: "8px 0" };

let cloudArr = cloudData.map((val, i) => {
  return (
    <LineProgressBar name={val.name} key={i} percentage={val.completion} />
  );
});

let codignArr = codingData.map((val, i) => {
  return (
    <LineProgressBar name={val.name} key={i} percentage={val.completion} />
  );
});

const MySkills = () => {

  return (
    <div>
      <h2 className="myskillHeading">
        <span>My Skills</span>
      </h2>
      <div className="skillContainer">
        {/* <div className="skills">
          <div style={{width: '10%'}} className="skillGridItem prg-lang-container">
              <h2 className="skillsCategory">PROGRAMMING LANGUAGE</h2>
            </div>
          <Row gutter={[8,4]}>
            {languageData.map((val, i) => {
              return (
                <Col xs={7} sm={5} md={4} lg={4} 
                    key={i} style={{marginLeft: "30px"}}>
                  <ProgressBar
                    percentage={val.percentage}
                    name={val.name}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
        <hr className="bioRuler" style={{ margin: "40px 40px" }} /> */}

        <Row gutter={15} className="line-progress-bar-grid-container">
          <Col className="gutter-row" span={4} xs={4} sm={4} md={3} lg={3}>
            <div
              style={style}
              className="skillGridItem prg-lang-container small-container-skills "
            >
              <h2 className="skillsCategory">Cloud Services</h2>
            </div>

            <div
              style={style}
              className="skillGridItem prg-lang-container small-container-skills "
            >
              <h2 className="skillsCategory">Languages</h2>
            </div>
          </Col>
          <Col className="gutter-row" span={9} xs={20} sm={18} md={9} lg={9}>
            <div
              style={{ padding: "8px 0" }}
              className="skillGridItem small-container-skills"
            >
              {cloudArr}
            </div>

            <div
              style={{ padding: "8px 0" }}
              className="skillGridItem small-container-skills"
            >
              {speakingLanguage.map((val, i) => {
                return (
                  <LineProgressBar
                    name={val.name}
                    key={i}
                    percentage={val.completion}
                  />
                );
              })}
            </div>
          </Col>
          <Col
            className="gutter-row codingSection"
            span={2}
            xs={4}
            sm={4}
            md={3}
            lg={3}
          >
            <div style={style} className="skillGridItem">
              <h2 className="skillsCategory">CODING</h2>
            </div>
          </Col>
          <Col
            className="gutter-row codingSection"
            span={9}
            xs={20}
            sm={18}
            md={9}
            lg={9}
          >
            <div style={{ padding: "8px 0" }} className="skillGridItem">
              {codignArr}
            </div>
          </Col>
          {/* <Col className="gutter-row" span={4} xs={4} sm={4} md={3} lg={3}>
            <div style={style} className="skillGridItem prg-lang-container">
              <h2 className="skillsCategory">Cloud Services</h2>
            </div>
          </Col>
          <Col className="gutter-row" span={9} xs={18} sm={18} md={9} lg={9}>
            <div style={{ padding: "8px 0" }} className="skillGridItem">
              {cloudArr}
            </div>
          </Col> */}
        </Row>
      </div>
    </div>
  );
};

export default MySkills;
