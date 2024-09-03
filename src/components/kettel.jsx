import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Kettel(props) {
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + "/models/kettlebell/model.glb"
  );

  return (
    <group {...props} dispose={null}>
      <group scale={1.631}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.iron} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.yellow} />
      </group>
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.material}
        scale={0.699}
      />
    </group>
  );
}

useGLTF.preload(process.env.PUBLIC_URL + "/models/kettlebell/model.glb");
