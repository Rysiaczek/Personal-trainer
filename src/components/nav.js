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

  const handleScroll = (e) => {
    const element = e.target.getAttribute("data-link");
    const scrollToElement = document.querySelector(`.${element}`);
    scrollToElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsActive(false);
    activeScene();
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
                  <motion.p
                    onClick={handleScroll}
                    data-link="header"
                    whileHover={{ color: "#9FA6A5" }}
                    transition={{ duration: 0.5 }}>
                    Home
                  </motion.p>
                  <motion.p
                    onClick={handleScroll}
                    data-link="about"
                    whileHover={{ color: "#9FA6A5" }}
                    transition={{ duration: 0.5 }}>
                    O nas
                  </motion.p>
                  <motion.p
                    onClick={handleScroll}
                    data-link="offert"
                    whileHover={{ color: "#9FA6A5" }}
                    transition={{ duration: 0.5 }}>
                    Kontakt
                  </motion.p>
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
