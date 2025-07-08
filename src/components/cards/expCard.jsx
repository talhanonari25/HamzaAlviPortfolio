import React, {useRef, useEffect, useState} from 'react'
import { Card } from 'antd';

const expCard = ({timeSpan, designation, mainData, index}) => {

  return (
        <>

                <div className={`speech bubble ${index%2==0? 'arrowRight': 'arrowLeft'}`} style={{marginTop: (index==0? '40' : index%2==0? index*40: index*80) + 'px'}}>
                        <span className="mini-text">{timeSpan}</span>
                        <h2 className='designation'>{designation}</h2>
                        <p className="little-p">{mainData}</p>
                </div>

                {/* <div className="arrow-left">

                </div> */}
        </>
            
  )
}

export default expCard