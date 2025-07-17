import "./App.css";
import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Home from "./components/Home";
// import PeopleSaying from "./components/peopleSaying";
import MyResume from "./components/MyResume";
import MenuButton from "./components/Buttons/menuBtn";
import Portfolio from "./components/Portfolio";
import CredentialAndForm from "./components/CredentialAndForm";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const [filter, setFilter] = useState(false);
  const [loaded, setLoad] = useState(false); 
  const [loaderPageUp, setLoaderPageUp] = useState(false)

  const {ref:homeElementRef, inView:homeElementInView} = useInView({
    threshold: 0.1
  })
  const {ref:resumeElementRef, inView:resumeElementInView} = useInView({
    threshold: 0.1
  })
  const {ref:portfolioElementRef, inView:portfolioElementInView} = useInView({
    threshold: 0.5
  })
  const {ref:contactElementRef, inView:contactElementInView} = useInView({
    threshold: 0.5
  })

  useEffect(() => {
    console.log(homeElementInView)
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
              <MenuButton filter={filter} setFilter={setFilter} homeElementInView={homeElementInView} 
              resumeElementInView={resumeElementInView} portfolioElementInView={portfolioElementInView}
              contactElementInView={contactElementInView}/>
              <Element name="home">
                <Home homeElementRef={homeElementRef}/>
              </Element>
              {/* <PeopleSaying /> */}
              <Element name="resume">
                <MyResume resumeElementRef={resumeElementRef}/>
              </Element>
              <Element name="portfolio">
                <Portfolio portfolioElementRef={portfolioElementRef} />
              </Element>
              <Element name="contact">
                <CredentialAndForm contactElementRef={contactElementRef} />
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
