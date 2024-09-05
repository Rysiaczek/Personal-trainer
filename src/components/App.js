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

  useEffect(() => {
    // Listener do wykrycia pełnego załadowania strony
    const handlePageLoad = () => {
      setIsLoading(false); // Ustawia stan na false, gdy strona jest załadowana
    };

    // Sprawdzaj, czy strona jest już załadowana (na wypadek, gdyby efekt uruchomił się po załadowaniu)
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    // Usuń listener przy odmontowywaniu komponentu
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen loading={isLoading} />;
  }
  return (
    <div className="appDiv">
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
