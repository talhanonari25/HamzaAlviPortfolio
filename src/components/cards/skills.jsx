import React from "react";
import { Avatar, Card, Flex } from "antd";

const { Meta } = Card;

const card = ({ name, imgSrc }) => {
  return (
    <>
      <Card style={{ backgroundColor: "rgba(0,0,0,0)", border: "none" }}>
        <Meta
          avatar={
            <Avatar
              src={imgSrc}
              shape="square"
              icon={imgSrc}
              alt="hello"
              style={{ width: "5rem", height: "5rem" }}
            />
          }
          title={
            <span style={{ color: "#fff", fontSize: "18px" }}>{name}</span>
          }
          style={{ display: "flex", alignItems: "center" }}
        />
      </Card>
    </>
  );
};

export default card;
