'use client';

import { Environment, meshBounds, useGLTF } from "@react-three/drei";
import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { sRGBEncoding } from "@react-three/drei/helpers/deprecated";
import { Canvas } from "@react-three/fiber";

const Model = () => {
   const ref = useRef();
  // var scalingFactor = (max(window.innerWidth/1350, 0.9))*1.4;
  var scalingFactor = ((window.innerWidth/1350>0.9)?window.innerWidth/1350:0.9)*1.4;
 const viewport = useThree((state) => state.viewport);

 function Tick() {
   useFrame((state, delta) => {
    // console.log((window.innerWidth*30)/(60*window.innerHeight));
     ref.current.rotation.x=(Math.PI/2);
    //  window.onscroll = function(ev) {
    //   if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    //     ref.current.position.y=Math.sin(state.clock.elapsedTime);
    //   } };
    //  ref.current.rotation.z=0.5;
    //  ref.current.position.x=-0.22;
    ref.current.rotation.y=(-3*Math.PI/4.2)+Math.sin(state.clock.elapsedTime*0.9)*0.09;
    // ref.current.position.z=Math.sin(state.clock.elapsedTime)*0.2
    //  ref.current.rotation.y=window.scrollY*0.001;
    // // ref.current.position.y=-1;
    //       refRot.current.position.x=Math.sin(state.clock.elapsedTime*0.6);
        ref.current.rotation.z=Math.sin(window.scrollY*0.0005)*0.9;
    })}
   Tick();

    // 
 const { scene } = useGLTF('final_band.gltf');

    return (<>
      <pointLight  color={'wheat'} intensity={20} />
      <pointLight  color={'gray'} intensity={20} />
      <Environment preset="studio" environmentIntensity={1} />
      <mesh ref={ref} >
        <primitive object={scene} scale={scalingFactor} />
      </mesh>
    </>
);
}
export default Model;