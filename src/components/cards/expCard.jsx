import { Card } from "antd";

// const expCard = ({ timeSpan, designation, mainData, index }) => {
//   return (
//     <>
//       <div
//         className={`speech ${
//           index % 2 == 0 ? "arrowRight" : "arrowLeft"
//         }`}
//         style={{
//           marginTop:
//             (index == 0 ? "40" : index % 2 == 0 ? index * 40 : index * 80) +
//             "px",
//         }}
//       >
//         <span className="mini-text">{timeSpan}</span>
//         <h2 className="designation">{designation}</h2>
//         <p className="little-p">{mainData}</p>
//       </div>
//     </>
//   );
// };

// export default expCard;

import React from "react";

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

