import React from "react";
import { Col, Divider, Row } from "antd";
const style = { padding: "8px 0" };

const imgContainer = ({ name, description, imgSrc, websiteURL }) => {
  return (
    <Col
      className="gutter-row image-wrapper"
      span={8}
      xs={24}
      sm={24}
      md={12} 
      lg={8}
      xl={8} 
    >
      <a href={websiteURL} target="_blank">
        <div style={style} className="portfolioImageContainer">
          <img src={imgSrc} alt="" className="portfolioImg" />
          <div className="overlay">
            <p style={{ fontSize: "16px" }}>{name}</p>
          </div>
          <div className="overlay-bottom">
            <p>{description}</p>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default imgContainer;
