import React from 'react';
import { IoMdClose } from "react-icons/io";
import './menuBtn.css'
import { Link } from 'react-scroll';

const MenuButton = ({filter, setFilter}) => {
  return (
    <div className="menu-btn-container">
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
          <Link to="home" smooth={true} duration={500} spy={true} offset={-50} className='menu-items'>Home</Link>
        </div>
        <div style={{ margin: "30px 0px", display:'flex', justifyContent:'end' }}>
          <Link to="resume" smooth={true} duration={500} spy={true} offset={-50} className='menu-items'>Resume</Link>
        </div>
        <div style={{ margin: "30px 0px", display:'flex', justifyContent:'end' }}>
          <Link to="portfolio" smooth={true} duration={500} spy={true} offset={-50} className='menu-items'>Portfolio</Link>
        </div>
        <div style={{ margin: "30px 0px", display:'flex', justifyContent:'end' }}>
          <Link to="contact" smooth={true} duration={500} spy={true} offset={-50} className='menu-items'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default MenuButton;
