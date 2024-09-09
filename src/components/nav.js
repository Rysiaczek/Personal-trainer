import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../css/nav.css";

function NavBarr() {
  const [isActive, setIsActive] = useState(false);
  const [scale, setScale] = useState(1);
  const [shouldHide, setShouldHide] = useState(false);

  const activeScene = () => {
    if (!isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleMenuClick = () => {
    console.log();
    const width = window.innerWidth;
    if (width < 500) {
      setScale(width / 5);
    } else if (width < 768) {
      setScale(width / 30);
    } else if (width < 1200) {
      setScale(width / 50);
    } else setScale(width / 100);
    setIsActive(!isActive);
    activeScene();
  };

  useEffect(() => {
    if (!isActive) {
      const timer = setTimeout(() => {
        setShouldHide(true);
      }, 820);
      return () => clearTimeout(timer);
    } else {
      setShouldHide(false);
    }
  }, [isActive]);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav__title">
          <p>Power On Gym</p>
        </div>
        <div className="nav-menu__button" onClick={handleMenuClick}>
          <p>menu</p>
        </div>
        <div
          className="nav-menu__activeElement"
          style={{ display: shouldHide ? "none" : "block" }}>
          <div className="nav-activeElement__container">
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="nav-menu__circleElement"
                  initial={{ scale: 0, top: "-50px", right: "-50px" }}
                  animate={{ scale: scale }}
                  exit={{ scale: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}></motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="nav-menu-items"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.7, duration: 0.5 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}>
                  <motion.a
                    whileHover={{ color: "#333" }}
                    transition={{ duration: 0.5 }}
                    href="#Home">
                    Home
                  </motion.a>
                  <motion.a
                    whileHover={{ color: "#333" }}
                    transition={{ duration: 0.5 }}
                    href="#About">
                    O nas
                  </motion.a>
                  <motion.a
                    whileHover={{ color: "#333" }}
                    transition={{ duration: 0.5 }}
                    href="#contact">
                    Kontakt
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarr;
