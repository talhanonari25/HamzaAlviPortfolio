import React, {useEffect, useState} from 'react';
import { IoMdClose } from "react-icons/io";
import './menuBtn.css'
import { Link } from 'react-scroll';
import { useScroll } from 'framer-motion';

const MenuButton = ({filter, setFilter, homeElementInView, resumeElementInView, portfolioElementInView,
                      contactElementInView}) => {
  const { scrollY } = useScroll();
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
    scrollY.on('change', () => {
      setScrollValue(scrollY.get())
    });
  }, [scrollY]);
  
  return (
    <div className="menu-btn-container" style={{top: `${scrollValue <= 100 ? '30' : Math.floor(scrollValue)}px`}}>
      <button
        className="menu-button"
        onClick={() => {
          setFilter(!filter);
        }}
      >
        {!filter ? (
          <div>
            <div className="lineStyle" />
            <div className="secondLineStyle" />
            <div className="lineStyle" />
          </div>
        ) : (
          <div style={{ width: "100%", height: "25px" }}>
            <IoMdClose style={{ fontSize: "26px" }} />
          </div>
        )}
      </button>
      <div
        className={`menu-items-container ${
          filter ? "move-left" : "move-right"
        }`}
      >
        <div style={{ margin: "30px 0px", display:'flex', justifyContent:'end' }}>
          <Link to="home" smooth={true} duration={500} spy={true} offset={-50} className={`menu-items ${homeElementInView ? 'isActive': ''}`} onClick={()=>{setFilter(false)}}>Home</Link>
        </div>
        <div style={{ margin: "30px 0px", display:'flex', justifyContent:'end' }}>
          <Link to="resume" smooth={true} duration={500} spy={true} offset={-50} className={`menu-items ${resumeElementInView ? 'isActive': ''}`} onClick={()=>{setFilter(false)}}>Resume</Link>
        </div>
        <div style={{ margin: "30px 0px", display:'flex', justifyContent:'end' }}>
          <Link to="portfolio" smooth={true} duration={500} spy={true} offset={-50} onClick={()=>{setFilter(false)}} className={`menu-items ${portfolioElementInView ? 'isActive': ''}`}>Portfolio</Link>
        </div>
        <div style={{ margin: "30px 0px", display:'flex', justifyContent:'end' }}>
          <Link to="contact" smooth={true} duration={500} spy={true} offset={-50} onClick={()=>{setFilter(false)}} className={`menu-items ${contactElementInView ? 'isActive': ''}`}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default MenuButton;
