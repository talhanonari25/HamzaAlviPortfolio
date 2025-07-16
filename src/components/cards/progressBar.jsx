import React, { useState, useEffect } from "react";
import { Flex, Progress, Col, Grid } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const { useBreakpoint } = Grid;
const style = { padding: "8px 0" };

const progressBar = ({ percentage, name }) => {
  const [percent, setPercent] = useState(0);
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

  const screens = useBreakpoint();

  const getSize = () => {
    if (screens.xl) return 120;
    if (screens.lg) return 120;
    if (screens.md) return 100;
    if (screens.sm) return 80;
    if (screens.xs) return 60;
    return 60;
  };

  return (
      <div style={style} ref={ref} className="skillGridItem circle-skill-grid-item">
        <div className="gutter-row-inner-div">
          <Flex gap="small" wrap style={{ width: "80%" }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Progress
                type="circle"
                percent={percent}
                strokeColor="yellow"
                format={(p) => <span style={{ color: "white" }}>{p}%</span>}
                size={getSize()}
              />
            </motion.div>
          </Flex>
          <h3 className="circleProgressLabel">{name}</h3>
        </div>
      </div>
  );
};

export default progressBar;
