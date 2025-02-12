// import { div } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='h-[150vh] flex items-center'>

    <div className='flex  justify-center items-center w-screen bg-[rgba(84,84,84,0.16)] h-screen md:h-[40vh]'>
        <div className='w-screen h-[95vh] md:h-[35vh] bg-transparent border-y-[1px] border-white flex md:flex-row flex-col items-center justify-around'>
            <Image
            src="/WEAR.svg"
            width={700}
            height={500}
            alt="band"
            className='md:h-[25vh] md:w-[25vw] hover:scale-110 duration-200'
            />
            <Image
            src="/tap.svg"
            width={700}
            height={500}
            alt="band"
            className='md:h-[25vh] md:w-[25vw] hover:scale-110 duration-200'
            />
            <Image
            src="/share.svg"
            width={700}
            height={500}
            alt="band"
            className='md:h-[25vh] md:w-[25vw] hover:scale-110 duration-200'
            />   

           
        </div>
    </div>
            </div>
  )
}

export default Photo