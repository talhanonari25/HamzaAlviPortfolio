import React from 'react'
import './MyResume.css'
import { Divider } from 'antd';
import ExpCard from './cards/expCard';
import { data } from '../assets/expData';
import { eduData } from '../assets/educationData';

const MyResume = () => {

  let newArr = data.map((val, i)=>{
    return <ExpCard key={i} timeSpan={val.timeSpan} designation={val.designation} mainData={val.mainData} index={i}/>
  })

  let oddArr = newArr.filter((val, i)=>{
    return i%2==0
  })

  let evenArr = newArr.filter((val, i)=>{
    return i%2!=0
  })

  let educationData = eduData.map((val, i)=>{
    return <ExpCard key={i} timeSpan={val.timeSpan} designation={val.designation} mainData={val.mainData} index={i}/>
  })

  let oddEduData = educationData.filter((val, i)=>{
    return i%2==0
  })

  let evenEduData = educationData.filter((val, i)=>{
    return i%2!=0
  })

  return (
    <div className="myResumeContainer">
      <h2 className="myResumeHeading"><span>My</span> Resume</h2>
      <div className="rulers">
        <hr className="leftRuler" />
        <div className="zigzagUnderline">
          <img src="/icons/zigzagLine.svg" alt="" />
        </div>
        <hr className="rightRuler" />
      </div>

      <div className="workExpriencesContainer">
        <div className="workExperienceHeading">
          <span>👨&zwj;💻
            <span>Work Experiences</span></span>
        </div>
        <div className="grid-container">
          <div className="left">{oddArr}</div>
          <div className="divider"></div>
          <div className="right">{evenArr}</div>
        </div>
      </div>

      <div className="educationContainer">
        <div className="educationHeading">
          <span>🎓 <span>Education</span></span>
        </div>

        <div className="grid-container">
          <div className="left">{oddEduData}</div>
          <div className="divider"></div>
          <div className="right">{evenEduData}</div>
        </div>

      </div>
    </div>
  )
}

export default MyResume