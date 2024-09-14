import "../css/Header.css";
import React, { useEffect, useState } from "react";

function Header({ videoRef }) {
  const [height, setHeight] = useState(false);

  const handleScroll = () => {
    const scrollToElement = document.querySelector(".about");
    scrollToElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const heroShadow = () => {
    const mainElement = document.querySelector(".main");
    if (mainElement) {
      const height = mainElement.getBoundingClientRect().height;

      const windowY = window.scrollY;

      const shadow = document.querySelector(".hero-shadow");

      let opacity = (windowY / height).toFixed(2);

      if (shadow) {
        if (opacity >= 0.5) {
          shadow.style.opacity = opacity;
        }
      }
    }
  };

  const visableElement = () => {
    const mainHeight = document
      .querySelector(".header")
      .getBoundingClientRect();

    let mainScroll = window.scrollY;
    setHeight(mainScroll > mainHeight.height ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", heroShadow);
    window.addEventListener("scroll", () => {
      visableElement();
    });
  }, []);

  return (
    <div id="Home" className="z-2 vertical ">
      <section className="header ">
        <div className="header-content container mt-5 w-100 z-3 position-relative">
          <div className="h-100 row align-content-center align-items-lg-center ">
            <div className="row justify-content-flex-start justify-content-lg-center">
              <div className="col col-lg-4 header-content-title justify-content-end">
                <p className=" text-light fw-bold mb-5  ">
                  Trener
                  <br />
                  Personalny
                </p>
              </div>
            </div>
            <div className="row  justify-content-lg-between">
              <div className="col-0 col-lg-5">
                <p className="text-light text-left mt-3 mt-lg-0">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis voluptate cupiditate modi labore ad tempora similique
                  esse repellendus praesentium ipsam eos accusamus sit, ab illum
                  nisi quidem, nihil facilis. Blanditiis.
                </p>
              </div>

              <div className="scroll col-0 col-lg-1 d-none d-lg-block align-self-center text-end h-25">
                <p
                  className="text-light overflow-hidden align-self-center"
                  onClick={() => handleScroll()}>
                  <span className="border-light border-3 scroll-hr"></span>
                  scroll
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-video"
          style={height ? { display: "none" } : { display: "block" }}>
          <video autoPlay muted loop playsInline id="myVideo" ref={videoRef}>
            <source
              src={process.env.PUBLIC_URL + "/img/header-bg.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="hero-shadow"></div>
      </section>
    </div>
  );
}

export default Header;
