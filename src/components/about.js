import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Model } from "./BlackModel";

import "../css/about.css";

function About() {
  const [rotation, setRotation] = useState(0);

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
        <div>
          <div className="marque-clouds">
            <Marquee speed={120} className="mt-5 mb-3 ">
              <img
                src={process.env.PUBLIC_URL + "/img/cloud1.png"}
                alt=""
                className="cloud1"
              />
            </Marquee>
            <Marquee speed={160} className="mt-3 mb-3 ">
              <img
                src={process.env.PUBLIC_URL + "/img/cloud1.png"}
                alt=""
                className="cloud2"
              />
            </Marquee>
            <Marquee speed={130} className="mt-5 ">
              <img
                src={process.env.PUBLIC_URL + "/img/cloud1.png"}
                alt=""
                className="cloud3"
              />
            </Marquee>
          </div>
        </div>
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
        <div className="about-content__element about-content__element-one">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            pariatur incidunt facilis omnis harum quas, illo nesciunt
            repellendus aut ullam, provident, iste perspiciatis id. Error rem
            ullam amet sint repudiandae! Animi sunt, eaque nostrum ab autem
            corrupti delectus? Consequatur aliquam dolor laborum dicta quae nisi
            dolore beatae vero ratione ipsam sapiente et, necessitatibus aut
            unde velit reprehenderit eum atque veritatis!
          </p>
        </div>
        <div className="about-content__element about-content__element-two">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            pariatur incidunt facilis omnis harum quas, illo nesciunt
            repellendus aut ullam, provident, iste perspiciatis id. Error rem
            ullam amet sint repudiandae! Animi sunt, eaque nostrum ab autem
            corrupti delectus? Consequatur aliquam dolor laborum dicta quae nisi
            dolore beatae vero ratione ipsam sapiente et, necessitatibus aut
            unde velit reprehenderit eum atque veritatis!
          </p>
        </div>
        <div className="about-content__element about-content__element-three">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            pariatur incidunt facilis omnis harum quas, illo nesciunt
            repellendus aut ullam, provident, iste perspiciatis id. Error rem
            ullam amet sint repudiandae! Animi sunt, eaque nostrum ab autem
            corrupti delectus? Consequatur aliquam dolor laborum dicta quae nisi
            dolore beatae vero ratione ipsam sapiente et, necessitatibus aut
            unde velit reprehenderit eum atque veritatis!
          </p>
        </div>
        <div className="about-content__element about-content__element-four">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            pariatur incidunt facilis omnis harum quas, illo nesciunt
            repellendus aut ullam, provident, iste perspiciatis id. Error rem
            ullam amet sint repudiandae! Animi sunt, eaque nostrum ab autem
            corrupti delectus? Consequatur aliquam dolor laborum dicta quae nisi
            dolore beatae vero ratione ipsam sapiente et, necessitatibus aut
            unde velit reprehenderit eum atque veritatis!
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
