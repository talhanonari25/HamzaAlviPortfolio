import React from 'react'
import './WhatIDo.css'

const WhatIDo = () => {
  return (
    <div>
      <h2 className='whatIdoHeading'><span>What I do</span></h2>
      <div className="rowContainer">
        <div className="row1">
          <div className='rowItems'><img src="/whatIDoIcons/website.png" className='row-icons' alt="" /><p>website and platforms</p></div>
          <div className='rowItems'><img src="/whatIDoIcons/website.png" className='row-icons' alt="" /><p>website and platforms</p></div>
          <div className='rowItems'><img src="/whatIDoIcons/website.png" className='row-icons' alt="" /><p>website and platforms</p></div>
        </div>
        <div className="row2">
          <div className='rowItems'><img src="/whatIDoIcons/website.png" className='row-icons' alt="" /><p>website and platforms</p></div>
          <div className='rowItems'><img src="/whatIDoIcons/website.png" className='row-icons' alt="" /><p>website and platforms</p></div>
          <div className='rowItems'><img src="/whatIDoIcons/website.png" className='row-icons' alt="" /><p>website and platforms</p></div>
        </div>
      </div>
    </div>
  )
}

export default WhatIDo