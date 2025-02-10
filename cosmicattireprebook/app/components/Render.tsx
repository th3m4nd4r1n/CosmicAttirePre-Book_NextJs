'use client';
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model'

const Render = () => {
  return (
    <div className='w-screen h-screen -z-10'>
  <Canvas className='-z-10'>
    <Model />
  </Canvas>
    </div>
  )
}

export default Render