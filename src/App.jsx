import "./App.css";
import { useState,useEffect } from "react";
import { Element } from "react-scroll";
import Home from "./components/Home";
import WhatIDo from "./components/WhatIDo";
import PeopleSaying from "./components/peopleSaying";
import MyResume from "./components/MyResume";
import MenuButton from "./components/Buttons/menuBtn";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import CredentialAndForm from "./components/CredentialAndForm";
import Footer from "./components/Footer";


function App() {
  const [filter, setFilter] = useState(false)
  const [loaded, setLoad] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(()=>{
        setLoad(true)
      }, 3000)
    };

    if (document.readyState === "complete") {
      handleLoad(); // page already loaded
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <div className={`loader ${loaded ? 'page-loaded': ''}`}>
        
      </div>
      {loaded && <><MenuButton filter={filter} setFilter={setFilter}/>
      <div className={`main ${filter && 'filter-is-on'}`}>
        <div className="container">
          <Element name="home"><Home/></Element>
          <WhatIDo />
          <PeopleSaying />
          <Element name="resume"><MyResume /></Element>
          <MySkills />
          <Element name="portfolio"><Portfolio /></Element>
          <Element name="contact"><CredentialAndForm /></Element>
        </div>
        <Footer />
      </div></>}
    </>
  );
}

export default App;
