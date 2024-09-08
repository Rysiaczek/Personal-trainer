import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

import Contact from "./contact";
import Header from "./header";
import Marque from "./marque";
import About from "./about";
import NavBarr from "./nav";
import Offert from "./offert";
import Secondmain from "./secondmain";
import LoadingScreen from "./LoadingScreen";

import "../css/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDelayOver, setIsDelayOver] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const delayTimeout = setTimeout(() => {
        setIsDelayOver(true);
      }, 2000);
      return () => clearTimeout(delayTimeout);
    }
  }, [isLoading]);

  if (isLoading || !isDelayOver) {
    return <LoadingScreen loading={isLoading} />;
  }
  return (
    <div>
      <NavBarr />
      <Header />
      <About />
      <Secondmain />
      <Marque />
      <Offert />
      <Contact />
    </div>
  );
}

export default App;
