import React from 'react'
import './peopleSaying.css'
import Card from './cards/testimonial'
import { data } from '../assets/testimonialData'

const peopleSaying = () => {
  let newArr = data.map((val, i)=>{
    return <Card comment={val.comment} key={i} author={val.author}/>
  })
  return (
      <div>
          <h2 className='peopleSayingHeading'><span>What The People Saying</span></h2>
          <div className="rowContainer annotationContainer">

            {newArr} 


          </div>
      </div>
  )
}

export default peopleSaying