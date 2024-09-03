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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <LoadingScreen loading={loading} />
      {!loading && (
        <>
          <NavBarr />
          <Header />
          <About />
          <Secondmain />
          <Marque />
          <Offert />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
