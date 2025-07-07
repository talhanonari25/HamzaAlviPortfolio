import './bio.css'

import React from 'react'

const Bio = () => {
  return (
    <div className='bio'>
        <div>
            <h5>Hello Everyone 👋</h5>
            <div className="nameAndOccpContainer">
                <h1 className='name'><span>I'm David Fincher</span></h1>
                <h1 className='occupation'>I am a Developer</h1>
            </div>
        </div>
        <hr style={{width: "99%"}} />
        <div className="contactInfo">
            <h5 className='date'><img src="/icons/calendar.svg" alt="" />19.03.1988</h5>
            <h5 className='number'><img src="/icons/whatsapp.svg" alt="" />987-654-321</h5>
            <h5 className='email'><img src="/icons/atTheRate.png" style={{width: "24px"}} alt="" />example@email.com</h5>
        </div>
        <div className="location">
            <img src="/icons/location.svg" alt="" />
            <h5>New york, London</h5>
        </div>
    </div>
  )
}

export default Bio