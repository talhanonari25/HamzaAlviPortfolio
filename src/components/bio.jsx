import './bio.css'
import { Typewriter } from 'react-simple-typewriter';
import { Row, Col } from 'antd';
import React from 'react'

const style = { background: '#0092ff', padding: '8px 0' };

const Bio = () => {
    return (
      <div className="bio">
        <div>
          <h5 className="greeting">Hello Everyone 👋</h5>
          <div className="nameAndOccpContainer">
            <h1 className="name">
              <span>I'm Hamza Alvi</span>
            </h1>
            <h1 className="occupation">
              I am a{" "}
              <span style={{ color: "yellow", fontWeight: "500" }}>
                <Typewriter
                  words={[
                    "Developer.",
                    "Full Stack Engineer.",
                    "Backend Engineer.",
                    "Frontend Engineer.",
                    "Hubspot Expert.",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                  cursorBlinking={false}
                  cursorColor="yellow"
                />
              </span>
            </h1>
          </div>
        </div>
        <hr className="bioRuler" style={{width: '100%'}} />
        <Row gutter={{ xs: 2, sm: 16, md: 24, lg: 32 }} style={{width: '100%'}}>
          <Col className="gutter-row" span={6} xs={24} sm={24} md={18} lg={12} xl={8}>
            <h5 className='date'><img src="/icons/calendar.svg" alt="" />06.10.1998</h5>
          </Col>
          <Col className="gutter-row" span={6} xs={24} sm={24} md={18} lg={12} xl={8}>
            <h5 className='number'><img src="/icons/whatsapp.svg" alt="" />+923-334-330-550</h5>
          </Col>
          <Col className="gutter-row" span={6} xs={24} sm={24} md={18} lg={12} xl={8}>
            <h5 className='email'><img src="/icons/atTheRate.png" style={{ width: "24px" }} alt="" />m.hamzaalvi719@gmail.com</h5>
          </Col>
          <Col className="gutter-row" span={6} xs={24} sm={24} md={18} lg={12} xl={8}>
            <h5 className='location'><img src="/icons/location.svg" alt="" />Lahore, Pakistan</h5>
          </Col>
        </Row>
      </div>
    );
}

export default Bio