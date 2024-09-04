import Marquee from "react-fast-marquee";

import React, { useEffect } from "react";

import "../css/marque.css";

const imgAnimation = () => {
  const img = document.querySelector(".marque-img img");
  const imgSection = document.querySelector(".marque");

  let sectionTop = imgSection.offsetTop;
  let scrollPos = window.scrollY;

  let scale = 1 - (scrollPos - sectionTop) * 0.0006;
  scale = scale < 0.5 ? 0.5 : scale > 1 ? 1 : scale;

  img.style.transform = `scale(${scale})`;
};

const Marque = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      imgAnimation();
    });
  }, []);

  return (
    <div className="marque position-relative z-3  ">
      <div className="marque-img sticky ">
        <img src={process.env.PUBLIC_URL + "/img/photo.jpg"} alt="" />
        <div className="marque-bg">
          <Marquee speed={200}>
            <p className="marque-bg__event">We're all gonna make it, brah</p>
            <p>
              The day you stop caring about what other people think is the day
              you start living.
            </p>
            <p className="marque-bg__event">We're all gonna make it, brah</p>
            <p>
              The day you stop caring about what other people think is the day
              you start living.
            </p>
          </Marquee>
          <Marquee speed={150}>
            <p className="marque-bg__event">Get aesthetic or die mirin</p>
            <p>
              If you're out of breath, not sweating, and your muscles don't
              hurt... you're doing it wrong.
            </p>
            <p className="marque-bg__event">Get aesthetic or die mirin</p>
            <p>
              If you're out of breath, not sweating, and your muscles don't
              hurt... you're doing it wrong.
            </p>
          </Marquee>
          <Marquee speed={250}>
            <p>I don't work out for chicks. I workout to create an aura</p>
            <p className="marque-bg__event">You mirin?</p>
            <p>I don't work out for chicks. I workout to create an aura</p>
            <p className="marque-bg__event">You mirin?</p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Marque;
