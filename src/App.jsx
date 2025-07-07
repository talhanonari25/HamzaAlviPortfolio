import './App.css'
import ProfileImg from './components/ProfileImg'
import Bio from './components/bio'
import WhatIDo from './components/WhatIDo'
import PeopleSaying from './components/peopleSaying'

function App() {

  return (
    <>
      <div className='main'>
        <div className="container">
          <div> {/* first page */}
            <div className="intro">
              <ProfileImg />
              <Bio />
            </div>
            <div>
              <p className='info'>
                I'm a Creative Developer for interactive projects that usually are apps, VR and Creative websites. I Spend most of time coding outstanding projects or studying new technologies. to improve my development stack. I develop compelling designs that spring to life using transition and animations that suit my clients, using the most sophisticated technologies available today for fully interactive and responsive websites and apps.
              </p>
            </div>
          </div>

          <WhatIDo/> {/* what I do page */}
          <PeopleSaying/>

        </div>
      </div>
    </>
  )
}

export default App
