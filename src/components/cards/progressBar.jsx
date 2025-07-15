import React from 'react'
import { Flex, Progress, Col, Grid   } from 'antd';
const { useBreakpoint } = Grid;
const style = { padding: '8px 0' };

const progressBar = ({ percentage, name }) => {
    const screens = useBreakpoint();

  // Define custom sizes based on breakpoint
  const getSize = () => {
    if (screens.xl) return 120;
    if (screens.lg) return 120;
    if (screens.md) return 100;
    if (screens.sm) return 80;
    if (screens.xs) return 60;
    return 60;
  };
    return (
      <Col className="gutter-row" span={5} xs={12} sm={12} md={8} lg={6}>
        <div style={style} className="skillGridItem">
          <div className="gutter-row-inner-div">
            <Flex gap="small" wrap style={{width: "80%"}}>
              <Progress
                type="circle"
                percent={percentage}
                strokeColor="yellow"
                format={(percent) => (
                  <span style={{ color: "white" }}>{percent}%</span>
                )}
                size={getSize()}
              />
            </Flex>
            <h3 className='circleProgressLabel'>{name}</h3>
          </div>    
        </div>
      </Col>
    );
}

export default progressBar