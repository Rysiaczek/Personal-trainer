import React, { useEffect, useState, useRef } from "react";
import Marquee from "react-fast-marquee";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Model } from "./BlackModel";

import "../css/about.css";

function About() {
  const [rotation, setRotation] = useState(0);

  const elementOneRef = useRef(null);
  const elementTwoRef = useRef(null);
  const elementThreeRef = useRef(null);
  const elementFourRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
        } else {
          entry.target.classList.remove("slide-in");
        }
      });
    }, observerOptions);

    observer.observe(elementOneRef.current);
    observer.observe(elementTwoRef.current);
    observer.observe(elementThreeRef.current);
    observer.observe(elementFourRef.current);

    return () => {
      if (elementOneRef.current) observer.unobserve(elementOneRef.current);
      if (elementTwoRef.current) observer.unobserve(elementTwoRef.current);
      if (elementThreeRef.current) observer.unobserve(elementThreeRef.current);
      if (elementFourRef.current) observer.unobserve(elementFourRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const rotationValue = (scrollY / maxScroll) * Math.PI * 6;

      setRotation(rotationValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="about position-relative z-2" id="About">
      <div className="about-title">
        <div className="about-title__img">
          <img src={process.env.PUBLIC_URL + "/img/prof.jpg"} alt="" />
        </div>
        <div className="about-title__text mt-5">
          <p>
            Twoje zdrowie i dobre samopoczucie są najważniejsze, a ja pokażę Ci
            jak osiągnąć swoje cele.
          </p>
        </div>
      </div>
      <div className="about-zip ">
        <div className="zip__element">
          <Canvas>
            <ambientLight intensity={0.6} />
            <directionalLight color="white" position={[3, 5, 5]} />
            <pointLight position={[10, 10, 10]} />
            <PerspectiveCamera makeDefault position={[0, 0.2, 7]} />
            <Model
              position={[0, -0.5, 2]}
              scale={[0.8, 0.8, 0.8]}
              rotation={[0, rotation, 0]}
            />
          </Canvas>
        </div>
      </div>
      <div className="about-content">
        <div className="about-content__element about-content__element-oneImg">
          <img src={process.env.PUBLIC_URL + "/img/aboutPhoto1.jpg"} alt="" />
        </div>
        <div
          className="about-content__element about-content__element-one"
          ref={elementOneRef}>
          <p>
            Oferuję profesjonalne treningi personalne, grupowe i firmowe w
            siłowni Power on Gym w Chojnie, która jest doskonale wyposażona i
            dostosowana do różnorodnych potrzeb fitnessowych. Nasza oferta
            obejmuje:
          </p>
        </div>
        <div
          className="about-content__element about-content__element-two"
          ref={elementTwoRef}>
          <p>
            Treningi personalne – Spersonalizowane sesje treningowe, które są
            dostosowane do Twoich indywidualnych celów, poziomu zaawansowania
            oraz preferencji. Naszym celem jest zapewnienie Ci optymalnych
            rezultatów poprzez dokładne analizowanie Twoich postępów i
            dostosowywanie planu treningowego do Twoich potrzeb.
          </p>
        </div>
        <div
          className="about-content__element about-content__element-three"
          ref={elementThreeRef}>
          <p>
            Treningi grupowe – Dynamiczne i motywujące zajęcia prowadzone w
            grupie, które łączą różnorodne formy ćwiczeń. To doskonała okazja do
            pracy nad kondycją, siłą i elastycznością w przyjaznej atmosferze, a
            także możliwość spotkania nowych ludzi o podobnych
            zainteresowaniach.
          </p>
        </div>
        <div
          className="about-content__element about-content__element-four"
          ref={elementFourRef}>
          <p>
            Nasza siłownia w Chojnie to miejsce, gdzie znajdziesz nowoczesny
            sprzęt, profesjonalną obsługę oraz inspirującą atmosferę do
            osiągania swoich celów fitnessowych. Dołącz do nas i zacznij swoją
            drogę do lepszej kondycji już dziś!
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
