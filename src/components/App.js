import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef, useEffect } from "react";

import Contact from "./contact";
import Header from "./header";
import Marque from "./marque";
import About from "./about";
import NavBarr from "./nav";
import Offert from "./offert";
import LoadingScreen from "./LoadingScreen";

import "../css/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  const handlePageLoad = () => {
    if (videoRef.current) {
      const video = videoRef.current;

      video.addEventListener("loadeddata", () => {
        setIsLoading(false);
      });

      if (video.readyState >= 3) {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return (
    <div>
      <LoadingScreen loading={isLoading} />
      <NavBarr />
      <Header />
      <About />
      <Marque />
      <Offert />
      <Contact />
    </div>
  );
}

export default App;
