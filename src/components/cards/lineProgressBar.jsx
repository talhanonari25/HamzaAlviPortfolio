import React, {useState, useEffect} from "react";
import { Flex, Progress, Col } from "antd";
import { motion, percent } from "framer-motion";
import { useInView } from "react-intersection-observer";

const style = { padding: "8px 0" };

const lineProgressBar = ({ name, percentage }) => {
  const [percent, setPercent] = useState(0)
  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

  useEffect(() => {
      const interval = setInterval(() => {
        if(inView){
          setPercent((prev) => {
          if (prev >= percentage) {
            clearInterval(interval);
            return percentage;
          }
          return prev + 1;
          });
        }
        
      }, 15); 
    }, [percentage, inView]);
    
  return (
    <Flex ref={ref}
      gap={"small"}
      vertical
      style={{
        gap: "0px",
        marginBottom: "1rem",
        marginRight: "10px",
      }}
      className="lineProgressBar-container"
    >
      <div className="barTitle">
        <p>{name}</p>
        <p>{percentage}%</p>
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Progress
          percent={percent}
          showInfo={false}
          trailColor="white"
          strokeColor="yellow"
          size={{ height: 5 }}
          strokeWidth={1}
        />
      </motion.div>
    </Flex>
  );
};

export default lineProgressBar;
