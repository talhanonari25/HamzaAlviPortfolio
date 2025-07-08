import React from 'react'
import './portfolio.css'
import ImgContainer from './cards/imgContainer'
import { Col, Divider, Row } from 'antd';

const Portfolio = () => {
    return (
        <div className='portfolioContainer'>
            <h2 className='portfolioHeading'><span>Port</span>folio</h2>
            <div className="rulers">
                <hr className="leftRuler" />
                <div className="zigzagUnderline" style={{ left: '0px' }}>
                    <img src="/icons/zigzagLine.svg" alt="" />
                </div>
                <hr className="rightRuler" />
            </div>

            <div className="portfolioBody">
                
                <div className="portfolioSubBody">
                    <Row gutter={[8,0]}>
                        <ImgContainer/>
                        <ImgContainer/>
                        <ImgContainer/>
                        <ImgContainer/>
                        <ImgContainer/>
                        <ImgContainer/>
                        <ImgContainer/>
                        <ImgContainer/>
                        <ImgContainer/>
                    </Row>
                    
                </div>

            </div>

        </div>
    )
}

export default Portfolio