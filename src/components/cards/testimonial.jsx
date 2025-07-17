import React from "react";
import { Card } from "antd";

const card = ({ comment, author }) => {
  return (
    <>
      <div>
        <Card
          variant="borderless"
          style={{ width: 300, backgroundColor: "rgba(0,0,0,0)" }}
        >
          <div style={{ display: "flex" }}>
            <img src="icons/quotes.svg" alt="" style={{ alignSelf: "start" }} />
            <div className="authorInfo">
              <p style={{ color: "white" }}>{comment}</p>
              <hr className="annotationRuler" />
              <h5 style={{ color: "white" }}>{author}</h5>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default card;
