import "../css/loadingscreen.css";
import React, { useState, useEffect } from "react";

function LoadingScreen({ loading }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setHide(true);
      }, 600); // Czas trwania animacji
    }
  }, [loading]);
  return (
    <div
      className={`loadingscreen ${hide ? "hide" : ""}`}
      //   style={props.loading ? { top: "-100%" } : { top: "0" }}>
    ></div>
  );
}

export default LoadingScreen;
