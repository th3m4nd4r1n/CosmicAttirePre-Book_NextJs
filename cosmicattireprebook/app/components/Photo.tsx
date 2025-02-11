// import { div } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='h-[150vh] flex items-center'>

    <div className='flex justify-center items-center w-screen bg-[rgba(84,84,84,0.16)] h-[40vh]'>
        <div className='w-screen h-[35vh] bg-transparent border-y-[1px] border-white flex items-center justify-around'>
            <Image
            src="/wear.svg"
            width={700}
            height={400}
            alt="band"
            className='h-[25vh] w-[25vw]'
            />
            <Image
            src="/TAP(1).svg"
            width={413}
            height={199}
            alt="band"
            className='h-[25vh] w-[25vw]'
            />
            <Image
            src="/range.jpg"
            width={413}
            height={199}
            alt="band"
            className='h-[25vh] w-[25vw]'
            />   

           
        </div>
    </div>
            </div>
  )
}

export default Photo