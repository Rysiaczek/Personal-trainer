import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../css/nav.css";

function NavBarr() {
  const [isActive, setIsActive] = useState(false);
  const [scale, setScale] = useState(0);

  const activeScene = () => {
    if (!isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleMenuClick = () => {
    const width = window.innerWidth;
    setScale(width / 100);
    setIsActive(!isActive);
    activeScene();
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav__title">
          <p>Power On Gym</p>
        </div>
        <div className="nav-menu__button" onClick={handleMenuClick}>
          <p>menu</p>
        </div>
        <div className="nav-menu__activeElement">
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
                    href="Home">
                    Home
                  </motion.a>
                  <motion.a
                    whileHover={{ color: "#333" }}
                    transition={{ duration: 0.5 }}
                    href="About">
                    O nas
                  </motion.a>
                  <motion.a
                    whileHover={{ color: "#333" }}
                    transition={{ duration: 0.5 }}
                    href="Contact">
                    Contant
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
