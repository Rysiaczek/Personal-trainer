/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/kettlebell/model.glb 
Author: Ya (https://sketchfab.com/Yarik16)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/kettlebell-33d7aecfa8504b52b4740e684eb0eaca
Title: Kettlebell
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/model.glb");
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

useGLTF.preload("/model.glb");
