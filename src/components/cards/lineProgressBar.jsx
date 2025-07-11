import React from "react";
import { Flex, Progress, Col } from "antd";

const style = { padding: "8px 0", width: "400px" };

const lineProgressBar = ({ name, completion }) => {
  return (
    <Flex
      gap="small"
      vertical
      style={{ width: "100%", gap: "0px" }}
      strokeWidth={2}
    >
      <div className="barTitle">
        <p>{name}</p>
        <p>{completion}</p>
      </div>
      <Progress
        percent={completion.split("%")[0]}
        showInfo={false}
        trailColor="white"
        strokeColor="yellow"
        size={{ height: 5 }}
        style={{ width: "400px" }}
      />
    </Flex>
  );
};

export default lineProgressBar;
