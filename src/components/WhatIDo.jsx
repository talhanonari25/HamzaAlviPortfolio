import React from 'react'
import './WhatIDo.css'
import Card from './cards/skills'
import { data } from '../assets/skillsData'
import { Col, Row } from 'antd';


const WhatIDo = () => {
  let newArr = data.map((value, index)=>{
    return <Col className="gutter-row" key={index} span={6}
    xs={24}  // full width on extra small (mobile)
      sm={12}  // half width on small (tablet)
      md={8}   // 3 per row on medium (desktop)
      lg={6}   // 4 per row on large screens
      xl={6}
    >
              <Card key={index} name={value.name} imgSrc={value.imgSrc}/>
            </Col>
  })
  return (
    <div>
      <h2 className='whatIdoHeading'><span>What I do</span></h2>
      <div className='rowContainer'>
        <Row >
          {newArr}
        </Row>
      </div>
    </div>
  )
}

export default WhatIDo