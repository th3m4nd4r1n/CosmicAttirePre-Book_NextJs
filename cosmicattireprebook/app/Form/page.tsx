'use client';
import React from 'react'

import '../customs.css'

const page = () => {
  return (
    <>
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
    <h2 className='font-[balle] text-[10vw] uppercase text-red-600'>
 Thank You!
    </h2>
    <h2 className='font-[balle] text-[5vw]'>
      For ordering from us!
    </h2 >
    <h2 className='font-[balle] text-[1vw]'>
      Please check your mail for confirmation
    </h2>
    <a href="/"><button className='w-[10vw] text-[balle] text-[1.2vw] text-black hover:text-red-600 hover:bg-black bg-red-600 rounded-lg'>Go To Home</button></a>
    </div>
    </>
  )
}

export default page