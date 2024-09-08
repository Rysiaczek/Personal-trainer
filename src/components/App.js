import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

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

  const handlePageLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  if (document.readyState === "complete") {
    handlePageLoad();
  } else {
    window.addEventListener("load", handlePageLoad);
  }

  return (
    <div>
      <LoadingScreen loading={isLoading} />
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
