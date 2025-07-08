import React from 'react'
import './GetInTouch.css'

const GetInTouch = () => {
  return (
    <div className="getInTouchContainer">
      <h2 className='getInTouchHeading'><span>Get</span> In Touch</h2>

      <div className="rulers">
        <hr className="leftRuler" />
        <div className="zigzagUnderline" style={{ left: '0px' }}>
          <img src="/icons/zigzagLine.svg" alt="" />
        </div>
        <hr className="rightRuler" />
      </div>


      <div className="location">
        <div style={{ width: '100%', height: '450px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6806.578318942638!2d74.4279776117275!3d31.461230946534197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391908ea43d537e3%3A0x8ae3657d8794abf7!2sAskari%20XI%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1751978153361!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map Location"
                        ></iframe>
                    </div>
      </div>

    </div>
  )
}

export default GetInTouch