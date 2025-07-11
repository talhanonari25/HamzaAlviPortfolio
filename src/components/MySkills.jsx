import React from 'react'
import './MySkills.css'
import { Col, Divider, Row } from 'antd';
import ProgressBar from './cards/progressBar';
import { languageData } from '../assets/languageData';
import LineProgressBar from './cards/lineProgressBar';
import { cloudData } from '../assets/cloudData';
import { codingData } from '../assets/codingData';

const style = { padding: '8px 0' };

let langArr = languageData.map((val, i)=>{
  return <ProgressBar key={i} percentage={val.percentage} name={val.name}/>
})

let cloudArr = cloudData.map((val, i)=>{
  return <LineProgressBar name={val.name} key={i} completion={val.completion}/>
})

let codignArr = codingData.map((val, i)=>{
  return <LineProgressBar name={val.name} key={i} completion={val.completion}/>
})

const MySkills = () => {
  return (
    <div>
      <h2 className="myskillHeading"><span>My Skills</span></h2>
      <div className="skillContainer">
        <div className="skills">
          <div style={{width: '10%'}} className='skillLabel'><h2 className="skillsCategory skill-category-language">LANGUAGE</h2></div>
          <Row gutter={16}>
          {langArr}
        </Row>
        </div>
        <hr className='bioRuler' style={{ marginBottom: "40px" }} />

        <Row gutter={16}>
          <Col className="gutter-row" span={2}>
            <div style={style} className='skillGridItem'><h2 className="skillsCategory">Cloud Services</h2></div>
          </Col>
          <Col className="gutter-row" span={9}>
            <div style={{ padding: '8px 0', width: '400px' }} className='skillGridItem'>
              {cloudArr}
            </div>
          </Col>
          <Col className="gutter-row" span={2}>
            <div style={style} className='skillGridItem'><h2 className="skillsCategory">CODING</h2></div>
          </Col>
          <Col className="gutter-row" span={9}>
            <div style={{ padding: '8px 0', width: '400px' }} className='skillGridItem'>
              {codignArr}
            </div>
          </Col>
        </Row>
        
      </div>
    </div>
  )
}

export default MySkills