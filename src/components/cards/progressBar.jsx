import React from 'react'
import { Flex, Progress, Col } from 'antd';

const style = { padding: '8px 0' };

const progressBar = ({ percentage, name }) => {
    return (
        <Col className="gutter-row" span={5}>
            <div style={style} className='skillGridItem'>
                <div className='gutter-row-inner-div'>
                    <Flex gap="small" wrap>
                        <Progress type="circle" percent={percentage} strokeColor="yellow"
                            format={percent => (
                                <span style={{ color: 'white' }}>{percent}%</span>
                            ) }
                        />
                    </Flex>
                    <h3>{name}</h3>
                </div>
            </div>
        </Col>
    )
}

export default progressBar