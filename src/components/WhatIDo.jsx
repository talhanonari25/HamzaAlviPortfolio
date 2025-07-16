import React from "react";
import "./WhatIDo.css";
import Card from "./cards/skills";
import { data } from "../assets/skillsData";
import { Col, Row } from "antd";

const WhatIDo = () => {
  let newArr = data.map((value, index) => {
    return (
      <Col
        className="gutter-row"
        key={index}
        span={6}
        xs={24}
        sm={12}
        md={8}
        lg={6}
        xl={6}
      >
        <Card key={index} name={value.name} imgSrc={value.imgSrc} />
      </Col>
    );
  });
  return (
    <div>
      <h2 className="whatIdoHeading">
        <span>What I do</span>
      </h2>
      <div className="rowContainer">
        <Row>{newArr}</Row>
      </div>
    </div>
  );
};

export default WhatIDo;
