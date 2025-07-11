import './App.css'
import ProfileImg from './components/ProfileImg'
import Bio from './components/bio'
import WhatIDo from './components/WhatIDo'
import PeopleSaying from './components/peopleSaying'
import MyResume from './components/MyResume'
import MySkills from './components/MySkills'
import Portfolio from './components/Portfolio'
import CredentialAndForm from './components/CredentialAndForm'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='main'>
        <div className="container">
          <div>
            <div className="intro">
              <ProfileImg />
              <Bio />
            </div>
            <div>
              <p className='info'>
                I hold a Bachelor's degree in Computer Science from Lahore Garrison University, where I engaged in rigorous academic exploration and practical application of cutting-edge technologies. My insatiable curiosity and innate ability to rapidly grasp complex concepts characterize me as a quick learner. Infused with an unwavering wellspring of energy, I approach challenges with enthusiasm, continuously seeking opportunities to expand my skill set and broaden my horizons. With an unquenchable thirst for knowledge, I am dedicated to embarking on a perpetual journey of learning and skill acquisition.
              </p>
            </div>
          </div>

            <WhatIDo/> 
            <PeopleSaying/>
            <MyResume/> 
            <MySkills/>
            <Portfolio/>
            <CredentialAndForm/>
          
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
