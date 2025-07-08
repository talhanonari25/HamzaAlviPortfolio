import React from 'react'
import { Col, Divider, Row } from 'antd';
import img from '../../assets/containImg.jpg'

const style = { padding: '8px 0' };

const imgContainer = () => {
    return (
      
          <Col className="gutter-row image-wrapper" span={8}>
              <div style={style} className='portfolioImageContainer'><img src={img} alt="" className='portfolioImg'/>
              <div className="overlay"><p>Branding</p></div>
              <div className="overlay-bottom"> <p>Bonic Studio</p></div>
              </div>
          </Col>

    )
}

export default imgContainer