import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeDScroll = () => {
  useEffect(() => {
    // Inicjalizacja sceny, kamery i renderera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector(".zip__element").appendChild(renderer.domElement);

    // Ładowanie modelu glTF
    const loader = new GLTFLoader();
    loader.load("./models/kettlebell.glb", (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Ustawienie pozycji kamery
      camera.position.z = 5;

      // Funkcja renderująca
      const animate = () => {
        requestAnimationFrame(animate);

        // Logika obrotu na podstawie scrolla
        model.rotation.y = window.scrollY * 0.01;

        renderer.render(scene, camera);
      };

      animate();
    });

    // Cleanup po usunięciu komponentu
    return () => {
      document.querySelector(".zip__element").removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default ThreeDScroll;
