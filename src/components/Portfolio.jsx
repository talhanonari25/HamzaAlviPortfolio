import React from 'react'
import './portfolio.css'
import ImgContainer from './cards/imgContainer'
import { Col, Divider, Row } from 'antd';
import { portfolioData } from '../assets/portfolioData';

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
                    <Row gutter={[24,8]}>
                        {portfolioData.map((val, i)=>{
                            return <ImgContainer key={i} name={val.name} description={val.description} imgSrc={val.imgSrc} websiteURL={val.websiteURL}/>
                        })}
                    </Row>
                    
                </div>

            </div>

        </div>
    )
}

export default Portfolio