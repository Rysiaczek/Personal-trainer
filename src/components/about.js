import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Kettel } from "./kettel";

import "../css/about.css";

function About() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const rotationValue = (scrollY / maxScroll) * Math.PI * 2;

      setRotation(rotationValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(rotation);
  return (
    <div className="about position-relative z-2" id="About">
      <div className="about-zip ">
        <div className="zip__element">
          <Canvas>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            <PerspectiveCamera makeDefault position={[0, 0.2, 7]} />
            <Kettel
              position={[0, -0.5, 2]}
              scale={[0.8, 0.8, 0.8]}
              rotation={[0, rotation, 0]}
            />
          </Canvas>
        </div>
      </div>
      <div className="about-content">
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
      </div>
    </div>
  );
}
export default About;
// function About() {
//   return (
//     <div className="main position-relative z-3" id="About">
//       <div className="container-fluid  pt-5">
//         <div className="row justify-content-center">
//           <p className=" main-title col-12 display-1 text-center pt-5 text-light">
//             Twoj cel to moja misja
//           </p>
//           <img
//             src={process.env.PUBLIC_URL + "/img/prof.jpg"}
//             alt=""
//             className="col-12 col-lg-5 me-0 me-lg-5"
//             style={{ height: "550px", width: "500px" }}
//           />
//           <div className="col-12 col-lg-8 ms-0 ms-md-5">
//             <div className="row ms-auto main-content justify-content-center">
//               <p className="text-light col-10 main-content-first">
//                 AAALorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Fugiat nam eligendi nostrum delectus enim. Aperiam voluptatum,
//                 eaque et animi eos quae explicabo, pariatur molestiae cupiditate
//                 placeat, harum incidunt illo? Tempore.
//               </p>
//               <p className="text-light col-6 col-lg-5 pe-0 pe-lg-0 main-content-sub">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Delectus at a reprehenderit et! Vitae corporis a natus minima
//                 eum amet, vel obcaecati quos molestias dolore. Tenetur
//                 exercitationem laboriosam quaerat at.
//               </p>
//               <p className="text-light col-6 col-lg-5 ps-0 ps-sm-5 main-content-sub">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Recusandae esse ducimus maiores, in nostrum ratione ex minima
//                 asperiores quisquam quam at voluptatum enim error a inventore
//                 dicta! Iusto, id officia?
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
