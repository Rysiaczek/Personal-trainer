import "../css/loadingscreen.css";
import React, { useState, useEffect } from "react";

function LoadingScreen({ loading }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setHide(true);
      }, 3000); // Czas trwania animacji
    }
  }, [loading]);
  return <div className={`loadingscreen ${hide ? " hide" : ""}`}></div>;
}

export default LoadingScreen;
