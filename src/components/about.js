import React, { useEffect, useState, useRef } from "react";
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
  const elementFiveRef = useRef(null);
  const elementimgRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
        }
      });
    }, observerOptions);

    observer.observe(elementimgRef.current);
    observer.observe(elementOneRef.current);
    observer.observe(elementTwoRef.current);
    observer.observe(elementThreeRef.current);
    observer.observe(elementFourRef.current);
    observer.observe(elementFiveRef.current);

    return () => {
      if (elementOneRef.current) observer.unobserve(elementimgRef.current);
      if (elementOneRef.current) observer.unobserve(elementOneRef.current);
      if (elementTwoRef.current) observer.unobserve(elementTwoRef.current);
      if (elementThreeRef.current) observer.unobserve(elementThreeRef.current);
      if (elementFourRef.current) observer.unobserve(elementFourRef.current);
      if (elementFourRef.current) observer.unobserve(elementFiveRef.current);
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
            Twoje zdrowie i dobre samopoczucie jest najważniejsze, więc daj
            sobie pomóc i zacznij już dziś!
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
        <div
          className="about-content__element about-content__element-oneImg"
          ref={elementimgRef}>
          <img src={process.env.PUBLIC_URL + "/img/aboutPhoto1.jpg"} alt="" />
        </div>
        <div
          className="about-content__element about-content__element-one"
          ref={elementOneRef}>
          <p>
            Oferuję profesjonalne usługi treningowe na siłowni Power on Gym w
            Chojnie, która jest doskonale wyposażona i dostosowana do
            różnorodnych potrzeb treningowych. Nasza oferta obejmuje:
          </p>
          <hr />
        </div>
        <div
          className="about-content__element about-content__element-two"
          ref={elementTwoRef}>
          <p>
            Treningi indywidualne – Spersonalizowane sesje treningowe, które są
            dostosowane do Twoich indywidualnych potrzeb, poziomu zaawansowania
            oraz preferencji. Naszym celem jest zapewnienie Ci optymalnych
            rezultatów poprzez dokładne analizowanie i raportowanie Twoich
            postępów.
          </p>
          <hr />
        </div>
        <div
          className="about-content__element about-content__element-three"
          ref={elementThreeRef}>
          <p>
            Trening w parze - jeżeli jesteś nieśmiały, lub wolisz ćwiczyć w
            towarzystwie. Nic straconego! Zaproś swojego przyjaciela na trening,
            jeśli macie wspólny cel.
          </p>
          <hr />
        </div>
        <div
          className="about-content__element about-content__element-four"
          ref={elementFourRef}>
          <p>
            Rozpisywanie planów treningowych - wiesz jak wykonywać poprawnie
            ćwiczenia, ale czujesz się przetrenowany po każdym treningu i nie
            widzisz progresu? Odezwij się do mnie po plan, a z pewnością
            zobaczysz różnicę.
          </p>
          <hr />
        </div>
        <div
          className="about-content__element about-content__element-five"
          ref={elementFiveRef}>
          <p>
            Nasza siłownia w Chojnie to miejsce, gdzie znajdziesz nowoczesny
            sprzęt, profesjonalną obsługę oraz inspirującą atmosferę do
            osiągania swoich szczytnych celów. Dołącz do nas i zacznij swoją
            drogę do lepszej kondycji już dziś!
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default About;
