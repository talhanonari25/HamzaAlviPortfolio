import { Card } from "antd";

const ExpCard = ({ timeSpan, designation, mainData, index, position }) => {

  return (
    <div
      className={`exp-card-container ${position}`}
      style={{
        marginTop: index === 0 ? "60px" : "40px",
      }}
    >
      <div className={`speech-bubble ${position}`}>
        <span className="mini-text">{timeSpan}</span>
        <h2 className="designation">{designation}</h2>
        <p className="little-p">{mainData}</p>
      </div>
    </div>
  );
};

export default ExpCard;

