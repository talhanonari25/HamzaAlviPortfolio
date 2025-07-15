import "./App.css";
import { useState, useEffect } from "react";
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
import { motion } from "framer-motion";

function App() {
  const [filter, setFilter] = useState(false); //for on click of the menu button
  const [loaded, setLoad] = useState(false); // page loaded successfully or not
  const [loaderPageUp, setLoaderPageUp] = useState(false)

  useEffect(() => {
    // for the loading of the page
    const handleLoad = () => {
      setLoad(true)
      setInterval(()=>{
        setLoaderPageUp(true)
      }, 2000)
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <div className={`loader ${loaderPageUp ? "page-loaded" : ""}`}>
        <motion.svg width="116" height="115" className="loader-ring">
          <motion.circle
            cx="58"
            cy="58"
            r="48"
            stroke="#FFFF00"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={loaded ? {pathLength: 1} : {pathLength: 0}}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </motion.svg>
        <img src="/logo.png" alt="" className={`loader-img`}/>
      </div>
      {loaderPageUp && (
        <>
          <div className={`main`}>
            <div className="container">
              <div
                className={`low-brightness-overlay ${
                  filter ? "filter-is-on" : ""
                }`}
              ></div>
              <MenuButton filter={filter} setFilter={setFilter} />
              <Element name="home">
                <Home />
              </Element>
              <WhatIDo />
              {/* <PeopleSaying /> */}
              <Element name="resume">
                <MyResume />
              </Element>
              <MySkills />
              <Element name="portfolio">
                <Portfolio />
              </Element>
              <Element name="contact">
                <CredentialAndForm />
              </Element>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
