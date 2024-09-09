import "../css/loadingscreen.css";
import React, { useState, useEffect } from "react";

function LoadingScreen({ loading }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setHide(true);
      }, 2000);
    }
  }, [loading]);

  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots >= 3 ? 0 : prevDots + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loadingscreen ${hide ? " hide" : ""}`}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}>
        <p style={{ fontSize: "3rem" }}>loading{".".repeat(dots)}</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
