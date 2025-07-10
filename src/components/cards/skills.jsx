import React from 'react'
import { Avatar, Card, Flex } from 'antd';
import websiteIcon from '../../assets/whatIDoIcons/website.png';


const { Meta } = Card;

const card = ({name, imgSrc}) => {
  
// console.log("imgSrc:", imgSrc);
  return (
    // <div className='rowItems'>
    //   <img src={websiteIcon} className='row-icons' alt="" />
    //   <p>{name}</p>
    // </div>


    <><Card style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none'}}>
      <Meta
        avatar={<Avatar src={imgSrc} shape='square' icon={imgSrc} alt='hello' style={{width: "5rem", height: "5rem"}} />}
        title={<span style={{ color: '#fff', fontSize: '18px' }}>{name}</span>} style={{display: "flex", alignItems: "center"}}
      />
    </Card>
    </>
    
  )
}

export default card