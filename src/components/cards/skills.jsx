import React from 'react'
import { Avatar, Card } from 'antd';
import websiteIcon from '../../assets/whatIDoIcons/website.png';

const { Meta } = Card;

const card = ({name, imgSrc}) => {
  
// console.log("imgSrc:", imgSrc);
  return (
    // <div className='rowItems'>
    //   <img src={websiteIcon} className='row-icons' alt="" />
    //   <p>{name}</p>
    // </div>


    <Card style={{backgroundColor: 'rgba(0,0,0,0)', border: 'none'}}>
      <Meta
        avatar={<Avatar src={websiteIcon} shape='square' icon={imgSrc} alt='hello' />}
        title={<span style={{ color: '#fff' }}>{name}</span>}
      />
    </Card>

    
  )
}

export default card