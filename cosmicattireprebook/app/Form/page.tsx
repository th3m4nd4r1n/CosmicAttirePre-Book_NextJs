'use client';
import React from 'react'
import Timer from './components/Timer'
import '../customs.css'

const page = () => {
  return (
    <>
    <div className='absolute w-screen h-[40vh] flex flex-col justify-end items-center'>
    <h1 className='text-red-600 text-[10vw] font-[k2d] font-thin'>
        ALPHA 1
    </h1> <br /><br />
    <h2 className='text-5xl uppercase font-[balle]'>
    is on its <span>WAY</span> 
    </h2>
    </div>
    <div className='h-screen w-screen flex justify-center items-center '>
    <Timer launchDate="2025-02-10T22:10" />
    </div>
    </>
  )
}

export default page